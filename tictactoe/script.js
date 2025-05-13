var currentValue = "O";
function playerplace(e)
{   

    const cellDiv = e.target;

    if (e.target.innerHTML == ""){
        if (currentValue != "X"){
            currentValue = "X";
            e.target.innerHTML = currentValue;
        } 
        else{
            currentValue = "O";
            e.target.innerHTML = currentValue;
        }
    }
}