// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verseBoy() {
    let output = "";
    output += "<p>";
    output += "Buddy, you're a boy, make a big noise<br>";
    output += "Playing in the street, gonna be a big man someday<br>";
    output += "You got mud on your face, you big disgrace<br>";
    output += "Kicking your can all over the place<br>";
    output += "</p>";
    return output;
}

function chorus() {
    let output = "";
    output += "We will, we will rock you";
    return output;
}

function verseYoung() {
    let output = "";
    output += "<p>";
    output += "Buddy, you're a young man, hard man<br>";
    output += "Shouting in the street, gonna take on the world someday<br>";
    output += "You got blood on your face, you big disgrace<br>";
    output += "Waving your banner all over the place<br>";
    output += "</p>";
    return output;
}

function verseOld() {
    let output = "";
    output += "<p>";
    output += "Buddy you're an old man, poor man<br>";
    output += "Pleading with your eyes, gonna make yourself peace someday<br>";
    output += "You got mud on your face, big disgrace<br>";
    output += "Somebody better put you back into your place<br>";
    output += "</p>";
    return output;
}

function guitarSolo() {
    let output = "";
    output += "<p>";
    output += "<em>(Guitar Solo)</em>";
    output += "</p>";
    return output;

}

function main() {
    let finalOutput = "" // used to build lyrics string
    // call verse and chorus functions
    finalOutput += `${verseBoy()}`;
    finalOutput += `<p>${chorus()}<br>`;
    finalOutput += `${chorus()}</p>`;
    finalOutput += `${verseYoung()}`;
    finalOutput += `<p>${chorus()}, sing it! ah<br>`;
    finalOutput += `${chorus()}</p>`;
    finalOutput += `${verseOld()}`;
    finalOutput += `<p>${chorus()}, sing it!<br>`;
    finalOutput += `${chorus()}, everybody</p>`;
    finalOutput += `${chorus()}, uh<br>`;
    finalOutput += `${chorus()}, alright!</p>`;
    finalOutput += `${guitarSolo()}`;
    finalOutput += `<p>${chorus()}, yeah, yeah, come on<br>`;
    finalOutput += `${chorus()}, alright, louder!</p>`;
    finalOutput += `<p>${chorus()}, one more time<br>`;
    finalOutput += `${chorus()}<br>Yeah</p>`;
    // each verse/chorus should return text including HTML paragraph tags
    // do not modify the statement below
    // it will take 
    document.getElementById("lyrics").innerHTML = finalOutput;
}

window.onload = function () {
    main();
}