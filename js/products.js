let URL= PRODUCTS_URL+localStorage.getItem('catID')+EXT_TYPE;
const ORDER_ASC_BY_COST = "$--$$";
const ORDER_DESC_BY_COST = "$$--$";
const ORDER_BY_PROD_COUNT = "Cant.";

let actualesProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;


function setProdID(id) {
    localStorage.setItem("prodID",id);
    window.location = "product-info.html"
}
function showProductList(){
    let htmlContentToAppend = "";

    for(let i = 0; i < actualesProductsArray.length; i++){ 
        let product= actualesProductsArray[i];
            // if para establecer la condicion de filtrado segun el costo
        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
             ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){
        
        htmlContentToAppend += `
        <div onclick="setProdID(${product.id})"class="list-group-item list-group-item-action">
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
             }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        actualesProductsArray = productsArray;
    }

    actualesProductsArray = sortProducts(currentSortCriteria, actualesProductsArray);

    
    //funcion para aplicar un sort al los elementos del array
    //Muestro los productos ordenados
    
    showProductList();
}
//funcion para el criterio de orden asc, desc, y por cantidad vendida
function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){
        result = array.sort(function(a, b) {
            if (a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    }

    return result;
}



document.addEventListener("DOMContentLoaded", function(e){
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
        actualesProductsArray = data.products;
        document.getElementById('nombreproducto').innerHTML=data.catName;
        showProductList(actualesProductsArray);
        
    })
    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT);
    });
    //Limpio los filtros aplicados en min y max
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por costo
        
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductList();
    });
});   

 
