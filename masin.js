// masin amont
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const valo = input.value;
  console.log(id, valo);
  return valo;
}
// masin balance
function getBalance() {
  const balanceEliment = document.getElementById("balance");
  const balance = balanceEliment.innerText;
  console.log("current balance", Number(balance));
  return Number(balance);
}

//masin value --> Set Balance

function setBalance(value) {
  const balanceEliment = document.getElementById("balance");
  balanceEliment.innerText = value;
}

//masin id > hide all > shwo id
function showOnly(id) {
  const addmoney = document.getElementById("add-mony");
  const cashout = document.getElementById("cushout");

  //sobay ky hide kora dew
  addmoney.classList.add("hidden");

  cashout.classList.add("hidden");

  //id ola ky show koro
  const select = document.getElementById(id);
  select.classList.remove("hidden");
}
