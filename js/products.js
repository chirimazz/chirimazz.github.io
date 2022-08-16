

let URL= 'https://japceibal.github.io/emercado-api/cats_products/101.json';

let autosArray = [];
function showProductList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let auto = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + auto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name + auto.currency + auto.cost +`</h4> 
                        <p> `+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}



document.addEventListener("DOMContentLoaded", function(e){
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        autosArray = data.products;
        showProductList(autosArray);
    })
        }
    )