function makeGrid(){
    const container = document.querySelector("#container");
    const sizePrompt = document.querySelector("#sizePrompt");
    function changeColor(e){
        e.target.style.backgroundColor = ('#'+(0x1000000+Math.random()*0xffffff).toString(16).slice(1,7));
    }
    function createBoxes(length){
        container.replaceChildren();
        document.documentElement.style.setProperty("--box-size", (400/length).toString() + "px");
        for (let i = 0; i < length*length; i++) {
            const newDiv = document.createElement("Div");
            newDiv.addEventListener("mouseover", changeColor);
            container.appendChild(newDiv);
        }
    }
    sizePrompt.addEventListener("click", () => {
        let length = prompt("Please enter the side length of the container");
        createBoxes(length);
    })
    createBoxes(4);
}

makeGrid();