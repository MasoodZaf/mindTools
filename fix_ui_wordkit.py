import os
import re

dir_path = "/Users/masoodzafar/IT Hustle/Utility Gamble/WordKit"

pattern_with_angle = re.compile(r'\s*onmouseover="this\.style\.borderColor=\'var\(--[a-zA-Z0-9]+\)\'"\s*onmouseout="this\.style\.borderColor=\'var\(--border\)\'"\s*>')
pattern_no_angle = re.compile(r'\s*onmouseover="this\.style\.borderColor=\'var\(--[a-zA-Z0-9]+\)\'"\s*onmouseout="this\.style\.borderColor=\'var\(--border\)\'"')

for filename in os.listdir(dir_path):
    if filename.endswith(".html"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, "r") as f:
            content = f.read()
        
        lines = content.split('\n')
        new_lines = []
        for line in lines:
            if '<button' in line and 'wk-home-card-pin' in line:
                line = re.sub(pattern_with_angle, '', line)
            else:
                line = re.sub(pattern_no_angle, '', line)
            
            # Fix unclosed divs
            if line.endswith('position:relative"'):
                line += '>'
            if line.endswith('grid-column:span 1"'):
                line += '>'
            
            new_lines.append(line)
            
        with open(filepath, "w") as f:
            f.write('\n'.join(new_lines))
        print(f"Fixed {filename}")
