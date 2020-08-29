var tasks = {}
var tasks = JSON.parse(localStorage.getItem("tasks")) || {};
var currentDate = document.getElementById("currentDay")

var currentDay = moment().format('dddd, MMMM Do YYYY')
var currentHour = moment().format("h")
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

    tasks[hour] = value

    localStorage.setItem("tasks", JSON.stringify(tasks))
    // var content = $("div").children('div').text()
    console.log(tasks.length)

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


