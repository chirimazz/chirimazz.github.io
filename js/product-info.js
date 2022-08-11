const URL="https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch(URL)
    .then(respuesta=>respuesta.json())
    .then(data=>{
        const listContainer=document.querySelector("prod-list-container")
    })
    document.getElementById("prod-list-container").innerHTML = htmlContentToAppend