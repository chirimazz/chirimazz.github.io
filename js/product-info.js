const URL="https://japceibal.github.io/emercado-api/cats_products/101.json"
let categoriesArray = [];
fetch(URL)
    .then(respuesta=>respuesta.json())
    .then(data=>{
        const img=document.querySelector('img');
        const name=document.getElementById('name');
        const currency=document.getElementById('currency');
        const cost=document.getElementById('cost');
        const description=document.getElementById('description');
        const sold=document.getElementById('sold-count');
        img.innerHTML=data[0].imgScr;
        name.innerHTML=data[0].name;
        currency.innerHTML=data[0].currency;
        cost.innerHTML=data[0].cost;
        description.innerHTML=data[0].description;
        sold.innerHTML=data[0].soldCount;

    })

