var a;
var sttstp = 0;
function startStop(){
    sttstp = sttstp + 1;

    if(sttstp === 1){
        start();

        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
    }
    else if(sttstp === 2){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        sttstp = 0;
        stop();
    }
}

async function start(){
    console.log("Started");
    a = setInterval(timer, 10);
}

async function stop(){
    clearInterval(a);
    
}

var milli = 0;
var second = 0;
var minute = 0;
var hour = 0;

var milliO = 0;
var secondO = 0;
var minuteO = 0;
var hourO = 0;

function resolveAfterOneSecond(a){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a);
        }, 1000);
    });
}

async function tim(){
    var a = await resolveAfterOneSecond(1);
    console.log(a);
}

async function timer(){
    milliO = checkTime(milli);
    secondO = checkTime(second);
    minuteO = checkTime(minute);
    hourO = checkTime(hour);

    tim();
     milli = ++milli;

    if(milli === 100){
        milli = 0;
        second = ++second;
    }

    if(second === 60){
        second = 0;
        minute = ++minute;
    }

    if(minute === 60){
        minute = 0;
        hour = ++hour;
    }

    document.getElementById("second").innerHTML = secondO;
    document.getElementById("minute").innerHTML = minuteO;
    document.getElementById("hour").innerHTML = hourO;
}

function checkTime(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}

function reset(){
    milli = 0;
    second = 0;
    minute = 0;
    hour = 0;

    document.getElementById("second").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";

    if(sttstp === 1){
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
    }
    else if(sttstp === 2){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
    }
}