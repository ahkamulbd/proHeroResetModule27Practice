//console.log('Deposit exits');

document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('Deposit clicked');

    const depositField = document.getElementById('user-deposit');
    const depositAmount = depositField.value;
    //console.log(depositAmount);

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    //console.log(depositTotal);
    depositTotalElement.innerText = depositAmount;
})