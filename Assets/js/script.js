var currentTimeEl = $('#time-display')
var currentTime = moment().format('HH:mm');
var nineBlock = $('#9-o-clock');
var tenBlock = $('#10-o-clock');
var elevenBlock = $('#11-o-clock');
var twelveBlock = $('#12-o-clock');
var oneBlock = $('#1-o-clock');
var twoBlock = $('#2-o-clock');
var threeBlock = $('#3-o-clock');
var fourBlock = $('#4-o-clock');
var fiveBlock = $('#5-o-clock');
var sixBlock = $('#6-o-clock');
var saveButton = $('.saveButton')

// Sets a blockText variable to save the values entered in
var blockText = [nineBlock.val(), tenBlock.val(), elevenBlock.val(), twelveBlock.val(), oneBlock.val(), twoBlock.val(), threeBlock.val(), fourBlock.val(), fiveBlock.val(), sixBlock.val()];
var storedBlocks = JSON.parse(localStorage.getItem("blockText"));

// Goes through the saved block text and sets the current value to that of which the saved text is
var num;
for(num = 0 ; num < storedBlocks.length ; num++)
{
    blockText[num] = storedBlocks[num];
}

// Sets variable of the block so that we can set the colors
var blocks = [nineBlock, tenBlock, elevenBlock, twelveBlock, oneBlock, twoBlock, threeBlock, fourBlock, fiveBlock, sixBlock];



// Sets interval for seconds to count
setInterval(displayTime, 1000);


// Function that saves every block whenever you hit save, anywhere.
saveButton.click(function()
{   
    blockText = [nineBlock.val(), tenBlock.val(), elevenBlock.val(), twelveBlock.val(), oneBlock.val(), twoBlock.val(), threeBlock.val(), fourBlock.val(), fiveBlock.val(), sixBlock.val()];
    localStorage.setItem('blockText', JSON.stringify(blockText));
})

// Displays the date at the top
function displayTime()
{
    var currentDate = moment().format('dddd MMMM Do');
    currentTimeEl.text(currentDate);   
    setInterval(colorizeBlocks, 1000); 
}

// Turns the time blocks when it's a certain time
function colorizeBlocks()
{
    for(i = 0 ; i < blocks.length ; i++)
    {
        if(currentTime < "10:00")
        {
            if(i === 0)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "11:00")
        {
            if(i < 1)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 1)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "12:00")
        {
            if(i < 2)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 2)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "13:00")
        {
            if(i < 3)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 3)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "14:00")
        {
            if(i < 4)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 4)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "15:00")
        {
            if(i < 5)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 5)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "16:00")
        {
            if(i < 6)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 6)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "17:00")
        {
            if(i < 7)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 7)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "18:00")
        {
            if(i < 8)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 8)
            {
                blocks[i].css("background-color", "#ff6961");
            }
            else
            {
                blocks[i].css("background-color", "#77dd77");
            }
        }
        else if(currentTime < "19:00")
        {
            if(i < 9)
            {
                blocks[i].css("background-color", "#d3d3d3");
            }
            else if(i === 9)
            {
                blocks[i].css("background-color", "#ff6961");
            }
        }
    }
}












