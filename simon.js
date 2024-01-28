let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h4=document.querySelector("h4");
let btns=['red','green','pink','orange'];
let flag=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Started.")
        started=true;
        gameSeq=[];
        level=0
        setTimeout(levelUp,800);
    }
});

function levelUp(){
    level++;
    userSeq=[];
    h4.innerText=`Level ${level}`;
    let ran=Math.floor(Math.random()*3);
    let ranColor=btns[ran];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
}

function btnFlash(btn){
    btn.classList.add('white');
    setTimeout(function (){
        btn.classList.remove('white');
    },100);
}

function userFlash(btn){
    btn.classList.add('yellow');
    setTimeout(function (){
        btn.classList.remove('yellow');
    },100);
}

function btnPress(){
    let color=this.getAttribute("id");
    userSeq.push(color);
    userFlash(this);
    check1(userSeq.length-1);
}

let btnSet=document.querySelectorAll('.btn');
for(let btn of btnSet){
    btn.addEventListener("click",btnPress);
    // btn.addEventListener("click",check);
}

function check1(x){
    if(gameSeq[x]==userSeq[x]){ //latest pressed color
        if(gameSeq.length==userSeq.length){ //last color pressed in the game sequence
            setTimeout(levelUp,800);
        }
    }
    else{
        h4.innerHTML="GAME OVER!!  <b>Your Score : ${level}</b>  Press any key to Restart";
        started=false;
    }
}

// -----------------Another Logic to compare the color sequence and levelup------------------
// function check(){
//     if(gameSeq[flag]==userSeq[flag]){
//         flag++;
//         console.log(flag);
//     }
//     else{
//         h4.innerText="GAME OVER!! Press any key to Restart";
//         started=false;
//     }
//     if(flag==level){
//         flag=0;
//         setTimeout(levelUp,800);   
//     }
// }




    

