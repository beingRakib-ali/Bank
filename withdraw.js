// console.log('withdraw is connected');
const data = JSON.parse(localStorage.getItem('bank')) || {}
updateDisplay(data)

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // const widthdrawField = document.getElementById('withdraw-field');
    // const widthdrawAmountString = widthdrawField.value;
    // if (!widthdrawAmountString) return alert('Please input valid amount');
    // const newWithdrawAmount = parseFloat(widthdrawAmountString);
    // widthdrawField.value = '';

    // // withdraw total amount
    // const withdrawTotalAmountElement = document.getElementById('withdraw-amount');
    // const withdrawTotalAmountString = withdrawTotalAmountElement.innerText;
    // const prevWithdrawAmount = parseFloat(withdrawTotalAmountString);

    // //Total Balance
    // const amountTotalElement = document.getElementById('amount-total');
    // const amountTotalString = amountTotalElement.innerText;
    // const prevAmountTotal = parseFloat(amountTotalString);


    //update withdraw
    const newWithdrawAmount = inputFieldGetElementById('withdraw-field')
    // if (!newWithdrawAmount) {
    //     return;
    //   }
    const prevWithdrawAmount = textGetElementById('withdraw-amount')
    const currentWithdrawAmount = newWithdrawAmount + prevWithdrawAmount;

    //update balance
    const prevAmountTotal = textGetElementById('amount-total');
    const updateBalance = prevAmountTotal - newWithdrawAmount;
    if (newWithdrawAmount > prevAmountTotal) {
        return alert('Insufficient Balance!');
    }




    


    //set withdraw amount
    setValueByElementById('withdraw-amount', currentWithdrawAmount);

    // set update balance
    setValueByElementById('amount-total',updateBalance)

    let data = JSON.parse(localStorage.getItem('bank')) || {}
    data.withdraw = currentWithdrawAmount;
    data.balance = updateBalance;


    localStorage.setItem('bank', JSON.stringify(data))

    updateDisplay(data)
})