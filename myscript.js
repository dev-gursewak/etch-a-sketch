const container = document.getElementById('container');

for (let i=0; i<16*16; i++){
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.margin = ".01px";
    div.style.padding = "56px";
    div.style.flexGrow = "1";
    container.appendChild(div);
}

