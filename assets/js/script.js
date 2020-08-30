
var currentDate = document.getElementById("currentDay")

var currentDay = moment().format('dddd, MMMM Do YYYY')
var currentHour = moment().hours()
$("#currentDay").replaceWith(currentDay)


// check if you can see textarea input
// store input to local storage
//
var taskEffect = function (data) {

    if (data == currentHour) {
        $(this).css("background-color", "red");
    }
    // if (moment().format("h").isAfter(data)) {
    //     $('textarea').addClass("list-group-item-warning");
    //     console.log(data)
    // }
}
taskEffect()


var loadSchedule = function (value, hour) {
    localStorage.setItem(hour, value);

    // tasks[hour] = value

    // localStorage.setItem("tasks", JSON.stringify(tasks))
    // // var content = $("div").children('div').text()
    // console.log(tasks.length)

    // button name =
}

$(document).ready(function () {
    $(".saveBtn").click(function () {
        var value = $(this).siblings("textarea").val().trim();
        var hour = $(this).siblings('div').text()
        var data = $(this).data("name")
        // console.log(Object.values(tasks))
        // console.log(tasks)
        // console.log(value)
        loadSchedule(value, hour)

    });

});

$(".nine").val(localStorage.getItem("9AM"))
$(".ten").val(localStorage.getItem("10AM"))
$(".eleven").val(localStorage.getItem("11AM"))
$(".twelve").val(localStorage.getItem("12PM"))
$(".one").val(localStorage.getItem("1PM"))
$(".two").val(localStorage.getItem("2PM"))
$(".three").val(localStorage.getItem("3PM"))
$(".four").val(localStorage.getItem("4PM"))
$(".five").val(localStorage.getItem("5PM"))

