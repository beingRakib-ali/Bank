
function inputFieldGetElementById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value ;

    const newInputValue = parseFloat(inputFieldString);
    if (typeof newInputValue == 'number' && 0<newInputValue) {
        
    inputField.value = '';
    return newInputValue;
    }

    else
    {
        alert('Please input valid Amount');
        inputField.value = '';
        return 0;
    }
    
}


function textGetElementById(elementId) {
    
    const textElement = document.getElementById(elementId);
    const textElementStringString = textElement.innerText;
    const newTextValue = parseFloat(textElementStringString);
    return newTextValue;
}

function setValueByElementById(elementId,newValue) {
   const setValue = document.getElementById(elementId);
   return setValue.innerText = newValue;
}