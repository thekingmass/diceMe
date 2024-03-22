function pointGenerator(){
    var point = Math.floor(Math.random()*6)+1;   
    return point;
}

function diceMe(){
    var playerOnePoint = pointGenerator();
    var playerTwoPoint = pointGenerator();

    document.querySelector(".img1").setAttribute("src","./images/dice"+playerOnePoint+".png");
    document.querySelector(".img2").setAttribute("src","./images/dice"+playerTwoPoint+".png");


    if(playerOnePoint === playerTwoPoint){
        document.querySelector("h1").innerHTML= "📍Oh Its a Draw📍";
    }
    else if(playerOnePoint > playerTwoPoint){
        document.querySelector("h1").innerHTML= "🚩 Player 1 Wins";
    }
    else{
        document.querySelector("h1").innerHTML= "Player 2 Wins 🚩";
    }
}



