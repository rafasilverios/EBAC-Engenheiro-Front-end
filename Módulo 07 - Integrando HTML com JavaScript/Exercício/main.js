const form = document.getElementById('form-validacao');
const valorA = document.getElementById('value-a');
const valorB = document.getElementById('value-b');
let formEValido = false;

function validacao(valorA, valorB) {    
    return parseFloat(valorB) > parseFloat(valorA);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O valor <b>${valorB.value}</b> é maior do que o valor <b>${valorA.value}</b>!`;

    formEValido = validacao(valorA.value, valorB.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else {
        valorB.style.border = '1px solid red';

        document.querySelector('.error-message').style.display = 'block';
    }
})

valorB.addEventListener('keyup', function(e) {
    formEValido = validacao(valorA.value, valorB.value);

    if (!formEValido) {
        valorB.classList.add('error');

        document.querySelector('.error-message').style.display = 'block';
    } else {
        valorB.classList.remove('error');

        document.querySelector('.error-message').style.display = 'none';
    }
})
