const withdrawBtn = document.getElementById('withdraw-Btn');
withdrawBtn.addEventListener('click', () => {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-Amount').value);
    const cardWithdraw = parseFloat(document.getElementById('card-withdraw').innerHTML);
    const cardBalance = parseFloat(document.getElementById('card-blance').innerHTML);

    if (withdrawAmount > cardBalance ) {
        swal("error...", "You don't have sufficient balance.!", "error");
    }else if (isNaN(withdrawAmount)){
        swal("Oops...", "Something went wrong!", "error");
    }else{
        const newCardWithdraw = cardWithdraw + withdrawAmount;
        const newCardBalance = cardBalance - withdrawAmount;
    
        document.getElementById('withdraw-Amount').value = '';
        document.getElementById('card-withdraw').innerHTML = newCardWithdraw.toFixed(2);
        document.getElementById('card-blance').innerHTML = newCardBalance.toFixed(2);    
    }
});
