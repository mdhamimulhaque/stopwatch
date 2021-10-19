let hour = 0;
let minute = 0;
let second = 0;
let stopTime = true;


const handleStartButton = () => {
    if (stopTime == true) {
        stopTime = false;
        timeSetUp()
    }
}

const timeSetUp = () => {
    if (stopTime == false) {

        hour = parseInt(hour);
        minute = parseInt(minute);
        second = parseInt(second);

        second = second + 1;

        if (second == 60) {
            minute = minute + 1;
            second = 0;
        }
        if (minute == 60) {
            hour = hour + 1;
            second = 0;
            minute = 0;
        }

        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }

        document.getElementById("stopwatch").innerHTML = `${hour}:${minute}:${second} `;
        setTimeout("timeSetUp()", 1000);

    }
}



const handleStopButton = () => {
    if (stopTime == false) {
        stopTime = true;
    }
}

const handleResetButton = () => {
    document.getElementById("stopwatch").innerHTML = `00:00:00`;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let stopTime = true;
}






