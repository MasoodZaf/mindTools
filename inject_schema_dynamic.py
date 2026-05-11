import os
import re
import json

def inject_schema_to_html(directory, base_url):
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            filepath = os.path.join(directory, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                html = f.read()

            if '<script type="application/ld+json">' in html:
                continue

            # Extract title and description
            title_match = re.search(r'<title>(.*?)</title>', html)
            desc_match = re.search(r'<meta name="description" content="(.*?)">', html)
            
            title = title_match.group(1).split('—')[0].strip() if title_match else "Tool"
            desc = desc_match.group(1).strip() if desc_match else ""

            # Fix URL for index.html
            url_path = "" if filename == "index.html" else filename.replace('.html', '')
            
            schema = {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": title,
                "url": f"{base_url}/{url_path}".rstrip('/'),
                "description": desc,
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "All"
            }
            schema_script = f'\\n<script type="application/ld+json">\\n{json.dumps(schema, indent=2)}\\n</script>\\n</head>'
            
            html = html.replace('</head>', schema_script)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"Injected Schema into {directory}/{filename}")

inject_schema_to_html("CalcHive", "https://thecalchive.com")
inject_schema_to_html("WordKit", "https://wordkitapp.com")
