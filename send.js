document.getElementById("send-btn").addEventListener("click", function () {
  const sendNumber = getValueFromInput("send-number");

  if (sendNumber.length != 11) {
    alert("Yor Number invalid");
    return;
  }

  const sendAmount = getValueFromInput("send-amount");
  const newAmount = getBalance() - Number(sendAmount);

  const sendpin = getValueFromInput("send-pin");
  if (sendpin == "1234") {
    alert("Send money Succsucefully");
    setBalance(newAmount);

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
        <h3 class="font-medium">${sendAmount} Taka Send</h3>
        <p class="text-sm text-gray-500"> Your balance ${newAmount} at ${new Date()}</p>
      </div>
    </div>
         `;

    //  4 history taky append korbo new div ta ky
    history.append(newhistory);
  } else {
    alert("Your Pin is a invalid");
  }
});
