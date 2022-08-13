const ul = document.getElementById('productos');
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
    let autos = data.products;
    return autos.map(function(auto) {
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');

        img.src = auto.image;
        span.innerHTML = `${auto.name} ${auto.description}`;
        append(li, img);
        append(li, span);
        append(ul, li);
    })
})

