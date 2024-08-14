let email=document.querySelector("#email")
let pasword=document.querySelector("#password")
let btnlogin=document.querySelector("#sign_in")

let getemail=localStorage.getItem("email")
let getpassword=localStorage.getItem("password")
btnlogin.addEventListener("click",function(e){
    e.preventDefault()
    if(email.value===" "||pasword.value===" "){
        alert("please,fill the data")
    }
    else{
        if(getemail&&getemail.trim()===email.value.trim()&&getpassword&&getpassword.trim()===pasword.value.trim())
        {
            setTimeout(()=>{
                window.location="index.html"
            },1500);
        }
        else{
            alert("enter user name or password correctly")
        }
    }
},1000)