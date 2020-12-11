// JavaScript source code
var character = document.getElementById("character");

var block = document.getElementById("block");
function jump() {
    if (character.classList != "animate") {


        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");

    }, 500);

}
var checkded = setInterval(function () {
    var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var leftblock =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (leftblock < 20 && leftblock > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("YOU LOST");
    }
},10);

