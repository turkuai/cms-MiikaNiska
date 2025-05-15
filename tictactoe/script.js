var currentValue = "O";
function playerplace(e) {

        const cellDiv = e.target;

        if (e.target.innerHTML == "") {
                if (currentValue != "X") {
                        currentValue = "X";
                        e.target.innerHTML = currentValue;
                        checkwin()
                }
                else {
                        currentValue = "O";
                        e.target.innerHTML = currentValue;
                        checkwin()
                }
        }

        function checkwin() {
                const box11 = document.getElementById("box-1-1")
                const box12 = document.getElementById("box-1-2")
                const box13 = document.getElementById("box-1-3")
                const box21 = document.getElementById("box-2-1")
                const box22 = document.getElementById("box-2-2")
                const box23 = document.getElementById("box-2-3")
                const box31 = document.getElementById("box-3-1")
                const box32 = document.getElementById("box-3-2")
                const box33 = document.getElementById("box-3-3")
                if (box11.innerHTML === currentValue && box12.innerHTML === currentValue && box13.innerHTML === currentValue) {
                        box11.removeAttribute("class");
                        box12.removeAttribute("class");
                        box13.removeAttribute("class");
                        box11.setAttribute("class", "winning-cell");
                        box12.setAttribute("class", "winning-cell");
                        box13.setAttribute("class", "winning-cell");
                }
                else if (box21.innerHTML === currentValue && box22.innerHTML === currentValue && box23.innerHTML === currentValue) {
                        box21.removeAttribute("class");
                        box22.removeAttribute("class");
                        box23.removeAttribute("class");
                        box21.setAttribute("class", "winning-cell");
                        box22.setAttribute("class", "winning-cell");
                        box23.setAttribute("class", "winning-cell");
                }
                else if (box31.innerHTML === currentValue && box32.innerHTML === currentValue && box33.innerHTML === currentValue) {
                        box31.removeAttribute("class");
                        box32.removeAttribute("class");
                        box33.removeAttribute("class");
                        box31.setAttribute("class", "winning-cell");
                        box32.setAttribute("class", "winning-cell");
                        box33.setAttribute("class", "winning-cell");
                }
                else if (box11.innerHTML === currentValue && box21.innerHTML === currentValue && box31.innerHTML === currentValue) {
                        box11.removeAttribute("class");
                        box21.removeAttribute("class");
                        box31.removeAttribute("class");
                        box11.setAttribute("class", "winning-cell");
                        box21.setAttribute("class", "winning-cell");
                        box31.setAttribute("class", "winning-cell");
                }
                else if (box12.innerHTML === currentValue && box22.innerHTML === currentValue && box32.innerHTML === currentValue) {
                        box12.removeAttribute("class");
                        box22.removeAttribute("class");
                        box32.removeAttribute("class");
                        box12.setAttribute("class", "winning-cell");
                        box22.setAttribute("class", "winning-cell");
                        box32.setAttribute("class", "winning-cell");
                }
                else if (box13.innerHTML === currentValue && box23.innerHTML === currentValue && box33.innerHTML === currentValue) {
                        box13.removeAttribute("class");
                        box23.removeAttribute("class");
                        box33.removeAttribute("class");
                        box13.setAttribute("class", "winning-cell");
                        box23.setAttribute("class", "winning-cell");
                        box33.setAttribute("class", "winning-cell");
                }
                else if (box11.innerHTML === currentValue && box22.innerHTML === currentValue && box33.innerHTML === currentValue) {
                        box11.removeAttribute("class");
                        box22.removeAttribute("class");
                        box33.removeAttribute("class");
                        box11.setAttribute("class", "winning-cell");
                        box22.setAttribute("class", "winning-cell");
                        box33.setAttribute("class", "winning-cell");
                }
                else if (box13.innerHTML === currentValue && box22.innerHTML === currentValue && box31.innerHTML === currentValue) {
                        box13.removeAttribute("class");
                        box22.removeAttribute("class");
                        box31.removeAttribute("class");
                        box13.setAttribute("class", "winning-cell");
                        box22.setAttribute("class", "winning-cell");
                        box31.setAttribute("class", "winning-cell");
                }
        }
}

let gameid = null
function startGame() {
        const playerX = document.getElementById("p1").value
        const playerO = document.getElementById("p2").value
        fetch("replay-save.php",
                {
                        headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({ playerX, playerO })
                })
                .then( (res) => res.json()).then(json => {gameid = json.gameid; console.log(gameid)})
                .catch(function (res) { console.log(res) })
}