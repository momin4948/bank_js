// document.getElementById('btn-deposit').addEventListener('click', function(){
//     const depositFeild = document.getElementById('deposit-field');
//     const newDeposit = parseFloat(depositFeild.value);

//     const depositTotal = document.getElementById('deposit-total');
//     const previousDeposit = parseFloat(depositTotal.innerText);

//     const currentDeposit = newDeposit+previousDeposit;
//     depositTotal.innerText = currentDeposit;
//     depositFeild.value = '';

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalance = parseFloat(balanceTotal.innerText);

//     const newBalance = previousBalance+newDeposit;
//     balanceTotal.innerText = newBalance;
// })

document.getElementById("btn-deposit").addEventListener("click", function () {
  // changing the deposit-part
  const newDepositValue = getInputFieldId("deposit-field");
  const prevDepositValue = getTotalInnerId("deposit-total");
  const currentDepositValue = newDepositValue + prevDepositValue;
  setNewTotal("deposit-total", currentDepositValue);

  // changing the balance-part
  const prevBalanceTotal = getTotalInnerId("balance-total");
  const newBalanceTotal = prevBalanceTotal + newDepositValue;
  setNewTotal("balance-total", newBalanceTotal);
});
