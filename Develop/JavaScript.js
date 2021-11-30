var hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]
var currentHourIndex = 0

// Current date at top of page
var now = moment()
$("#currentDay").text(moment(now).format('dddd, MMMM Do YYYY'));

var displaySchedule = function () {

    for (var i = 0; i < 9; i++) {
        var timeBlock = document.createElement("div")
        timeBlock.innerHTML = hours[i]
        timeBlock.id = i
        timeBlock.classList.add("hour")
        $("#scheduleContainer").append(timeBlock)
    }
    switch (new moment().hour()) {
        case 9:
            currentHourIndex = 0;
            break;
        case 10:
            currentHourIndex = 1;
            break;
        case 11:
            currentHourIndex = 2;
            break;
        case 12:
            currentHourIndex = 3;
            break;
        case 13:
            currentHourIndex = 4;
            break;
        case 14:
            currentHourIndex = 5;
            break;
        case 15:
            currentHourIndex = 6;
            break;
        case 16:
            currentHourIndex = 7;
            break;
        case 17:
            currentHourIndex = 8;
            break;
    }


}










$(document).ready(displaySchedule)