function updateDisplay({deposit=0,withdraw=0,balance=0}){

    document.getElementById('deposit-total').innerText = deposit;
    document.getElementById('withdraw-amount').innerText = withdraw;
    document.getElementById('amount-total').innerText = balance;

}