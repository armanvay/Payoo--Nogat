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
        
         
      <div class="flex items-center gap-4 w-11/12 mx-auto py-5 bg-white border shadow-2xl">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center"
      >
        <img
          src="/payoo-resources/assets/opt-1.png"
          alt="icon"
          class="w-6 h-6"
        />
      </div>

      <div>
        <h3 class="font-medium">${bankAcconunt}</h3>
        <p class="text-sm text-gray-500">${accno} at ${new Date()}</p>
      </div>
    </div>
         `;

        //  4 history taky append korbo new div ta ky 
        history.append(newhistory)
       }
       else{
        alert("Invalid Pin");
        return
       }



      
    })