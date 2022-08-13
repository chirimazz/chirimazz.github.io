const dl = document.getElementById('productos');
const URL= 'https://japceibal.github.io/emercado-api/cats_products/101.json';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}
  fetch(URL)
.then((resp) => resp.json())
.then(function(data) {
    let productos = data.results;
    return productos.map(function(producto) {
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');

        img.src = producto.picture.medium;
        span.innerHTML = `${productos.products.name} ${productos.products.description}`;
        append(li, img);
        append(li, span);
        append(dl, li);
    })
})

