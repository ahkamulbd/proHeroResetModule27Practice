//console.log('Withdraw Initiated');

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //console.log('Withdraw Btn Clicked');

    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //console.log(newWithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //withdrawTotalElement.innerText = newWithdrawAmount;

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceAmount = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = currentBalanceAmount;

    withdrawField.value = '';
})