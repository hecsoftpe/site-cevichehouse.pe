import cv2, numpy as np, sys, os
src, out, h = sys.argv[1], sys.argv[2], float(sys.argv[3])
im = cv2.imread(src).astype(np.float32)/255
u8 = lambda a: np.clip(a,0,255).astype(np.uint8)
lab = cv2.cvtColor(im, cv2.COLOR_BGR2LAB); L = lab[...,0]
L8 = u8(L*2.55)
Ls = cv2.fastNlMeansDenoising(L8, None, h=h, templateWindowSize=7, searchWindowSize=21).astype(np.float32)
Lh = cv2.fastNlMeansDenoising(L8, None, h=h*1.8, templateWindowSize=7, searchWindowSize=21).astype(np.float32)
# structure mask: strong edges keep the lighter denoise, flat areas get the heavy one
g = cv2.GaussianBlur(Lh, (0,0), 1.5)
edge = cv2.magnitude(cv2.Sobel(g, cv2.CV_32F,1,0), cv2.Sobel(g, cv2.CV_32F,0,1))
m = np.clip((edge-18)/40, 0, 1); m = cv2.GaussianBlur(m,(0,0),2)
Ld = (m*Ls + (1-m)*Lh)/2.55
blur = cv2.GaussianBlur(Ld, (0,0), 2.0)
Ld = np.clip(Ld + 0.35*m*(Ld-blur), 0, 100)
a = cv2.bilateralFilter(lab[...,1], 9, 10, 7); b = cv2.bilateralFilter(lab[...,2], 9, 10, 7)
im2 = cv2.cvtColor(cv2.merge([Ld, a, b]), cv2.COLOR_LAB2BGR)
lum = cv2.cvtColor(im2, cv2.COLOR_BGR2GRAY)
sh = np.clip(1 - lum/0.5, 0, 1)[...,None]
im2 = np.clip(im2 + sh*np.array([-0.03, -0.005, 0.02], np.float32), 0, 1)
lo, hi = np.percentile(im2, 0.5), np.percentile(im2, 99.7)
im2 = np.clip((im2-lo)/(hi-lo), 0, 1)
im2 = np.clip(im2 + 0.08*(im2-0.5)*(1-np.abs(2*im2-1)), 0, 1)   # gentle contrast
# tame over-saturated yellow-greens (avocado / asparagus) slightly
hsv = cv2.cvtColor((im2*255).astype(np.uint8), cv2.COLOR_BGR2HSV).astype(np.float32)
hue = hsv[...,0]; green = np.exp(-((hue-38)/10)**2)
hsv[...,1] *= (1 - 0.14*green)
im3 = cv2.cvtColor(u8(hsv), cv2.COLOR_HSV2BGR).astype(np.float32)
rng = np.random.default_rng(7); grain = rng.normal(0, 2.2, im3.shape[:2]).astype(np.float32)
im3 = u8(im3 + cv2.GaussianBlur(grain,(0,0),0.6)[...,None])
cv2.imwrite(out, im3, [cv2.IMWRITE_JPEG_QUALITY, 94])
