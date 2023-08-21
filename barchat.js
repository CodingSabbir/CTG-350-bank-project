const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue','Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3],
      borderWidth: 1
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