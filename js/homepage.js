var Msg = new Array("DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798", 
    "DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379", "DISNEY PREMIERACCESS - 1-ATTRACTION, STARTING FROM HK $79");
var thisMsg = Math.floor(Math.random() * Msg.length);

var myVideos = new Array("https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4", 
    "https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4");
var thisVideo = 0;

window.onload = init;

function init(){
    rotate();
    document.getElementById("Video1").addEventListener("ended", rotate_video);
    document.getElementById("error_msg").style.visibility = "hidden";
}
setInterval('rotate()', 3000);

function rotate() {

    thisMsg++;
    if (thisMsg == Msg.length) {
        thisMsg = 0;
    }

    document.getElementById('messagee').innerHTML = Msg[thisMsg];
} 


function rotate_video() {
    thisVideo++;
    thisVideo = thisVideo % myVideos.length;
    var Video1 = document.getElementById("Video1");

    Video1.src = myVideos[thisVideo];
    Video1.play();
}

function validation() {
    var inputs = document.querySelectorAll('#reservation_form input');
    var err_msg =  document.getElementById("error_msg");
    var isValid = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() == "") {
        isValid = false;
        break;
        }
    }
    if (!isValid) {
        err_msg.style.visibility = "visible";
        return false;
    }
    else{
        err_msg.style.visibility = "hidden";
        if(reserve(inputs[0].value,inputs[1].value,inputs[2].value)){
            alert("Reservation done. Thank you.");
        }
        else{
            alert("Disneyland has reached the maximum number of visitors for the day");
        }
        return false;
    }
}
        