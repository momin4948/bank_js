document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdraw = parseFloat(withdrawField.value);

  withdrawField.value = "";

  if (isNaN(newWithdraw)) {
    alert("Please provide your amount");
    return;
  }

  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdraw = parseFloat(withdrawTotal.innerText);

  const balanceTotal = document.getElementById("balance-total");
  const previousBalance = parseFloat(balanceTotal.innerText);

  if (newWithdraw > previousBalance) {
    alert("Balance is Low");
    return;
  }

  const currentWithdraw = newWithdraw + previousWithdraw;
  withdrawTotal.innerText = currentWithdraw;

  const newBalance = previousBalance - newWithdraw;
  balanceTotal.innerText = newBalance;
});
