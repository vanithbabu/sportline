import os
import re

css_files = []
for root, _, files in os.walk('app'):
    for file in files:
        if file.endswith('.css'):
            css_files.append(os.path.join(root, file))

def scale_px(match):
    prop = match.group(1)
    val_str = match.group(2)
    
    def scale_val(m):
        val = int(m.group(1))
        if val >= 50:
            val = int(val * 0.85)
        return f"{val}px"
        
    new_val_str = re.sub(r'([0-9]+)px', scale_val, val_str)
    return f"{prop}:{new_val_str}"

for filepath in css_files:
    with open(filepath, 'r') as f:
        content = f.read()

    # match padding, margin, min-height
    content = re.sub(r'(padding(?:-(?:top|bottom|left|right))?|margin(?:-(?:top|bottom|left|right))?|min-height)\s*:\s*([^;]+)', scale_px, content)
    
    with open(filepath, 'w') as f:
        f.write(content)
