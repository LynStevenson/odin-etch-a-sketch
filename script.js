function makeGrid(){
    const container = document.querySelector("#container");
    const sizePrompt = document.querySelector("#sizePrompt");
    function changeColor(e){
        e.currentTarget.style.backgroundColor = ('#'+(0x1000000+Math.random()*0xffffff).toString(16).slice(1,7));
    }
    function darken(e){
        e.currentTarget.style.opacity = Number(e.currentTarget.style.opacity) + 0.10;
    }
    function createBoxes(length){
        container.replaceChildren();
        document.documentElement.style.setProperty("--box-size", (400/length).toString() + "px");
        for (let i = 0; i < length*length; i++) {
            const newDiv = document.createElement("Div");
            const darkeningDiv = document.createElement("Div");
            darkeningDiv.style.backgroundColor = "black";
            darkeningDiv.style.opacity = 0;
            darkeningDiv.addEventListener("mouseover", darken);
            newDiv.addEventListener("mouseover", changeColor);
            newDiv.appendChild(darkeningDiv);
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