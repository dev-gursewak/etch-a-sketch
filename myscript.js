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
    let parentDiv = document.createElement("div");
    parentDiv.classList.toggle('parent');
    for (let i = 0; i < e; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.margin = ".01px";
        div.style.flexGrow = "1";
        div.style.padding = "10px 0px"
        div.classList.toggle('child')
        div.style.flex = "1 1 auto";
        div.style.alignSelf = "stretch";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
        parentDiv.appendChild(div);
    }
    parentDiv.style.display = "flex";
    parentDiv.style.flexDirection = "row";
    container.appendChild(parentDiv);
}

function clearCell(){
    const child = document.querySelectorAll('.child');
    child.forEach(child => {
        child.style.backgroundColor = "white";
    })
}