var hours = ["0900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700"]
var currentHourIndex = 0
var textInput = ["", "", "", "", "", "", "", "", ""]

// Current date at top of page
var now = moment()
$("#currentDay").text(moment(now).format('dddd, MMMM Do YYYY'));

// Row structure
var createRow = function (id) {
    var timeBlock = document.createElement("div")
    timeBlock.classList.add("time-block")
    var row = document.createElement("div")

    row.classList.add("row")
    row.id = id
    var hour = document.createElement("div")
    hour.classList.add("hour")
    hour.innerHTML = hours[id]
    var text = document.createElement("textarea")
    text.classList.add("description")
    text.classList.add("col-9")
    text.value = textInput[id]
    var save = document.createElement("button")
    save.classList.add("saveBtn")
    save.textContent = "save"
    save.id = "btn-" + id
    $(save).click(onSave)

    row.appendChild(hour)
    row.appendChild(text)
    row.appendChild(save)
    timeBlock.appendChild(row)

    return timeBlock;
};


var displaySchedule = function () {

    textInput = getStorage()
    console.log(getStorage())
    for (var i = 0; i < 9; i++) {
        var timeBlock = createRow(i)
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
        default:
            if (moment().hour() > 17) {
                currentHourIndex = 9
            }
            else {
                currentHourIndex = -1
            }

    }

    // decorating hours
    for (var i = currentHourIndex + 1; i < 9; i++) {
        $("#" + i).find("textarea").addClass("future")
    }
    for (var i = currentHourIndex - 1; i >= 0; i--) {
        $("#" + i).find("textarea").addClass("past")
    }

    if (currentHourIndex > -1 && currentHourIndex < 9) {
        $("#" + currentHourIndex).find("textarea").addClass("present")
    }
};

// Save button functionality
var onSave = function (event) {
    var id = event.target.id.substring(4)
    var text = $("#" + id + " textarea").val()

    textInput[id] = text
    saveStorage()
};

var saveStorage = function () {
    localStorage.setItem("textInput", JSON.stringify(textInput));
};

var getStorage = function () {
    var stored = localStorage.getItem("textInput")
    if (!stored) {
        return textInput
    }
    else {
        return JSON.parse(stored)
    }

}








$(document).ready(displaySchedule)