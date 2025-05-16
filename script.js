document.getElementById("inflation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);

  if (isNaN(amount) || isNaN(rate) || isNaN(years)) return;

  const adjusted = amount / Math.pow(1 + rate / 100, years);
  document.getElementById("result").textContent = `Future Value (adjusted for inflation): $${adjusted.toFixed(2)}`;

  // Chart data
  const labels = [];
  const data = [];
  for (let i = 0; i <= years; i++) {
    labels.push(`${i} yr`);
    data.push(amount / Math.pow(1 + rate / 100, i));
  }

  // Destroy previous chart if exists
  if (window.inflationChart) window.inflationChart.destroy();

  // Draw chart
  const ctx = document.getElementById("chart").getContext("2d");
  window.inflationChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Adjusted Value Over Time',
        data: data,
        borderColor: '#0077cc',
        fill: false,
        tension: 0.2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
});
