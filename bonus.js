document.getElementById("bonus-btn").addEventListener("click",
    function(){
        const inputChak = getValueFromInput("bonus-amount");
        let bonus =1000;
        if(inputChak == "093845903"){

       const numberbalance =  document.getElementById("balance")
       console.log(numberbalance.innerText)
       numberbalance.innerText=Number(numberbalance.innerText) +bonus;
       alert(" Yoy hanve Bonus");
       
    //    add 
        const history = document.getElementById("history-conteiner");
        //  2 new div create korbo
        const newhistory = document.createElement("div");
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
        <h3 class="font-medium">${bonus} taka is a Bonus</h3>
        <p class="text-sm text-gray-500">Your mony ${numberbalance.innerText} at ${new Date()}</p>
      </div>
    </div>
         `;

        //  4 history taky append korbo new div ta ky
        history.append(newhistory);


        }
        else{
            alert("Your Coupon Invalid");
        }
    }
)