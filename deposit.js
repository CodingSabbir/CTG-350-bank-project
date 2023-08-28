const depositBtn = document.getElementById('Deposit-Btn');
depositBtn.addEventListener('click', () => {
    const depositAmount = document.getElementById('Deposit-Amount').value;
    const newDepositAmount = parseFloat(depositAmount);
    document.getElementById('Deposit-Amount').value = '';
    if (isNaN(newDepositAmount)) {
        swal("Oops...", "Something went wrong!", "error");
    } else {
        const cardDeposit = parseFloat(document.getElementById('Card-Deposit').innerHTML);
        const newCardDeposit = cardDeposit + newDepositAmount;
        document.getElementById('Card-Deposit').innerHTML = newCardDeposit.toFixed(2);

        const cardBalance = parseFloat(document.getElementById('card-blance').innerHTML);
        const newCardBalance = cardBalance + newDepositAmount;
        document.getElementById('card-blance').innerHTML = newCardBalance.toFixed(2);

        swal("Deposit!", "The task has been successfully completed.", "success");
    }
});



