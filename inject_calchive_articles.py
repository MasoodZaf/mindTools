import os
import re

directory = "CalcHive"

for filename in os.listdir(directory):
    if filename.endswith(".html") and filename != "index.html":
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            html = f.read()

        # If it already has an article, skip
        if '<article style="max-width:800px;' in html:
            continue

        # Extract title to construct article
        title_match = re.search(r'<title>(.*?)</title>', html)
        if not title_match:
            continue
            
        full_title = title_match.group(1).split('—')[0].strip()
        tool_name = full_title.replace('Calculator', '').strip()

        article = f"""
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">What is the {full_title}?</h2>
  <p style="margin-bottom: 1.5rem;">The {full_title} is a free, fast, and easy-to-use digital tool designed to help you calculate your {tool_name.lower()} instantly. Whether you are using it for personal finance, health tracking, academic purposes, or daily utility, this calculator provides accurate results without the need for manual math or complex spreadsheets. Built to be responsive, it works perfectly on both mobile and desktop browsers.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How to Use This Online Tool</h2>
  <p style="margin-bottom: 1.5rem;">Using our {tool_name.lower()} calculator is incredibly straightforward. Simply enter your specific values into the input fields provided at the top of the page. The calculator relies on standard mathematical formulas and industry-accepted algorithms to compute the results in real-time. Once you input the data, the final output is immediately generated, allowing you to make quick, informed decisions based on accurate data.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Why Choose CalcHive?</h2>
  <p style="margin-bottom: 1.5rem;">CalcHive provides a suite of 100% free online calculators spanning health, finance, education, and lifestyle. We respect your privacy—there are no sign-ups required, no apps to download, and all calculations are processed securely in your browser. Bookmark this page to keep your {full_title} easily accessible whenever you need it!</p>
</article>
"""
        
        if '<footer>' in html:
            html = html.replace('<footer>', article + '\\n<footer>')
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"Injected generic SEO article into {filename}")
