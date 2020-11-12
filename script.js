$(function() { // research tells me this is a shorthand of the document.ready stuff
    $("#scheduleForm").click(displaySchedule);

    function displaySchedule() {
        var day = $("#scheduleForm input[type='radio']:checked").val();
        var outputActivity;
        var outputTime;

        switch (day) {
            case "monday":
                outputActivity = "Jog";
                outputTime = "6:00am - 7:00am";
                break;
            case "tuesday":
                outputActivity = "Swim";
                outputTime = "7:00am - 8:00am";
                break;
            case "wednesday":
                outputActivity = "Drive to School";
                outputTime = "9:00am - 10:00am";
                break;
            case "thursday":
                outputActivity = "Jog";
                outputTime = "6:00pm - 7:00pm";
                break;
            case "friday":
                outputActivity = "Bike";
                outputTime = "8:30am - 10:00am";
                break;
        }
        $("#scheduleActivity").text(outputActivity);
        $("#scheduleTime").text(outputTime);
    }
});