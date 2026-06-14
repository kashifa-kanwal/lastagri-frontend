import os
import glob
files = []
for ext in ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.ico']:
    files.extend(glob.glob(f'C:/Users/HC/.gemini/antigravity/**/*{ext}', recursive=True))
files.sort(key=os.path.getmtime, reverse=True)
with open('C:/Users/HC/Desktop/Archive 2/zip/agriconnect-app/tmp_images.txt', 'w') as f:
    f.write('\n'.join(files[:5]))
