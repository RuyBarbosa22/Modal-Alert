    
// Script Modal

var modal = document.getElementById("myModal"); // Pega elemento da modal
var btn = document.getElementById("myBtn"); // pega btn que ativa o modal
var span = document.getElementsByClassName("close")[0]; // Pega o btn que fecha a modal

// No caso, quando usuário clicar no btn o modal é exibido, chamariamos a função como um "alert" para exibir o codEmpresa
btn.onclick = function() {
  modal.style.display = "block";
}

// Fecha o modal quando clicar no btn "X"
span.onclick = function() {
  modal.style.display = "none";
}

// Se o usuário clicar em algum lugar fora da modal, ela fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
