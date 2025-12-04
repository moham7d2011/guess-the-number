let number = '';

let limit = Number(document.getElementById('limit').textContent);

console.log(limit);

function guess(){
  let random = Math.ceil(Math.random() * limit);
  number = Number(document.getElementById('input').value);
  if (random==number) {
    document.getElementById('result').innerText= `Win! you have choiced ${number} , and Computer has choiced ${random}, congratulation.`
  }
  else if (random!=number) {
    document.getElementById('result').innerText= `you have losed computer has choiced ${random}, let's try again`
  }
  
}
function plus() {
  limit++;
  document.getElementById('limit').innerText= limit ;
  if (limit >= 15) {
  document.getElementById('difficult').innerText = 'hard';
  document.getElementById('difficult').style.color = "#5c0001";
}
else if (5 < limit ) {
  document.getElementById('difficult').innerText = 'normal';
  document.getElementById('difficult').style.color = "#eb5758";
}
}
function minus(){
  if (limit > 2) {
    limit-- ;
  }
  document.getElementById('limit').innerText= limit ;
  if (limit <= 5) {
  document.getElementById('difficult').innerText = 'easy';
  document.getElementById('difficult').style.color= "#23c26f";
}

else if (limit < 15 && limit > 5) {
document.getElementById('difficult').innerText = 'normal';
document.getElementById('difficult').style.color = "#eb5758";
}


}