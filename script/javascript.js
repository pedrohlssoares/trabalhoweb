const form = document.getElementById('formulario');
const msg = document.getElementById('msg');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const assunto = document.getElementById('assunto');
const mensagem = document.getElementById('mensagem');
 
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Verifica se a pessoa deixou o input vazio. 
    if (nome.value.trim() === '' || email.value.trim() === '' || assunto.value.trim() === '' || mensagem.value.trim() === '') {
    msg.innerHTML = 'Por favor, preencha todos os campos.';
    msg.style.color = 'red';
     setTimeout(() => {
      msg.innerHTML = '';
    }, 5000);
    return; // Se ele deixou vazio mostrará isso.
    }
    
    // Se ele não deixou vazio, aparecerá isso: 
    msg.innerHTML = 'Formulário enviado com sucesso!';
    msg.style.color = '#212529';

    setTimeout(() => {
    msg.innerHTML = ''
    ;
  }, 5000);
})