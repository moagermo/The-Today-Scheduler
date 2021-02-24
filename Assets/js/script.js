var currentDateEl = $('#time-display')

function displayTime()
{
    var rightNow = moment().format('MMMM Do YYYY, hh:mm:ss a');
    currentDateEl.text(rightNow);
}


setInterval(displayTime, 1000);
