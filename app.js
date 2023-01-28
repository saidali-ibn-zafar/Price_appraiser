let btn = document.getElementById('btn');
let output = document.getElementById('outputText');
let textWarningColor = document.getElementById('outputText').style.color; 

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input >= 7 && input <= 15){
        output.innerHTML = `👌🏻 Cool, it is normal 👌🏻`
    }
    else if (input > 15){
        output.innerHTML = `🔼 $${input} is expensive! 🔼`
    }
    else if (input < 7){
        output.innerHTML = `🔽 $${input} is cheap... 🔽`
    } 
})