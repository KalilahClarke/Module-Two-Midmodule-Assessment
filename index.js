const die= { "⚀": 1, "⚁": 2, "⚂": 3, "⚃": 4, "⚄": 5, "⚅": 6 }
const keys = Object.keys(die)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    const ul = document.querySelector("ul");
    const p = document.querySelector("p");
    const roll = document.querySelector("#roll-it")
    
    form.addEventListener("submit",(event) => {
        // html form connects to addEventListen("submit")
        event.preventDefault();
        // stop website from refreshing look at the refresh button and the url to see if it is actually working (?) means preventDefault isn't being called
        const number = Number(document.querySelector("#number-dice").value);
        let string = "";
        if (number === 0){
            p.textContent = "Error: Please choose a Number > 0"
        }else{
            for(let i = 0; i < number; i++){
                let random = Math.floor(Math.random() * Object.keys(die).length);
                let dices = Object.keys(die)[random]; 
                string += dices
                
            }
            p.textContent = `${string}`
         }  
        //What's missing is the sum which is the object.value that needs to be keyed into and sumed up within a function
        // then all information needed to be summed up and storied in history with the use of the document.createElement("li");
        // then needs to be appended to the parent directory ul
    })
    
})