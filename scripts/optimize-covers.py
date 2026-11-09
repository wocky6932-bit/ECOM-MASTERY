from PIL import Image
import os

images = [
    'public/images/cover-boutique-en-ligne.jpg',
    'public/images/cover-facebook-ads.jpg',
    'public/images/cover-alibaba-sourcing.jpg',
]

for p in images:
    if os.path.exists(p):
        old_size = os.path.getsize(p)
        im = Image.open(p)
        # Resize to standard crisp dimensions (e.g. max width 700px)
        im.thumbnail((700, 1000), Image.Resampling.LANCZOS)
        im.save(p, 'JPEG', quality=82, optimize=True, progressive=True)
        new_size = os.path.getsize(p)
        print(f"Optimized {p}: {old_size//1024}KB -> {new_size//1024}KB")
