function pointGenerator(){
    var point = Math.floor(Math.random()*6)+1;   
    return point;
}

function diceMe(){
    var playerOnePoint = pointGenerator();
    var playerTwoPoint = pointGenerator();

    // console.log("Player 1 :"+playerOnePoint);
    // console.log("Player 2: "+playerTwoPoint);

    document.querySelector(".img1").setAttribute("src","./images/dice"+playerOnePoint+".png");
    document.querySelector(".img2").setAttribute("src","./images/dice"+playerTwoPoint+".png");


    if(playerOnePoint === playerTwoPoint){
        document.querySelector("h1").innerHTML= "Draw";
    }
    else if(playerOnePoint > playerTwoPoint){
        document.querySelector("h1").innerHTML= "Player 1 Wins";
    }
    else{
        document.querySelector("h1").innerHTML= "Player 2 Wins";
    }
}



