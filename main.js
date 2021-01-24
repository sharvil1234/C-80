function getParaOne() 
{
    var inputs = [];
    for (var i = 1; i <= 6; i++) 
    {
        inputs.push(document.getElementById("1_input_" + i).value);
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(" ");
}

function getParaTwo() 
{
    var inputs = [];
    for (var i = 1; i <= 6; i++) 
    {
        inputs.push(document.getElementById("2_input_" + i).value);
    }
    document.getElementById("showParagraph2").innerHTML = inputs.join(" ");
}