document.getElementById("inflation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const rate1 = parseFloat(document.getElementById("rate").value);
  const rate2 = parseFloat(document.getElementById("compareRate").value);
  const years = parseInt(document.getElementById("years").value);
  const mode = document.getElementById("mode").value;

  if (isNaN(amount) || isNaN(rate1) || isNaN(years)) return;

  const resultEl = document.getElementById("result");

  // Calculate main adjusted value
  let adjusted;
  if (mode === "future") {
    adjusted = amount / Math.pow(1 + rate1 / 100, years);
    resultEl.textContent = `Future Value (adjusted): $${adjusted.toFixed(2)}`;
  } else {
    adjusted = amount * Math.pow(1 + rate1 / 100, years);
    resultEl.textContent = `Past Equivalent Value: $${adjusted.toFixed(2)}`;
  }

  const labels = [];
  const data1 = [];
  const data2 = [];

  for (let i = 0; i <= years; i++) {
    labels.push(`${i} yr`);
    if (mode === "future") {
      data1.push(amount / Math.pow(1 + rate1 / 100, i));
      if (!isNaN(rate2)) data2.push(amount / Math.pow(1 + rate2 / 100, i));
    } else {
      data1.push(amount * Math.pow(1 + rate1 / 100, i));
      if (!isNaN(rate2)) data2.push(amount * Math.pow(1 + rate2 / 100, i));
    }
  }

  if (window.inflationChart) window.inflationChart.destroy();

  const ctx = document.getElementById("chart").getContext("2d");
  const datasets = [
    {
      label: `Inflation @ ${rate1}%`,
      data: data1,
      borderColor: "#0077cc",
      fill: false,
      tension: 0.3
    }
  ];

  if (!isNaN(rate2)) {
    datasets.push({
      label: `Inflation @ ${rate2}%`,
      data: data2,
      borderColor: "#ff6600",
      fill: false,
      tension: 0.3
    });
  }

  resultEl.textContent = 
  mode === "future"
    ? `Future Value (adjusted): ${getCurrencySymbol()}${adjusted.toFixed(2)}`
    : `Past Equivalent Value: ${getCurrencySymbol()}${adjusted.toFixed(2)}`;

  window.inflationChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: {
          callback: function (value) {
            return getCurrencySymbol() + value.toFixed(0);
          }
        }
        }
      }
    }
  });
});

document.getElementById("presetRates").addEventListener("change", function () {
  const selected = this.value;
  if (selected) {
    document.getElementById("rate").value = selected;
  }
});

const body = document.body;
const switchTheme = document.getElementById("theme-switch");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  switchTheme.checked = true;
} else {
  body.classList.add("light");
}

// Toggle theme
switchTheme.addEventListener("change", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

const currencyEl = document.getElementById("currency");

function getCurrencySymbol() {
  return currencyEl.value || "$";
}

