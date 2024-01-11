


let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let player1 = document.getElementById("player1")
let ply2 = document.getElementById("ply2")
let score1=0 ;
let score2=0 ;
let sco1 = document.getElementById("score1")
let sco2 = document.getElementById("score2")
let operator=0;
let buttons = document.getElementsByClassName("btns")
let declare = document.getElementById("declare")
let again = document.getElementById("again")

function randomise(){
    operator = Math.ceil(Math.random()*3)
    switch(operator){
        case 1: ply2.setAttribute("src","./assets/rock-hand.png")
        break
        case 2: ply2.setAttribute("src","./assets/paper-hand.png")
        break
        case 3: ply2.setAttribute("src","./assets/scissors-hand.png")
        break

    }
}
rock.addEventListener("click",()=>{
    document.getElementById("ply1").setAttribute("src","./assets/rock-hand.png")
    randomise()
    if(operator==2){
        score2++;
        // console.log("score2: ", score2);
       
    }else if(operator==3){
        score1++
       
    }
    score()
    win()

})
paper.addEventListener("click",()=>{
    document.getElementById("ply1").setAttribute("src","./assets/paper-hand.png")
    randomise()
    if(operator==3){
        score2++;
        
    }else if(operator==1){
        score1++
        
    }
    score()
    win()
})
scissors.addEventListener("click",()=>{
    document.getElementById("ply1").setAttribute("src","./assets/scissors-hand.png")
    randomise()
    if(operator==1){
        score2++;
    }else if(operator==2){
        score1++
        
    }
    score()
    win()
})
function score(){
    sco1.textContent=score1
    sco2.textContent=score2
}
score()
function win(){
    if(score1==5 || score2==5){
        rock.style.visibility="hidden";
        paper.style.visibility="hidden";
        scissors.style.visibility="hidden";
    }
    if(score1==5){
        declare.innerHTML="You have won the game"
        declare.style.visibility="visible"
        again.style.visibility="visible"
    }
    else if(score2==5){
        declare.textContent="You have lost the game"
        declare.style.visibility="visible"
        again.style.visibility="visible"
    }
}


again.addEventListener("click", PlayAgain)
function PlayAgain(){
    location.reload();
}







