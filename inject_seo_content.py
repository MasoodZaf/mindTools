import os

content_dict = {
    "bmi-calculator.html": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">What is Body Mass Index (BMI)?</h2>
  <p style="margin-bottom: 1.5rem;">The Body Mass Index (BMI) is a widely-used screening tool that estimates whether a person has a healthy body weight for a given height. By simply inputting your height and weight, the BMI calculator provides a mathematical calculation that helps categorize your weight into standard brackets: Underweight, Normal, Overweight, and Obese. While it doesn't directly measure body fat, it correlates strongly with more direct measures of body fat.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How is BMI Calculated?</h2>
  <p style="margin-bottom: 1.5rem;">The universal formula for calculating BMI is simple. If you are using the metric system, you divide your weight in kilograms by your height in meters squared (kg/m²). For the imperial system, you divide your weight in pounds by your height in inches squared, and multiply by 703.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Limitations of the BMI Calculator</h2>
  <p style="margin-bottom: 1.5rem;">It is important to remember that BMI is an estimate, not a diagnostic tool. The calculator does not account for muscle mass, bone density, overall body composition, or racial and sex differences. For example, athletes with high muscle mass may have a high BMI but very low body fat. Always consult with a healthcare professional to get a complete picture of your metabolic and cardiovascular health.</p>
</article>
""",
    
    "emi-calculator.html": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Understanding Your EMI (Equated Monthly Installment)</h2>
  <p style="margin-bottom: 1.5rem;">An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. Equated monthly installments are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full. Our EMI calculator helps you instantly figure out your monthly obligations before taking out a car loan, home loan, or personal loan.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How Does an EMI Calculator Work?</h2>
  <p style="margin-bottom: 1.5rem;">The mathematical formula to calculate EMI involves three main variables: the Principal Loan Amount (P), the Rate of Interest (R), and the Loan Tenure in months (N). Because manual calculations involving compounding interest can be complex and prone to human error, an online EMI calculator automates the process, giving you the precise breakdown of your monthly payment, total interest payable, and the total payment amount.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Why You Should Calculate EMI Before Borrowing</h2>
  <p style="margin-bottom: 1.5rem;">Knowing your EMI is crucial for personal financial planning. It allows you to assess your monthly cash flow and determine if you can comfortably afford the loan. By experimenting with different tenures and interest rates in the calculator above, you can find the perfect balance between keeping your monthly payments affordable and minimizing the total interest paid over the life of the loan.</p>
</article>
""",

    "salary-calculator.html": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Convert Your Hourly Wage to an Annual Salary</h2>
  <p style="margin-bottom: 1.5rem;">The Salary Calculator is an essential financial tool designed to help freelancers, hourly workers, and salaried employees seamlessly convert their pay rates across different time periods. Whether you know your hourly wage and want to calculate your annual salary, or you know your yearly salary and want to find out what that equates to per hour, this tool handles the math instantly.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How the Math Works</h2>
  <p style="margin-bottom: 1.5rem;">A standard full-time work year is generally calculated at 40 hours per week for 52 weeks, totaling 2,080 working hours in a year. To find your annual salary from an hourly wage, you multiply your hourly rate by the number of hours worked per week, and then by 52. Conversely, to find your hourly rate from a salary, divide your annual pay by 2,080. This calculator assumes a standard work year, but gives you a solid baseline for negotiating job offers.</p>
</article>
""",

    "percent-calculator.html": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">The Ultimate Percentage Calculator</h2>
  <p style="margin-bottom: 1.5rem;">Percentages are everywhere in daily life—from figuring out a tip at a restaurant, to calculating sales tax, to determining the discount on a retail item. However, calculating percentages mentally can sometimes be tricky. The Percentage Calculator simplifies these everyday math problems into simple, fill-in-the-blank formulas.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Common Uses for Percentage Calculations</h2>
  <p style="margin-bottom: 1.5rem;">There are three main types of percentage problems this tool solves. First, finding 'X percent of Y' (e.g., finding a 20% tip on a $50 bill). Second, finding what percentage one number is of another (e.g., getting 45 questions right out of 60 on a test). Third, finding the percentage increase or decrease between two numbers, which is incredibly useful for tracking financial growth, stock market changes, or retail markdowns.</p>
</article>
""",

    "age-calculator.html": """
<article style="max-width:800px; margin: 4rem auto; padding: 0 2rem; color: var(--ink2); line-height: 1.8; font-size: 15px;">
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">Chronological Age Calculator</h2>
  <p style="margin-bottom: 1.5rem;">Have you ever needed to know your exact age down to the days, or wondered exactly how many months old your baby is? The Chronological Age Calculator accurately determines the exact time difference between two dates. It is perfect for calculating a person's exact age for legal documents, medical forms, or just out of curiosity.</p>
  
  <h2 style="font-family: 'Fraunces', serif; font-size: 24px; color: var(--ink); margin-bottom: 1rem;">How the Age Calculator Handles Leap Years</h2>
  <p style="margin-bottom: 1.5rem;">Calculating age isn't as simple as dividing the number of days by 365. Because of leap years and months with varying numbers of days (28, 29, 30, or 31), manual calculations are tedious. This tool uses precise calendar algorithms to account for every leap year and month-length variation, ensuring your calculated age in years, months, and days is 100% accurate.</p>
</article>
"""
}

for filename, html_content in content_dict.items():
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            file_data = f.read()
        
        # Inject just above <footer>
        if '<footer>' in file_data and '<article style="max-width:800px;' not in file_data:
            file_data = file_data.replace('<footer>', html_content + '\n<footer>')
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(file_data)
            print(f"Injected SEO content into {filename}")
        else:
            print(f"Skipped {filename} (already injected or no footer found)")
    else:
        print(f"File {filename} not found.")
