const gameover = new Audio("ring.wav")
let turn ="X"
isgameover=false;
// function to change turn
 const changeturn= ()=>{
        return turn === "X"? "0":"X"
 }

 // fuction to check win

const checkwin= ()=>{
let boxtexts=document.getElementsByClassName('boxtext')
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [0,3,6],
    [2,5,8],
]
wins.forEach(e =>{
    if((boxtexts[e[0]].innerHTML===boxtexts[e[1]].innerHTML)&&(boxtexts[e[2]].innerHTML===boxtexts[e[1]].innerHTML)&&(boxtexts[e[0]].innerHTML!=="")){
        document.querySelector('.info').innerHTML=boxtexts[e[0]].innerHTML + "WON"
        isgameover=true
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="292px";
        gameover.play();
       
    }
    
    })
}

const boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(Element=>{
    let boxtext=Element.querySelector(".boxtext")
    Element.addEventListener('click', ()=>{
        if (boxtext.innerHTML === '' ){
            boxtext.innerHTML = turn;
          turn = changeturn() 
            checkwin(); 
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML="Turn for" + turn;
            }


        }
    })
} 
)
let reset=document.getElementById("reset")
 reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element=>{
        Element.innerText=""
    })
    turn="X";
isgameover=false
document.getElementsByClassName("info")[0].innerHTML="Turn for" + turn;
document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px"
})