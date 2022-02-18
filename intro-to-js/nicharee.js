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

function CalAge() {
    const birthYear = prompt("Please enter year of birth", " 1997");
    let age = new Date().getFullYear() - birthYear;
    if (age != null) {
        alert('ยินดีด้วย นายอยู่ในประเทศนี้มา' + String(age) + ' ปีแล้ว')
    }
}

function loadProfile() {
    const name = "Nicharee"
    const province = "NaKhon Si Thammarat"
    document.getElementById("my-name").innerHTML = name;
    document.getElementById("my-province").innerHTML = province;
}