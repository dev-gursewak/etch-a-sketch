const container = document.getElementById('container');

function requiredSquare() {
    const girdSize = prompt("required Gird Size: ");
    if (girdSize > 100) {
        alert("Please enter smaller number. It should be less than 100.");
        container.innerHTML = ""
    } else {
        gridGenerator(girdSize)
    }
}
function gridGenerator(e) {
    container.innerHTML = "";
    for (let i = 0; i < e * e; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.margin = ".01px";
        div.style.padding = "56px";
        div.style.flexGrow = "1";
        div.classList.toggle('child')
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);

    }
}

function clearCell(){
    const child = document.querySelectorAll('.child');
    child.forEach(child => {
        child.style.backgroundColor = "white";
    })
}