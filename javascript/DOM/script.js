let numberInput = document.getElementById("numberInput");
let button = document.getElementById("addButton");
let selectShape = document.getElementById("selectShape");
let colorInput = document.getElementById("colorInput");
let cont = document.getElementById("finalResult");


button.addEventListener("click", function(){
    // console.log("button working");
    
    let valueOfInput = numberInput.value;
    numberInput.value = "";

    // console.log(valueOfInput);
    let shape = selectShape.value;
    let color = colorInput.value;
    // console.log(`${valueOfInput}, ${shape},${color}`);

    // result.innerHTML = "";

    for(let i = 0; i<valueOfInput; i++){
        //create element
        let ele = document.createElement("div");
        ele.classList.add(shape);
        ele.style.backgroundColor = color;

        cont.appendChild(ele);
    }



});