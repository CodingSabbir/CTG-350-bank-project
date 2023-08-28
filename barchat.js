document.addEventListener('DOMContentLoaded',()=>{
  const ctx = document.getElementById('myChart');
  const dataChart=new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Deposit', 'Withdraw','Total Amount'],
      datasets: [{
        label: '# of Votes',
        data: [0, 0, 0],
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
  // Deposit area
  document.getElementById('Deposit-Btn').addEventListener('click',()=>{
  const cardDeposit=parseFloat(document.getElementById('Card-Deposit').innerHTML);
  dataChart.data.datasets[0].data[0]=cardDeposit
  dataChart.update();
  });

// Withdraw area
  document.getElementById('withdraw-Btn').addEventListener('click',()=>{
    const cardWithdraw=parseFloat(document.getElementById('card-withdraw').innerHTML);
    const cardBlance=parseFloat(document.getElementById('card-blance').innerHTML);
    dataChart.data.datasets[0].data[1]=cardWithdraw
    dataChart.data.datasets[0].data[2]=cardBlance
    dataChart.update();
  })
});


  



