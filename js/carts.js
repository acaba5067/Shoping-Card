let productsInCart=localStorage.getItem("productsInCart")
let allProducts=document.querySelector(".products.row")
// if(productsInCart){
//     let item=JSON.parse(productsInCart)
//     drawCardProducts(item)
// }



 drawCardProducts=function( allProduct=[]){
 let products=  JSON.parse(localStorage.getItem("productsInCart")) ||allProduct;
    let y=products.map((item)=>{
    
        return `
        <div class=" col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mt-3 mx-auto">
      <div class="card" style="width:300px">
          <img class="card-img-top" src="${item.imageUrl}" alt="Card image" style="width:100%">
          <div class="card-body">
            <h2 class="card-title">${item.title}</h2> 
             <h3 class="card-title"> quantity:${item.qty}</h3>
            <p class="card-text">${item.color} </p>
            <button class="btn btn-primary" onClick="removefromCart(${item.id})">Remove from cart</button>
            <i class="far fa-heart fav" style="margin-left:200px;cursor:pointer"></i>
            <span  class="sum"style"margin-left:100px>${item.price} $</span>
        </div>
        </div>
        </div>`
    })
      allProducts.innerHTML=y
    }
    drawCardProducts(productsInCart)

function removefromCart(id){
  let products=localStorage.getItem("productsInCart")
  if( products)
  {
    let items=JSON.parse(productsInCart)
    let filterdItems=items.filter((item)=>item.id !==id)
    localStorage.setItem("productsInCart",JSON.stringify(filterdItems))
    drawCardProducts(filterdItems)

  }
}