let cartElement={};

document.addEventListener("DOMContentLoaded", async function(e){
    try{
const response = await fetch(CART_INFO_URL+25801+EXT_TYPE);
const data= await response.json();
cartElement = data
console.log(cartElement)
showcartElement();
   

}catch(error){
        console.log(error)
    }
});   
    
    

  

    function showcartElement(){
        let precioPorUni = cartElement.articles[0].unitCost;

        listaCart=`
        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">Costo</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="${cartElement.articles[0].image}" alt="product image class="min-vw 10:10vw " width="50"></th>
      <td>${cartElement.articles[0].name}</td>
      <td>${precioPorUni}</td>
      <td><input type="number" value-1 id="cantArticulo" onchange="subtotal()"></td>
      <td id="subtotal"><span>USD</span> ${precioPorUni}</td>
    </tr>
   
  </tbody>
</table>

`
document.getElementById('compra').innerHTML=listaCart;
    }



function subtotal(){
    let precioPorUni = cartElement.articles[0].unitCost;
    document.getElementById("subtotal").innerHTML = cartElement.articles[0].currency +" "+ precioPorUni * document.getElementById("cantArticulo").value;
}
    