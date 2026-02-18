// masin amont 
function getValueFromInput(id){
    const input =document.getElementById(id)
    const valo =input.value;
    console.log(id , valo)
    return valo
}
// masin balance 
function getBalance(){
    const balanceEliment =document.getElementById("balance")
    const balance=balanceEliment.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);

}


//masin value --> Set Balance 


function setBalance (value){
      const balanceEliment = document.getElementById("balance");
      balanceEliment.innerText=value;

}