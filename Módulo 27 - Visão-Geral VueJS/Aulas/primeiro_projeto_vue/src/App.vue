<script setup>
import { reactive } from 'vue';

const nome = 'Rafael';
const meuObj = {
  nome: "Rafael",
  filmeFavorito: "Rocky"
}

function dizOla(nome) {
  return `${nome} diz oi`;
}

const enderecoImagem = "https://i.pinimg.com/550x/d1/a0/68/d1a06896b699ab13d8fda6b26cdb96e5.jpg";
const enderecoImagemSuperman = "https://cdn.pixabay.com/photo/2020/07/11/04/41/superman-5392758_1280.png";

const botaoDesabilitado = true;

const gostaDoBatman = true;
const gostaDoSuperman = true;

const estaAutorizado = true;

// let contador = 0;
const estado = reactive({
  contador: 0,
  email: '',
});

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value
}
</script>

<template>
  <button :disabled="botaoDesabilitado">Enviar Mensagem</button>
  <h1>{{nome}}</h1>
  <h2>{{ meuObj.filmeFavorito }}</h2>
  <h3>{{ dizOla("Batman") }}</h3>
  <img v-if="gostaDoBatman" :src="enderecoImagem" alt="Imagem do Batman">
  <img v-else-if="gostaDoSuperman" :src="enderecoImagemSuperman" alt="">
  <h2 v-else>Não curte heróis da DC</h2>
  <img v-show="gostaDoSuperman" :src="enderecoImagemSuperman" alt="">

  <h3 v-if="estaAutorizado">Bem-Vindo</h3>
  <h3 v-else="">Não foi desta vez</h3>

  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <!-- <input type="email" @keyup="evento => estado.email = evento.target.value"> -->
  <input type="email" @keyup="alteraEmail">
</template>

<style scoped>
img{
  height: 500px;
}
</style>