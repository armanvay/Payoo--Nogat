// Login 

document.getElementById("login-btn").addEventListener('click',
    function(){
        // 1 get the mobile number 
        const numberInput = document.getElementById("input-number");
        const contactNumber=numberInput.value;
        console.log(contactNumber)

        // 2 grt the pin 

        const inputPin = document.getElementById("input-pin")
        const pin=inputPin.value;
        console.log(pin)

        // 3 match mobile number && Pin number 
        if(contactNumber =="01845795963" &&pin=="1234"){
            // 3-&&-1 ===true ? go to home page 
            alert("Login successFull")
            // window.location.replace("/home.html")
            window.location.assign("/home.html")
            
        }
        else{
            // 3-&&-1 ===false ? return
            alert("Login Failed")
            return

        }


        
    })