let button=document.getElementsByTagName('button')[0]
let input=document.getElementsByTagName('input')[0]
let sBox=document.querySelector('.over')
let scoreBoard=document.querySelector('.score-board span')
let revealer=document.querySelector('.revealer')


let ans= Math.floor(Math.random() * (100 - 1) +1);
console.log(ans);
let score=100;
function handleClick()
{
   let val=+input.value;
   if(val>100 || val<1){
     sBox.innerText="Enter valid number";
   }
   else if(val === ans){
    sBox.textContent="You won the game";
   }else{
       if(val>ans)sBox.innerText="Enter small number";
       else sBox.innerText="Enter large number";
       score-=2;
   }

   scoreBoard.innerText=score;
   if(score==0)
   {
    sBox.innerText="Game Over";
   }
   if(score===0 || val=== ans){
    revealer.innerText=ans;
    input.disabled =true;
    button.disabled=true;
   }
}


button.addEventListener('click',handleClick)


