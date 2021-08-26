function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();// arekta function theke pelam jekhan theke pin set kore ashchi
    document.getElementById('display-pin').value = pin;
}

//event bubble /delicate
document.getElementById('key-pad').addEventListener('click', function (event) {
    const pin = event.target.innerText;//mistake hoisilo ekhane 
    const inputValue = document.getElementById('typed-numbers');
    if (isNaN(pin)) {
        if (pin == 'C') {
            inputValue.value = '';
        }
    }
    else {
        const previousValue = inputValue.value;
        const newValue = previousValue + pin;
        inputValue.value = newValue;
    }
});

// //a way for matching submit and generate button 
// document.getElementById('submit-btn').addEventListener('click', function () {
//     const pinInput = document.getElementById('typed-numbers');
//     const pinValue = pinInput.value;
//     console.log(pinValue);
//     const generatePin = document.getElementById('display-pin');
//     const generateValue = generatePin.value;
//     console.log(generateValue);
//     if (pinValue == generateValue) {
//         console.log('lets dance');
//     }
//     else {
//         alert('vaag ekhan theke');
//     }
// });

//other way for matching ..
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const generatePin = document.getElementById('typed-numbers').value;
    const successNotify = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    if (pin == generatePin) {
        successNotify.style.display = 'block';
        failNotification.style.display = 'none';
    }
    else {
        failNotification.style.display = 'block';
        successNotify.style.display = 'none';
    }
}
