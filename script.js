const getClass = (element) => document.querySelector(`.${element}`)
const getAllClass = (element) => document.querySelectorAll(`.${element}`)

// first method to change the colors
// const radioBtns = getAllClass("theme");
// const firstRadio = getClass("theme0").checked = true;
// add "theme" class manually to all 3 radio buttons
// radioBtns.forEach((radio, index) => {
//     radio.addEventListener("click", () => {
//         radioBtns.forEach((rad,num) =>{
//             document.body.classList.remove(`theme${num}`);
//             console.log("works")
//         })
//         if (radio.checked) {
//             document.body.classList.add(`theme${index}`);
//         }
//     })
// })

// second method to change the colors
const radioBtns = getClass("radios");
const firstRadio = getClass("theme0").checked = true;

radioBtns.addEventListener("click", (e) => {
    const getClassName = e.target.className;
    document.body.className = "";
    if (e.target.checked) {
        document.body.classList.add(getClassName);
    }
})

// calculation

const displayOutput = getClass("output");
const inputs = getAllClass("input");
const submit = getClass("calc-function");

const operator = ["x","/","+","-"];

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        if (input.classList.contains("del")) {
            // delete functionality
            displayOutput.textContent = displayOutput.textContent.slice(0,-1);
        } else {
            // check if there is an operator at the end which if there
            // is one will not allow any more inputof operator

            if(operator.includes(displayOutput.textContent.slice(-1)) && operator.includes(input.textContent)){
                displayOutput.textContent += "";
            }else{
                if(input.textContent == "x"){
                    displayOutput.textContent += "*";
                }else{
                    displayOutput.textContent += input.textContent;
                }
            }
        }
    })
})

// reset and solve the problem on the display
submit.addEventListener("click",(e) => {
    if(e.target.classList.contains("reset")){
        displayOutput.textContent = "";
    }else if(e.target.classList.contains("solve")){
        displayOutput.textContent = solve();
        displayOutput.textContent = displayOutput.textContent.slice(0,13);
    }
})

const solve = () => {
    try {
        return eval(displayOutput.textContent.slice(0,-1));
    } catch{
        return "Error!"
    }
}