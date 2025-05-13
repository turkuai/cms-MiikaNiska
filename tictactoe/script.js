var currentValue = "O";
function playerplace(id)
{   
    const boxid = id;
    if (currentValue != "X"){
        currentValue = "X";
        document.getElementById(boxid).innerHTML = currentValue;
    } 
    else{
        currentValue = "O";
        document.getElementById(boxid).innerHTML = currentValue;
    }
}