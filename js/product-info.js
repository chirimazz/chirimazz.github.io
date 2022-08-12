const URL="https://japceibal.github.io/emercado-api/cats_products/101.json"
let categoriesArray = [];
fetch(URL)
    .then(respuesta=>respuesta.json())
    .then(data=>{
      
        const nombre=document.getElementById('name');
        const moneda=document.getElementById('currency');
        const costo=document.getElementById('cost');
        const descr=document.getElementById('description');
        const saldo=document.getElementById('sold-count');
 
        nombre.innerHTML= data[0].name;
        moneda.innerHTML= data[0].currency;
        costo.innerHTML= data[0].cost;
        descr.innerHTML= data[0].description;
        saldo.innerHTML= data[0].soldCount;

    })

