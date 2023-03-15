//console.log('Deposit exits');

document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('Deposit clicked');

    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    const currentDepositAmount = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositAmount;

    // Balance Total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceAmount = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceAmount;

    depositField.value = '';
})