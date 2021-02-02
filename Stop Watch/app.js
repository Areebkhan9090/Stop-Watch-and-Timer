var min = 0;
var sec = 0;
var milisec = 0;

var minDisplay = document.getElementById("min");
var secDisplay = document.getElementById("sec");
var milisecDisplay = document.getElementById("milisec");


function timer(){
        milisec++
        milisecDisplay.innerHTML = milisec;
        if(milisec >= 100){
            sec++
            secDisplay.innerHTML = sec;
            milisec = 0;
        }else if(sec >= 60){
            min++
            minDisplay.innerHTML = min;
            sec = 0;
        }
}

function start(){
    var start = document.getElementById("start").style.display="none"
interval = setInterval(timer,10)
}

function pause(){
    var start = document.getElementById("start").style.display=""

    clearInterval(interval);
}

function reset(){
    pause()
    min = 0;
    sec = 0 ;
    milisec = 0;

    minDisplay.innerHTML = min;
    secDisplay.innerHTML =  sec;
    milisecDisplay.innerHTML = milisec;

}