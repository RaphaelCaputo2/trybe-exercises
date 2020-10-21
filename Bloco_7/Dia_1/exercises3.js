let alerta = document.querySelector('.alerta');
let count = 0;
document
  .getElementById('exercicio')
  .addEventListener('click', () => (alerta.innerHTML = count += 1));
