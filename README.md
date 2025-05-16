# 💸 Inflation Impact Calculator

An interactive, browser-based tool that demonstrates how inflation impacts the value of money over time. Built with **HTML**, **CSS**, and **JavaScript**, this static web app visualizes the erosion of purchasing power using real-time calculations and charts — all running fully client-side.

🔗 **Live Demo**: [https://silverbackossi.github.io/inflation-impact-calculator/](https://silverbackossi.github.io/inflation-impact-calculator/)

---

## 📊 Features

- 🔢 Input custom amount, inflation rate, and time period
- 📉 Calculates future value adjusted for inflation
- 📆 Optional year-by-year breakdown
- 📈 Interactive chart visualization using [Chart.js](https://www.chartjs.org/)
- 💾 Runs entirely in the browser — no backend or API required

---

## 🧮 Formula

The calculation is based on:

```text
Adjusted Value = Amount / (1 + r)^n
Where:

Amount = present-day money

r = annual inflation rate (as a decimal)

n = number of years
```

## 🚀 Getting Started
1. Clone the repository
bash
Copy code
git clone https://github.com/SilverbackOssi/Inflation-Impact-Calculator.git
cd inflation-impact-calculator
2. Open index.html in your browser
No build tools or installations needed — just open the file directly.

## 📁 Project Structure
```bash
/
├── index.html       # Main HTML file
├── style.css        # Styling and layout
├── script.js        # App logic and chart rendering
└── README.md        # Project overview
```
## 🌐 Deployment
This project is hosted using GitHub Pages.

URL: https://silverbackossi.github.io/inflation-impact-calculator/

You can fork and deploy your own version by enabling GitHub Pages under the repository settings.

## 📌 Roadmap
Planned enhancements:

 Compare two inflation scenarios side-by-side

 Add option to reverse-calculate past value

 Support for dark/light theme toggle

 Export chart data as CSV

## 🛠 Technologies Used
HTML5

CSS3 (Flexbox/Grid)

Vanilla JavaScript (ES6)

Chart.js (for data visualization)

## 📄 License
MIT License © [Anyim Ossi]

## 🙌 Acknowledgments
Inspired by personal finance tools and educational calculators to help people understand the long-term impact of inflation.
