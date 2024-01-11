// Data for the chart
var data = {
    labels: ["20", "", "25", "", "30", "", "35", "", "40", "", "60", "", "65"],
    datasets: [
      {
        label: "Employer:\nK 73500",
        data: [10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        backgroundColor: "#1a66ff",
        barPercentage: 0.5,
      },
      {
        label: "Employee:\nK 52500",
        data: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        backgroundColor: "#3377ff",
        barPercentage: 0.5,
      },
      {
        label: "Total Interest:\nK 244,313",
        data: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
        backgroundColor: "#6699ff",
        barPercentage: 0.5,
      },
    ],
  };
  
  // Chart configuration
  var config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            min: 0,
            max: 100,
      
            // forces step size to be 5 units
            stepSize: 5 // <----- This prop sets the stepSize
          }
  
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      barPercentage: 0.5, // Adjust the value for bar width
    },
  };
  
  // Create the chart
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, config);
  
  function updateChartBars() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 500) {
      // Adjust labels and number of bars for mobile view
      myChart.data.labels = ["20", "35", "40", "45", "50", "55", "60"];
      myChart.data.datasets.forEach((dataset) => {
        dataset.data = dataset.data.slice(0, 7);
        dataset.label = dataset.label.replace(/:/g, ':\n'); // Add line breaks in label
      });
      myChart.options.barPercentage = 0.5; // Adjust the value for bar width
  
      // Set legend item text alignment to left for mobile view
      myChart.legend.options.labels.align = 'left';
    } else {
      // Use original labels and number of bars for desktop view
      myChart.data.labels = ["20", "", "25", "", "30", "", "35", "", "40", "", "60", "", "65"];
      myChart.data.datasets.forEach((dataset) => {
        dataset.data = dataset.data.slice(0, 13);
        dataset.label = dataset.label.replace(/\n/g, ''); // Remove line breaks in label
      });
      myChart.options.barPercentage = 0.5; // Adjust the value for bar width
  
      // Reset legend item text alignment for desktop view
      myChart.legend.options.labels.align = 'center';
    }
    myChart.update();
  }
  
  
  // Update the chart when the window is resized
  window.addEventListener("resize", updateChartBars);
  
  // Initial update
  updateChartBars();
  
  

  