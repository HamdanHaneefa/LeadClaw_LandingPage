#!/usr/bin/env python3
"""
Generate favicon files from logo.svg
Requires: pip install cairosvg pillow
"""

from cairosvg import svg2png
from PIL import Image
import io

# Read the SVG file
with open('../public/logo.svg', 'r') as f:
    svg_data = f.read()

# Generate different sizes
sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'favicon-48x48.png': 48,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
}

print("Generating favicon files...")

for filename, size in sizes.items():
    print(f"Creating {filename} ({size}x{size})...")
    png_data = svg2png(bytestring=svg_data.encode('utf-8'), output_width=size, output_height=size)
    
    with open(f'../public/{filename}', 'wb') as f:
        f.write(png_data)

# Create multi-size ICO file
print("Creating favicon.ico with multiple sizes...")
ico_sizes = [16, 32, 48]
images = []

for size in ico_sizes:
    png_data = svg2png(bytestring=svg_data.encode('utf-8'), output_width=size, output_height=size)
    img = Image.open(io.BytesIO(png_data))
    images.append(img)

# Save as ICO with multiple sizes
images[0].save(
    '../public/favicon.ico',
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=images[1:]
)

print("✓ All favicon files generated successfully!")
print("\nGenerated files:")
for filename in sizes.keys():
    print(f"  - public/{filename}")
print("  - public/favicon.ico")
