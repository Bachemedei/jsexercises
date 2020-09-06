window.onload = () => {
    var buttons = document.getElementById("available-items").querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener('click', selectItem)
    })
};

function addToCart(item){
    var element = document.createElement("LI")
    var text = document.createTextNode(item)
    element.appendChild(text)
    document.getElementById("cart").appendChild(element)
}

function selectItem(e){
    var button = e.currentTarget
    var paragraph = button.parentElement.children[0]
    var item = paragraph.innerText
    addToCart(item)
}

