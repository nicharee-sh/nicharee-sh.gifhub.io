function AskMyName() {
    const name = prompt("Please enter your name", " Luknam");

    if (name != null) {
        document.getElementById("mynameis").innerHTML = 
        "My name is" + name;
}
}

function HelloWorld() {
    const h1message = document.getElementById ("mynameis").innerHTML
    alert(h1message + ' ชายแรกเป็นความรู้ ชายชู้เป็นประสบการณ์')
}