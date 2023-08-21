
const withdrawBtn=document.getElementById('withdraw-Btn');
withdrawBtn.addEventListener('click',()=>{
    const withdrawAmount=document.getElementById('withdraw-Amount').value;
    const newwithdrawAmount=parseFloat(withdrawAmount);
    document.getElementById('withdraw-Amount').value=''

    const cardwithdraw=document.getElementById('card-withdraw').innerHTML;
    const newcardwithdraw=parseFloat(cardwithdraw);
    document.getElementById('card-withdraw').innerHTML=newwithdrawAmount.toFixed(2);

});