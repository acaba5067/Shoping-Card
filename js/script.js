let allProducts=document.querySelector(".products.row")
let products=[
    { 
        id:1,
        title:"shoes",
        color:"black",
        imageUrl:"images/product1.jpg",
        price:100,
        qty:1

    },
    {
        id:2,
        title:"bags",
        color:"brown",
        imageUrl:"images/product2.jpg",
        price:200,
        qty:1 

    },
    {
        id:3,
        title:"addiadas",
        color:"black",
        imageUrl:"images/product3.jpg",
        price:300,
        qty:1
    },
    {
        id:4,
        title:"glasses",
        color:"black",
        imageUrl:"images/product4.jpg",
        price:400,
        qty:1
        

    },

    {
        id:5,
        title:"playstattin hands",
        color:"white",
        imageUrl:"images/product5.jpg",
        price:340,
        qty:1

    },
    
    {
        id:6,
        title:"graps",
        color:"black",
        imageUrl:"images/product6.jpg",
        price:100,
        qty:1

    },
    {
        id:7,
        title:"camera",
        color:"black",
        imageUrl:"images/product7.jpg", 
        price:200,
        qty:1
    },
    {
        id:8,
        title:"smart watch",
        color:"black",
        imageUrl:"images/product8.jpg",
        price:200 ,
        qty:1
    },
    {
        id:9,
        title:"T-shirt",
        color:"black",
        imageUrl:"images/product6.jpg",
        price:300,
        qty:1
    }
]
localStorage.setItem("products",JSON.stringify(products))


drawItems=function (products){
 y=products.map((item)=>{

    return `<div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-3  mx-auto">
           <div class="card" style="width:300px">
            <img class="card-img-top" src="${item.imageUrl}" alt="Card image" style="width:100%">
            <div class="card-body">
           <a class="" onClick="saveItemData(${item.id})" style="display:block; text-decoration:none; cursor: pointer;"><h3>${item.title}</h3></a>
            <p class="card-text">${item.color} </p>
          <button class="btn btn-primary" onClick="addToCart(${item.id})">Add To Cart</button>
            <i class="far fa-heart fav" style="margin-left:100px;cursor:pointer"onClick="addToFavourite(${item.id})"></i>
            </div>
    </div>
    </div>`
})
  allProducts.innerHTML=y
}
drawItems(products.join(""))


let badge=document.querySelector(".badge")
let cartProductsDiv=document.querySelector(".carts_products div")
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
 //let addedItem=[]
 badge.innerHTML=0
if(addedItem){
    addedItem.map((item)=>{
        cartProductsDiv.innerHTML+=`<p>${item.title}</p>`
    })
    badge.style.display="block"
    badge.innerHTML=addedItem.length
}

let allItems=[]
if(localStorage.getItem("username"))
{
    function addToCart(id)
    {
        let choosenItem=products.find((item)=>item.id===id);
        let item=allItems.find(i =>i.id===choosenItem.id)
        if(item){
            choosenItem.qty+=1
           choosenItem.price*=choosenItem.qty

        }else{
             allItems.push(choosenItem)
        }
          cartProductsDiv.innerHTML=""
          allItems.forEach((item)=>{
             cartProductsDiv.innerHTML+=`<p>${item.title} ${item.qty} ${item.price}</p>`
          })
        
        
       
       addedItem=[...addedItem,choosenItem]
       let unique= getUnique(addedItem,"id")
       localStorage.setItem("productsInCart",JSON.stringify(unique)) 
        let cartProductsLength=document.querySelectorAll(".carts_products div p")
         badge.style.display="block"
         badge.innerHTML=cartProductsLength.length
        
    }
     
}
else{
    window.location="login.html"
}  
function getUnique(arr,filterType){
    let unique=arr.map( (item) => item[filterType]).map((item,i,final)=>final.indexOf(item)===i &&i).filter(item=>arr[item]).map((item)=>arr[item])
   return unique
}
// ///////////////////////////////////////////////////////////////////

let shoppingCartIcons=document.querySelector(".shopping_cart")
let cartsProducts=document.querySelector(".carts_products")
shoppingCartIcons.addEventListener("click",opencart)
function opencart(){
    if(cartProductsDiv.innerHTML !=='')
    {
        if(cartsProducts.style.display=="block")
        {
            cartsProducts.style.display="none"

        }else{
            cartsProducts.style.display="block"
        }
    }
}

/////////////////////////////////////////////////////////////////////
//page details
function saveItemData(id){
    localStorage.setItem("productId",id)
    window.location="cartdetails.html"
}
// search function
let input=document.getElementById("search")
input.addEventListener("keyup",function (e){
      search(e.target.value,e.target.value,products)
    if(e.target.value.trim()===" "){
        drawItems(products)
    }
})
function search(title,color,myArray){
    let arr=myArray.filter((item) =>item.title.indexOf(title) !==-1||item.color.indexOf(color)!==-1)
    drawItems(arr)
}




///////////////////////////////////////////////////
//add to favorits
let favouritesItem = localStorage.getItem("productsFavourite") ? JSON.parse(localStorage.getItem("productsFavourite")) : [];
if(favouritesItem){
    favouritesItem.map((item)=>{
        cartProductsDiv.innerHTML+=`<p>${item.title}</p>`
    })
    badge.style.display="block"
   // badge.innerHTML= favouritesItem.length
}

if(localStorage.getItem("username"))
    {
        function addToFavourite(id)
        {
            let choosenItem=products.find((item)=>item.id===id);
           
             let item=allItems.find(i =>i.id===choosenItem.id)
             
             if(item){
                 choosenItem.qty+=1
                choosenItem.price*=choosenItem.qty
     
             }else
             {
                 allItems.push(choosenItem)
             }   
             cartProductsDiv.innerHTML=""
             allItems.forEach((item)=>{
             cartProductsDiv.innerHTML+=`<p>${item.title} ${item.qty} ${item.price}</p>`
          })
        
        
       
          favouritesItem=[...favouritesItem,choosenItem]
       let unique= getUnique(favouritesItem,"id")
       localStorage.setItem("productsFavourite",JSON.stringify(unique)) 
       // let cartProductsLength=document.querySelectorAll(".carts_products div p")
         badge.style.display="block"
        // badge.innerHTML=cartProductsLength.length
         }
         
    }
    else{
        window.location="login.html"
    }  
   