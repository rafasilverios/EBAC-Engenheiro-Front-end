document.addEventListener('DOMContentLoaded', function () {
    const avatarUsuario = document.querySelector('#avatar');
    const nomePerfil = document.querySelector('#name');
    const nomeUsuario = document.querySelector('#username');
    const repositoriosUsuario = document.querySelector('#repositorio');
    const seguidoresUsuario = document.querySelector('#seguidores');
    const usuarioSeguindo = document.querySelector('#seguindo');
    const linkConta = document.querySelector('#link');

    fetch('https://api.github.com/users/rafasilverios')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            avatarUsuario.src = json.avatar_url;
            nomePerfil.innerText = json.name;
            nomeUsuario.innerText = json.login;
            repositoriosUsuario.innerText = json.public_repos;
            seguidoresUsuario.innerText = json.followers;
            usuarioSeguindo.innerText = json.following;
            linkConta.href = json.html_url;
        })    
})