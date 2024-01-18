function gridAsk(){
    let x  = prompt("Please input grid dimension.")
    if (x > 100){
        confirm("invalid grid dimensions. Please input a number below 100")
        gridAsk()
    }
    else{
        return x
    }
}

function changeColor(x){
    x.style.backgroundColor = "blue" 
}

function gridHover(){
    let squares = document.getElementsByClassName("grid-item")
    for (let i=0; i<squares.length; i++){
        squares[i].onmouseover = function() {changeColor(squares[i])}
    }
}

function gridGen(){
    let x = gridAsk()
    let p = document.getElementById("grid")

    for(let i=0; i<x; i++){
        let l = document.createElement("div")
        l.classList.add("grid-row")
        for (let j=0; j<x; j++){
            let g = document.createElement("div")      
            g.classList.add("grid-item")
            l.appendChild(g)
        }
        p.appendChild(l)
    }
    gridHover()
}
