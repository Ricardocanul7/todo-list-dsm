/* Demo function... remove when start project */
const startRotateSquare = () => {
    $square = document.getElementById("square");
    $actionButton = document.getElementById("action-button");
    
    if($square.classList.contains('rotate')){
        $square.classList.remove('rotate');
        $actionButton.innerHTML = "Start rotation";
    }else{
        $square.classList.add('rotate');
        $actionButton.innerHTML = "Stop rotation";
    }
}


/* Start function */
const main = () => {
    
}

// Initialize script
main();