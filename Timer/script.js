var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");


var interval;

function timer(){
    sec.value--;
    if(sec.value == 0){
        min.value--;
        sec.value = 60;
    }else if(min.value == 0){
        hour.value--;
        min.value = 60;
    }
}

function start(){
    var start = document.getElementById("start").style.display="none";
    interval = setInterval(timer ,1000);
}

function pause(){
    clearInterval(interval);
}

function reset(){
    var start = document.getElementById("start").style.display="";
    pause();
    hour.value = 0;
    min.value = 0;
    sec.value = 0;

}



























