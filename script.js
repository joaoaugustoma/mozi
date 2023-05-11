const form = document.getElementById('myForm');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementsByClassName('close')[0];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  modal.style.display = 'block';

  const inputValue = document.getElementById("number").value;
  if(inputValue <= 5){
    modal.querySelector('p').textContent = `Só ${inputValue}??? Se seu namorado descobrir isso ele vai chorar MUITO, mas MUITO MESMO :( Favor inserir um valor decente`;
  } else if(inputValue >= 999) {
    modal.querySelector('p').textContent = `Boa tentativa, mas o amor do seu namorado por você, cujo valor beira o infinito, ainda é maior!`;
  } else if (inputValue >= 50) {
    modal.querySelector('p').textContent = `Até que você ama bastantinho, mas seu namorado com certeza ainda ama BEM mais!`;
  } else {
    modal.querySelector('p').textContent = `Seu namorado DEFINITIVAMENTE te ama mais.`;
  }
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});