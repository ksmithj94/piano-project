//play sounds on click and keyboard
// 1. DOM manupilation with event listener click and keydown
// 2. create a loop to go through each button class

for (var i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var clickSound = this.className;
        //click
        switch (clickSound) {
            case "white-keys-c":
                var middleC = new Audio("sounds/piano_middle_C.mp3");
                middleC.play();
                break;

            case "white-keys-d":
                var dKey = new Audio("sounds/piano_D.mp3");
                dKey.play();
                break;

            case "white-keys-e":
                var eKey = new Audio("sounds/piano_E.mp3");
                eKey.play();
                break;
            
            case "white-keys-f":
                var fKey = new Audio("sounds/piano_F.mp3");
                fKey.play();
                break;

            case "white-keys-g":
                var gKey = new Audio("sounds/piano_G.mp3");
                gKey.play();
                break;

            case "white-keys-a":
                var aKey = new Audio("sounds/piano_A.mp3");
                aKey.play();
                break;

            case "white-keys-b":
                var bKey = new Audio("sounds/piano_B.mp3");
                bKey.play();
                break;

            case "black-keys-cSharp":
                var cSharp = new Audio("sounds/piano_C_sharp.mp3");
                cSharp.play();
                break;

            case "black-keys-dSharp":
                var dSharp = new Audio("sounds/piano_D_Sharp.mp3");
                dSharp.play();
                break;

            case "black-keys-fSharp":
                var fSharp = new Audio("sounds/piano_F_Sharp.mp3");
                fSharp.play();
                break;

            case "black-keys-gSharp":
                var gSharp = new Audio("sounds/piano_G_Sharp.mp3");
                gSharp.play();
                break;

            case "black-keys-aSharp":
                var aSharp = new Audio("sounds/piano_A_Sharp.mp3");
                aSharp.play();
                break;

            default: console.log("clicked")
                break;
        }
    })
}

//keydown
// white keys(sdfghjk)
// black keys(eryui)
// how to use a switch statment?

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 83) {
    var sMiddleC = new Audio("sounds/piano_middle_C.mp3");
    sMiddleC.play();
    } else if (event.keyCode == 68) {
    var dDKey = new Audio("sounds/piano_D.mp3");
    dDKey.play();
    } else if (event.keyCode == 70) {
    var fEKey = new Audio("sounds/piano_E.mp3");
    fEKey.play();
    } else if (event.keyCode == 71) {
    var gFKey = new Audio("sounds/piano_F.mp3");
    gFKey.play();
    } else if (event.keyCode == 72) {
    var hGKey = new Audio("sounds/piano_G.mp3");
    hGKey.play();
    } else if (event.keyCode == 74) {
    var jAKey = new Audio("sounds/piano_A.mp3");
    jAKey.play();
    } else if (event.keyCode == 75) {
    var kBKey = new Audio("sounds/piano_B.mp3");
    kBKey.play();
    } 
    else if (event.keyCode == 69) {
    var eCSharp = new Audio("sounds/piano_C_sharp.mp3");
    eCSharp.play();
    } else if (event.keyCode == 82) {
    var rDSharp = new Audio("sounds/piano_D_Sharp.mp3");
    rDSharp.play();
    } else if (event.keyCode == 89) {
    var yFSharp = new Audio("sounds/piano_F_Sharp.mp3");
    yFSharp.play();  
    } else if (event.keyCode == 85) {
    var uGSharp = new Audio("sounds/piano_G_Sharp.mp3");
    uGSharp.play();    
    } else if (event.keyCode == 73) {
    var iASharp = new Audio("sounds/piano_A_Sharp.mp3");
    iASharp.play();   
    } else {
        console.log("keydown");
    }
}) 
 
// key animation
 function keyAnimation(currentKey) {
     var activeKey = doucment.querySelector("." + currentKey);

     activeButton.classlist.add("pressed");

     setTimeout (function(){
        activeButton.classlist.add("pressed");
     }, 100);
 }
