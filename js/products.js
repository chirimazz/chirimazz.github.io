
let URL= 'https://japceibal.github.io/emercado-api/cats_products/'+localStorage.getItem('catID')+EXT_TYPE;/*con el catID correspondiente*/


let productsArray = [];
function showProductList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let product = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ product.name +" "+"-"+ product.currency +" "+ product.cost +`</h4> 
                        <p> `+ product.description +`</p> 
                        </div>
                        <small class="text-muted">` + product.soldCount + ` artículos</small> 
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
        productsArray = data.products;
        showProductList(productsArray);
    })
        }
    )
