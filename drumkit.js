//detecting button press
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("i got click");
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        // switch (buttonInnerHTML) {
        //     case "w":
        //         var tom1 = new Audio("tom-1.mp3");
        //         tom1.play();
        //         break;
        //     case "a":
        //         var tom2 = new Audio("tom-2.mp3");
        //         tom2.play();
        //         break;
        //     case "s":
        //         var tom3 = new Audio("tom-3.mp3");
        //         tom3.play();
        //         break;
        //     case "d":
        //         var tom4 = new Audio("tom-4.mp3");
        //         tom4.play();
        //         break;
        //     case "j":
        //         var snare = new Audio("snare.mp3");
        //         snare.play();
        //         break;
        //     case "k":
        //         var kick = new Audio("kick.mp3");
        //         kick.play();
        //         break;
        //     case "l":
        //         var crash = new Audio("crash.mp3");
        //         crash.play();
        //         break;
        //     default: console.log(buttonInnerHTML);
        // }
        //("https://open.wynk.in/7FXpwnoGbeb?~destination=whatsapp&~feature=wynk_share&~content_id=srch_hungama_286254);
    });

}
//detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    // console.log(event);
   // alert("key was pressed");
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        default: console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey){
     var activeButton = document.querySelector("." + currentKey);

     
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     },100);

}

// var audio = new Audio("top-1.mp3");
// audio.play();

// document.querySelector("button").addEventListener("click",handleClick)
// //hankClick() ---> () avoid coz after clicking function is called
// // ("click",function())
// function handClick(){
//     alert("i got click");
// }

// for (var i=0; i<document.querySelectorAll(".drum").length)
// document.querySelectorAll("button")[].addEventListener("click",function(){
//     alert("I got clicked ! ");
// }))