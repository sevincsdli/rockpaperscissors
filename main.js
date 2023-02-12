let userChoice=document.getElementById('userChoice');
let computerChoice=document.getElementById('computerChoice');
let result=document.getElementById('result');
let possibleChoices=document.querySelectorAll('button');

let choiceId;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
choiceId=e.target.id;
userChoice.textContent=choiceId;
computerChoiceFun();
Getresult();
}));

function computerChoiceFun(){
var randomChoice=Math.floor(Math.random()*possibleChoices.length);

if(randomChoice==0){
    computerChoice.textContent='Rock';
}
 if(randomChoice==1){
    computerChoice.textContent='Paper';
}
 if (randomChoice==2){
    computerChoice.textContent='Scissors';
}
};

function Getresult(){
    if(computerChoice.textContent==userChoice.textContent){
        result.textContent='it is draw';

    }
   else if(computerChoice.textContent=='Scissors'&& userChoice.textContent=='Rock'){
      result.textContent='User win!';
    }
  else  if(computerChoice.textContent=='Scissors'&& userChoice.textContent=='Paper'){
        result.textContent='Computer win!';
      }
     else if(computerChoice.textContent=='Paper'&& userChoice.textContent=='Scissors'){
        result.textContent='User win!';
      }
    //   if(computerChoice=='Scissors'&& userChoice=='Paper'){
    //     result.textContent='Computer win!';
    //   }
    //   if(computerChoice=='Scissors'&& userChoice=='Paper'){
    //     result.textContent='Computer win!';
    //   }
    //   if(computerChoice=='Scissors'&& userChoice=='Paper'){
    //     result.textContent='Computer win!';
    //   }
}
//bunu switchle de yoxlamaq olar

