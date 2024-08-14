let productsFavourite=localStorage.getItem("productsFavourite")
let allProducts=document.querySelector(".products.row")
drawCardfavouritesProducts=function( allProduct=[]){
    let products=  JSON.parse(localStorage.getItem("productsFavourite")) ||allProduct;
       let y=products.map((item)=>
        {
           return `
           <div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-3 mx-auto">
         <div class="card" style="width:300px">
             <img class="card-img-top" src="${item.imageUrl}" alt="Card image" style="width:100%">
             <div class="card-body">
               <h2 class="card-title">${item.title}</h2> 
                <h3 class="card-title quantity"> quantity:${item.qty}</h3>
               <p class="card-text">${item.color} </p>
               <button class="btn btn-primary"onClick="removefromfavourite(${item.id})">Remove from favourite</button>
               <i class="far fa-heart fav" style="color:red;margin-left:200px;margin-bottom:70px;cursor:pointer"></i>  
               <span  class="sum">${item.price}</span>
               <br>
               <button style="color:green ;font-size:40px;cursor:pointer"onClick="add(${item.id})" id="add">+</button>
               <span style="color:red;font-size:40px;margin-auto;cursor:pointer"onClick="decrease(${item.id})">-</span>
           </div>
           </div>
           </div>
           `
       })
         allProducts.innerHTML=y
       }
drawCardfavouritesProducts(productsFavourite)

function removefromfavourite(id){
let productsFavourite=localStorage.getItem("productsFavourite")
        if(productsFavourite)
        {
          let items=JSON.parse(productsFavourite)
          let filterdItems=items.filter((item)=>item.id !==id)
          localStorage.setItem("productsFavourite",JSON.stringify(filterdItems))
          drawCardfavouritesProducts(filterdItems)
      
        }
      }
  function add(id){
  let products=  JSON.parse(localStorage.getItem("productsFavourite"))
  let choosenItem= products.find((item)=>item.id===id);
          choosenItem.qty+=1
           choosenItem.price*=choosenItem.qty
           
           let sum=document.querySelector(".sum")
           let quanity=document.querySelector(".quantity")
          
             quanity.innerHTML=`<p>quantity</p>${choosenItem.qty}`
              sum.innerHTML=`${choosenItem.price}<span>$</span>`
            
           
          
}

function decrease(id){
  let products=  JSON.parse(localStorage.getItem("productsFavourite"))
  let choosenItem= products.find((item)=>item.id===id);
         choosenItem.qty
        choosenItem.price*=choosenItem.qty
        
        let sum=document.querySelector(".sum")
        let quanity=document.querySelector(".quantity")
          quanity.innerHTML=choosenItem.qty
           sum.innerHTML=choosenItem.price
          
}