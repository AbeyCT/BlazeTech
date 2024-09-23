const body = document.querySelector("body"), 
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
});

sidebarToggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
})



// WALLET JS


// Set up initial balance and chart
let balance = 300000;

// Create the chart
const ctx = document.getElementById('balanceChart').getContext('2d');
const balanceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Balance',
      data: [100000, 150000, 120000, 250000, 300000, 250000, 300000], // Initial balance data
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Function to update balance
function updateBalance(amount) {
  balance += amount;
  document.getElementById('balance').textContent = `#${balance.toLocaleString()}.00`;

  // Update the chart data
  balanceChart.data.datasets[0].data.push(balance);
  balanceChart.data.labels.push(new Date().toLocaleTimeString()); // Add time label
  balanceChart.update();
}

// Simulate real-time balance change
function simulateBalanceChange() {
  setInterval(() => {
    // Randomly increase or decrease the balance by a value between -50000 and 50000
    const randomChange = Math.floor(Math.random() * 100000) - 50000;
    updateBalance(randomChange);
  }, 5000); // Update every 5 seconds (you can adjust this interval)
}

// Initial function to start the balance update simulation
simulateBalanceChange();

// Event listeners for manual balance updates via buttons
document.getElementById('withdraw').addEventListener('click', function() {
  updateBalance(-50000); // Simulate a withdrawal of #50,000
});

document.getElementById('add-money').addEventListener('click', function() {
  updateBalance(50000); // Simulate adding #50,000
});
























// Dummy sales data from the sales report
const salesReport = {
    overallSales: 20000,
    productsSold: 250,
    weeklySales: [30, 20, 40, 15, 25, 10], // Monday to Saturday sales
    salesCategories: {
        high: 50,  // 50% of sales
        low: 20,   // 20% of sales
        average: 30 // 30% of sales
    }
};

// Bar chart setup (Weekly Sales)
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'Th', 'F', 'S'],
        datasets: [{
            label: 'Weekly Sales',
            data: salesReport.weeklySales,
            backgroundColor: '#3498db',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie chart setup (Sales Categories)
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['High percentage', 'Low Percentage', 'Average'],
        datasets: [{
            label: 'Overview',
            data: [salesReport.salesCategories.high, salesReport.salesCategories.low, salesReport.salesCategories.average],
            backgroundColor: ['#3498db', '#e74c3c', '#f1c40f'],
        }]
    }
});

// Function to update charts based on new sales report
function updateCharts(newSalesReport) {
    // Update overall sales and products sold
    document.getElementById('overall-sales').textContent = `#${newSalesReport.overallSales}`;
    document.getElementById('product-sold').textContent = newSalesReport.productsSold;

    // Update bar chart data
    barChart.data.datasets[0].data = newSalesReport.weeklySales;
    barChart.update();

    // Update pie chart data
    pieChart.data.datasets[0].data = [
        newSalesReport.salesCategories.high,
        newSalesReport.salesCategories.low,
        newSalesReport.salesCategories.average
    ];
    pieChart.update();
}

// Simulate sales report changes over time (for demo purposes)
setInterval(() => {
    // Example of dynamic change in sales data over time
    const updatedSalesReport = {
        overallSales: Math.floor(Math.random() * 50000), // Simulate overall sales change
        productsSold: Math.floor(Math.random() * 1000),  // Simulate products sold change
        weeklySales: Array.from({ length: 6 }, () => Math.floor(Math.random() * 50)),  // Simulate weekly sales
        salesCategories: {
            high: Math.floor(Math.random() * 100),
            low: Math.floor(Math.random() * 100),
            average: Math.floor(Math.random() * 100)
        }
    };

    // Update charts and UI with the new sales data
    updateCharts(updatedSalesReport);
}, 5000); // Update every 5 seconds
