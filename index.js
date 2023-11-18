// selecting the button
for(var i=0;i<=7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var letter=this.innerHTML;
    // for a click
    makeSound(letter);
    Animation(letter);
});
// for  a keypress
    document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    Animation(event.key);
    });

}
function makeSound(key) {
    switch (key){
        case "f":
        var crash = new Audio("sounds/crash.mp3")
        crash.play();
        break;

        case "a":
        var kick = new Audio("sounds/kick-bass.mp3")
        kick.play();
        break;

        case "s":
        var snare = new Audio("sounds/snare.mp3")
        snare.play();
        break;

        case "d":
        var t1 = new Audio("sounds/tom-1.mp3")
        t1.play();
        break;

        case "j":
        var t2 = new Audio("sounds/tom-2.mp3")
        t2.play();
        break;

        case "k":
        var t3 = new Audio("sounds/tom-3.mp3")
        t3.play();
        break;

        case "l":
        var t4 = new Audio("sounds/tom-4.mp3")
        t4.play();
        break;

        default:console.log("no sound");
            
        }
}
 function Animation(key){
    var activebutton = document.querySelector("."+ key);
    activebutton.classList.add("pressed");

    setTimeout(function(){
       activebutton.classList.remove("pressed"); 
    }, 100);
 }







