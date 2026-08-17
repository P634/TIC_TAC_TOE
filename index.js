let box=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset_btn");
let newGameBtn=document.querySelector("#new_game_btn");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");

let turnO=true;//player x,player 0

const win_pattern=[[0,1,2],
                   [3,4,5],
                   [6,7,8],
                   [0,3,6],
                   [1,4,7],
                   [2,5,8],
                   [0,4,8],
                   [6,4,2]
                ];

    box.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("button was clicked");
            if(turnO){
                box.innerText="O";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true; 
            }
            box.disabled=true;
            checkWinner();
        })
    })

     const reset=()=>{
        turnO=true;
        enable_boxes();

    msgContainer.classList.add("hide");
     }
    newGameBtn.addEventListener("click",reset);
     reset_btn.addEventListener("click",reset);
    const disable_boxes=()=>{
        for(let b of box){
            b.disabled=true;
        }
    }
    const enable_boxes=()=>{
        for(let b of box){
            b.disabled=false;
            b.innerText="";
        }
    }
   
    const showWinner=function(pos0val){
   msg.innerText=`Congratulation , winner is ${pos0val}`;
   msgContainer.classList.remove("hide");
   disable_boxes();
    }
    const checkWinner=function(){
for(let pattern of win_pattern){
    let pos0val=box[pattern[0]].innerText;
    let pos1val=box[pattern[1]].innerText;
    let pos2val=box[pattern[2]].innerText;
    if(pos0val !="" && pos1val !="" && pos2val !="" ){
    if(pos0val==pos1val && pos1val==pos2val){
        console.log("winner",pos0val);
    showWinner(pos0val);
    }
    }
}
    }





