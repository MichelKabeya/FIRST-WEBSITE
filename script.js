const textInput = document.getElementById("text")
const speakButton = document.getElementById("erase")
const password = document.getElementById("password")
const bar = document.getElementById("bar")
const message = document.getElementById("message")
const eye = document.getElementById("eye")

speakButton.addEventListener("click", () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(textInput.value))
})

password.addEventListener("input", () =>{
    const length = password.value.length;
    if (length === 0) {
        bar.style.width = "0";
        message.textContent = "Start typing...";
    }
    else if (length < 5) {
        bar.style.width = "30%"
        bar.style.background = "#FF0000"
        message.textContent = "Weak password"
    }
    else if ( length < 9) {
        bar.style.width = "65%"
        bar.style.background = "#ffc800"
        message.textContent = "Medium password"
    }
    else {
        bar.style.width = "100%"
        bar.style.background = "#51ff00"
        message.textContent = "Strong password"
    }
});

eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text"
    } 
    else {
        password.type= "password"
    }
});

