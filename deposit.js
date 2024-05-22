

document.getElementById('btn-deposit').addEventListener('click', function () {

    // const depositAmountElement = document.getElementById('deposit-amount');
    // const depositAmountString = depositAmountElement.value;
    // if (!depositAmountString) return alert('Please input valid Amount');
    // const newDepositAmount = parseFloat(depositAmountString);

    // depositAmountElement.value = '';

    // const depositTotalAmountElement = document.getElementById('deposit-total');
    // const depositTotalAmountString = depositTotalAmountElement.innerText;
    // const prevDepositTotalAmount = parseFloat(depositTotalAmountString);

    // const amountTotalElement = document.getElementById('amount-total');
    // const amountTotalString = amountTotalElement.innerText;
    // const prevAmountTotal = parseFloat(amountTotalString);



    //update deposit total Amount
   
    const newDepositAmount = inputFieldGetElementById('deposit-amount');
    // if (!newDepositAmount) {
    //   return; 
    // }
    const prevDepositTotalAmount = textGetElementById('deposit-total');
    const currentDipositAmount = prevDepositTotalAmount + newDepositAmount;
    setValueByElementById('deposit-total', currentDipositAmount);


    // update total amount
    const prevAmountTotal = textGetElementById('amount-total');

    const newAmountTotal = prevAmountTotal + newDepositAmount;
    setValueByElementById('amount-total', newAmountTotal);


    //depositTotalAmountElement.innerText = currentDipositAmount
    //amountTotalElement.innerText = newAmountTotal;

    //store Database

    let data = JSON.parse(localStorage.getItem('bank')) || {}
    data.deposit = currentDipositAmount;
    data.balance = newAmountTotal;


    localStorage.setItem('bank', JSON.stringify(data))

    updateDisplay(data)

})