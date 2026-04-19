// ===============================
// INTRODUÇÃO AO JAVASCRIPT
// ===============================

// Console (mensagem no console)
console.log("JavaScript conectado com sucesso!");

// Alert (mensagem na tela)
alert("Bem-vindo ao site da Agência Criativa!");

// Prompt (entrada do usuário)
let nomeUsuario = prompt("Qual é o seu nome?");

// Mostrando no console
console.log("Nome digitado:", nomeUsuario);

// ===============================
// USANDO VARIÁVEIS
// ===============================

let mensagem = "Olá, " + nomeUsuario + "! Bem-vindo ao nosso site!";
alert(mensagem);

// ===============================
// MANIPULANDO O DOM
// ===============================

// Selecionar título principal
let titulo = document.querySelector(".hero h2");

// Alterar texto com base no usuário
titulo.innerText = mensagem;

//Alterar o estilo com JavaScript
document.body.style.background = "red";

//1. getElementById
let botao = document.getElementById("chat-toggle");
console.log("Botão do chat:", botao);

// alterar cor
botao.style.background = "red";

// 2. getElementsByClassName
let listaServicos = document.getElementsByClassName("servico");
console.log("Lista de serviços:", listaServicos);

// acessar primeiro item
listaServicos[0].style.background = "#dfefff";

// 3. getElementsByTagName
let titulos = document.getElementsByTagName("h3");
console.log("Todos os títulos h3:", titulos);

// alterar texto do primeiro
titulos[0].innerText = "Serviço Alterado com JS";

// 4. querySelector específico
let tituloServico = document.querySelector(".servico h3");
console.log("Título do serviço:", tituloServico);

// alterar cor do texto
tituloServico.style.color = "green";
