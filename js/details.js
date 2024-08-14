let products=JSON.parse(localStorage.getItem("products"))
console.log(products)
let productId=JSON.parse(localStorage.getItem("productId"))
let itemDom=document.querySelector(".item_details")

let productDetails=products.find((item)=>item.id===productId)
let sum=0
console.log(productDetails.id)
{itemDom.innerHTML+=`<img " src="${productDetails.imageUrl}" alt="Card image" style="width:50%;margin-left:300px">
                      <h2 style="text-align:center">${productDetails.title}</h2>
                      <h3 style="text-align:center">${sum+=productDetails.price}</h3>
                      <h3 style="text-align:center">Quantity:${productDetails.qty}</h3>`}
