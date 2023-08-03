$(document).ready(function() {
    const avatarUsuario = $('#avatar');
    const nomePerfil = $('#name');
    const nomeUsuario = $('#username');
    const repositoriosUsuario = $('#repositorio');
    const seguidoresUsuario = $('#seguidores');
    const usuarioSeguindo = $('#seguindo');
    const linkConta = $('#link');

    const endpoint = 'https://api.github.com/users/rafasilverios';

    $.ajax(endpoint).done(function(resposta) {
        avatarUsuario.attr('src', resposta.avatar_url);
        nomePerfil.text(resposta.name);
        nomeUsuario.text(resposta.login);
        repositoriosUsuario.text(resposta.public_repos);
        seguidoresUsuario.text(resposta.followers);
        usuarioSeguindo.text(resposta.following);
        linkConta.attr('href', resposta.html_url);
      })
      .fail(function(erro) {
        alert("Ocorreu um erro ao buscar o perfil do usuário");
      });
  });