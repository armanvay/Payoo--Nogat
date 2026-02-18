document.getElementById("add-money-btn").addEventListener("click",
    function(){
        // 1 Bank Acconunt get
      
        const bankAcconunt = getValueFromInput("add-mony-bank"); 
        if(bankAcconunt === "Select A Bank"){
            alert("Please Select A Bank");
            
            return
        }
        
       //2 Bank account number
      
       const accno = getValueFromInput("add-money-number");
       if(accno.length != 11){
         alert("Invalid account number");
         return;
         

       }
       // 3 get the ammount
       const amount = getValueFromInput("add-money-amount");
       const newBalaance =getBalance() + Number(amount);
       
       const pin = getValueFromInput("add-money-pin");
       if(pin == "1234"){
         alert(`Add money SuccessFull From ${bankAcconunt} at ${new Date()}`);
         setBalance(newBalaance);
         // 1 history-conteiner dora niya asbo 

         const history = document.getElementById("history-conteiner");
         //  2 new div create korbo 
         const newhistory =document.createElement("div")
         //  2 new div inerhtml add korbo
         newhistory.innerHTML = `
         <div class="Transaction-card p-5 bg-base-200"></div>
         <p>Add money SuccessFull From ${bankAcconunt} accno no ${accno} at ${new Date()} </p>
         
         
         `;

        //  4 history taky append korbo new div ta ky 
        history.append(newhistory)
       }
       else{
        alert("Invalid Pin");
        return
       }



      
    })