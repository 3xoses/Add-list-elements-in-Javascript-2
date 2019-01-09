let size = 10;
let orderElement = 1;

const init = function () {
    const btn = document.createElement("button");
    btn.textContent = "Dodaj elementy listy";
    document.body.appendChild(btn);
    const btnReset = document.createElement("button");
    btnReset.textContent = "Usuń elementy listy";
    document.body.appendChild(btnReset);
    btn.style.fontSize = "20px";
    btnReset.style.fontSize = "20px";
    const createUl = document.createElement('ul');
    createUl.style.listStyle = "none";
    document.body.appendChild(createUl);
    btn.addEventListener('click', createElement);
    btnReset.addEventListener('click', removeList);
    
}

const createElement = function () {
    for(let i=0; i<10; i++){
        const liElements = document.createElement('li');
        liElements.textContent = `element ${orderElement}`;
        document.querySelector('ul').appendChild(liElements);
        liElements.style.fontSize = size + "px";
        orderElement++
        size ++

    }
    
}

const removeList = function() {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}


init();