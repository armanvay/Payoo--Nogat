document.getElementById("cashout-btn").addEventListener("click",
    function(){
    //    1 get the agent number & validate
    const cashoutNumberInput = document.getElementById("cashout-number");
     const cashoutNumber=cashoutNumberInput.value ;
     console.log(cashoutNumber)
     if (cashoutNumber.length != 11) {
       alert("Invalid Agent Number");
       return;
     }
     
    
    // 2 get the amount , 
    const cashoutAmountInput = document.getElementById("cashout-amount")
    const cashoutAmount=cashoutAmountInput.value ;
    console.log(cashoutAmount)
   
    // 3 get the Balance , 
    const balanceElenent = document.getElementById("balance");
    const balance=balanceElenent.innerText
    console.log(balance)
    // 4 calculate New Balance 
    const newBalance =Number(balance) - Number(cashoutAmount)
    
    if(newBalance <0){
        alert("Invalid Amount")
        return;
    }
    // 5 get the pin and verify
    
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin=cashoutPinInput.value ;
    
    if(pin =="1234"){
      // 5-1 true : show an alert > set balance
      alert("complet cushout");
      console.log("new balance", newBalance);
      balanceElenent.innerText = newBalance;
      // 1 history-conteiner dora niya asbo

      const history = document.getElementById("history-conteiner");
      //  2 new div create korbo
      const newhistory = document.createElement("div");
      //  2 new div inerhtml add korbo
      newhistory.innerHTML = `
         <div class="Transaction-card p-5 bg-base-200"></div>
         <p>cashout ${cashoutAmount} Taka SuccessFull to${cashoutNumber} at ${new Date()} </p>
         
         
         `;

      //  4 history taky append korbo new div ta ky
      history.append(newhistory);
    }
    else{
        // 5-1 falas : show an error alert> return
        alert("Invalid Pin Number")
        return
        
    }
    
  
})