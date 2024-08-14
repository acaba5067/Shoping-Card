let userinfo=document.querySelector("#user_info")
let userDate=document.querySelector("#user")
let links=document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
    userinfo.style.display="flex"
    userDate.innerHTML=localStorage.getItem("username")
}
let logOutBtn=document.querySelector("#logout")
logOutBtn.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(() => {
        window.location="login.html"
        
    }, 1500);
})