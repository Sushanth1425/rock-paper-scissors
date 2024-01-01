let score=JSON.parse(localStorage.getItem('score')) ||  { win: 0, lose: 0, tie: 0 }; ;

let compMove=Math.random();


function liveScore(){
  document.querySelector('.js-score').innerHTML= ` Wins:${score.win} Loses: ${score.lose} Ties: ${score.tie}  `;
  document.querySelector('.js-gameResults-1').innerHTML= res ; 
  console.log(userMove);
  document.querySelector('.js-gameResults-2').innerHTML= `You <img style="height: 50px; " src="rock paper scissors imgs/${userMove}-emoji.png" alt="${userMove}" >  <img style="height: 50px; " src="rock paper scissors imgs/${compMove}-emoji.png" alt="${compMove}" > Computer` ;
}

document.querySelector('.js-score').innerHTML= ` Wins:${score.win} Loses: ${score.lose} Ties: ${score.tie}  `;

function play(){
  compMove=Math.random();
  check();
}

function check(){
  if (compMove>=0 && compMove <1/3){
    compMove='rock';
  }
  else if(compMove>=1/3 && compMove<2/3){
    compMove='paper';
  }
  else{
    compMove= 'scissors';
  }
}

let res='';

function tie(userMove,compMove){
  score.tie+=1;
  res='Its a Tie';
  updateScore();
}

function win(userMove,compMove){
  score.win+=1;
  res='You Win';
  updateScore();
}

function lose(userMove,compMove){
  score.lose+=1;
  res='You Lose';
  updateScore();
}

function result(userMove,compMove){
  
  if(compMove==='rock'){
    if (userMove==='scissors'){
      lose(userMove,compMove);
    }
    else if (userMove==='paper'){
      win(userMove,compMove);
    }
    else{
      tie(userMove,compMove);
    }
  }

  else if(compMove==='paper'){
    if (userMove==='scissors'){
      win(userMove,compMove);
    }
    else if (userMove==='rock'){
      lose(userMove,compMove);
    }
    else{
      tie(userMove,compMove);
    }
  }

  else if(compMove==='scissors'){
    if (userMove==='rock'){
      win(userMove,compMove);
    }
    else if (userMove==='paper'){
      lose(userMove,compMove);
    }
    else{
      tie(userMove,compMove);
    }
  }
}

function resetScore(){
  localStorage.removeItem('score');
  score.win=0;
  score.lose=0;
  score.tie=0;
  updateScore();
  document.querySelector('.js-gameResults-1').innerHTML=' ';
  document.querySelector('.js-gameResults-2').innerHTML=' ';
}

function updateScore(){
  localStorage.setItem('score', JSON.stringify(score));
}