import os
import glob
import re

dir_path = "/Users/masoodzafar/IT Hustle/Utility Gamble/CalcHive"
base_url = "https://thecalchive.com"

# 1. Update HTML files (add canonical, fix internal links)
html_files = glob.glob(os.path.join(dir_path, "*.html"))

for filepath in html_files:
    filename = os.path.basename(filepath)
    if filename.startswith('build') or filename.startswith('.'):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine canonical URL
    if filename == 'index.html':
        canonical_url = f"{base_url}/"
    else:
        page_name = filename.replace('.html', '')
        canonical_url = f"{base_url}/{page_name}"
    
    canonical_tag = f'<link rel="canonical" href="{canonical_url}">'
    
    # Remove existing canonical if any
    content = re.sub(r'<link rel="canonical" href="[^"]*">\n?', '', content)
    
    # Inject canonical just before </head>
    content = content.replace('</head>', f'{canonical_tag}\n</head>')

    # Update internal links (remove .html)
    def replace_html_links(match):
        link = match.group(1)
        if link == 'index.html':
            return match.group(0).replace('index.html', '/')
        elif link.endswith('-calculator.html'):
            return match.group(0).replace('.html', '')
        return match.group(0)

    # Replace window.location.href='...'
    content = re.sub(r"window\.location\.href='([^']+)'", replace_html_links, content)
    # Replace href="..."
    content = re.sub(r'href="([^"]+\.html)"', replace_html_links, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated SEO for {filename}")

# 2. Update app.js (remove .html from window.location.href)
app_js_path = os.path.join(dir_path, 'app.js')
if os.path.exists(app_js_path):
    with open(app_js_path, 'r', encoding='utf-8') as f:
        app_js_content = f.read()
    
    # Replace index.html and -calculator.html
    def replace_js_links(match):
        link = match.group(1)
        if link == 'index.html':
            return match.group(0).replace('index.html', '/')
        elif link.endswith('-calculator.html'):
            return match.group(0).replace('.html', '')
        return match.group(0)

    app_js_content = re.sub(r"window\.location\.href='([^']+)'", replace_js_links, app_js_content)
    
    with open(app_js_path, 'w', encoding='utf-8') as f:
        f.write(app_js_content)
    print("Updated SEO for app.js")

# 3. Generate new sitemap.xml
from datetime import datetime
today = datetime.today().strftime('%Y-%m-%d')

xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for filepath in sorted(html_files):
    filename = os.path.basename(filepath)
    if filename.startswith('build') or filename.startswith('.'):
        continue
    
    if filename == 'index.html':
        url = f"{base_url}/"
        priority = "1.0"
    else:
        page_name = filename.replace('.html', '')
        url = f"{base_url}/{page_name}"
        priority = "0.8"
        
    xml_content += f"  <url>\n"
    xml_content += f"    <loc>{url}</loc>\n"
    xml_content += f"    <lastmod>{today}</lastmod>\n"
    xml_content += f"    <changefreq>weekly</changefreq>\n"
    xml_content += f"    <priority>{priority}</priority>\n"
    xml_content += f"  </url>\n"

xml_content += '</urlset>'

sitemap_path = os.path.join(dir_path, 'sitemap.xml')
with open(sitemap_path, 'w', encoding='utf-8') as f:
    f.write(xml_content)

print("Generated new sitemap.xml for CalcHive")
