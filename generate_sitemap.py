import os
import glob
from datetime import datetime

base_url = "https://mindtools.pages.dev"
files = glob.glob("*.html")

xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

today = datetime.today().strftime('%Y-%m-%d')

for f in sorted(files):
    # Exclude any temporary or old files if needed
    if f.startswith('build') or f.startswith('.'):
        continue
    
    url = f"{base_url}/{f}"
    
    # Priority rules
    priority = "0.8"
    if f in ['calchive.html', 'wordkit.html']:
        priority = "1.0"
    
    xml_content += f"  <url>\n"
    xml_content += f"    <loc>{url}</loc>\n"
    xml_content += f"    <lastmod>{today}</lastmod>\n"
    xml_content += f"    <changefreq>weekly</changefreq>\n"
    xml_content += f"    <priority>{priority}</priority>\n"
    xml_content += f"  </url>\n"

xml_content += '</urlset>'

with open('sitemap.xml', 'w', encoding='utf-8') as out:
    out.write(xml_content)

print(f"Generated sitemap.xml with {len(files)} URLs.")
