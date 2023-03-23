const previustext = document.querySelector("#previus")
const currenttext = document.querySelector("#current")
const buttons = document.querySelectorAll("#btn button")

class calculator {

}

buttons.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        const value = e.target.innerText;
        
        if (+value >= 0 || value === ".") {
            console.log(value)
        } else {
            console.log ("op: " + value)
        }
    })
})