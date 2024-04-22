var countdown;
var inputtime;
var alarmtime = document.getElementById('alarmsound');

function startTimer() {
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;
    inputtime = minutes*60 + seconds;
    countdown = setInterval(upddateTime, 1000);
}

function upddateTime() {
    var minutes = Math.floor(inputtime / 60);
    var seconds = (inputtime % 60);
    document.getElementById('timer').textContent = minutes + ":" + seconds;
    inputtime--;

    if (inputtime <= 0) {
        clearInterval(countdown);
        alarmtime.play();
        setTimeout(function() {alert("hết giờ"); }, 1000);
    }
}


function resetcountdown() {
    document.getElementById('timer').textContent = "00" + ":" + "00";
    clearInterval(countdown);
    alarmtime.pause();
    alarm.currentTime = 0;
}