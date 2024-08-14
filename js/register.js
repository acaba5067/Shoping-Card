let username=document.querySelector("#name")
let pasword=document.querySelector("#password")
let email=document.querySelector("#email")
let registerBtn=document.querySelector("#sign_up")


registerBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value===''||email.value===''||pasword.value==='')
    {
        alert("please fill data")
    }
    else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",pasword.value)
        setTimeout(() => {
            window.location="login.html"
        }, 1500);
    }

})