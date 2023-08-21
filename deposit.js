const DepositBtn=document.getElementById('Deposit-Btn');
DepositBtn.addEventListener('click',()=>{
const DepositAmount=document.getElementById('Deposit-Amount').value;
const newDepositAmount=parseFloat(DepositAmount);
document.getElementById('Deposit-Amount').value=''

const CardDeposit=document.getElementById('Card-Deposit').innerHTML;
const newCardDeposit=parseFloat(CardDeposit);
document.getElementById('Card-Deposit').innerHTML=newDepositAmount.toFixed(2)

});