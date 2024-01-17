//add a button at the top of the webpage that queries the user for grid dimensions
//generate grid using div tags in a flex container
//on mouse hover, change the background color of a grid square permanently

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

function gridGen(){
    let x = gridAsk()
    
}