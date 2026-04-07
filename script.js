let mercadoria = {};
let endereco = {};
let vinculo = {};

// LOGIN -- tela incial de apresentação
function login() {
  let senha = document.getElementById("senha").value;

  if (senha === "12345678") {
    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "block";
  } else {
    alert("Senha incorreta!");
  }
}

// CADASTRO MERCADORIA
function cadastrarMercadoria() {
  mercadoria = {
    nome: document.getElementById("nome").value,
    codigo: document.getElementById("codigo").value,
    peso: document.getElementById("peso").value,
    tipo: document.getElementById("tipo").value,
    descricao: document.getElementById("descricao").value
  };

  alert("Mercadoria cadastrada!");
}

// CADASTRO ENDEREÇO
function cadastrarEndereco() {
  endereco = {
    logradouro: document.getElementById("logradouro").value,
    complemento: document.getElementById("complemento").value,
    numero: document.getElementById("numero").value,
    cep: document.getElementById("cep").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value
  };

  alert("Endereço cadastrado!");
}

// VINCULAÇÃO 1:1
function vincular() {
  if (!mercadoria.nome || !endereco.logradouro) {
    alert("Cadastre mercadoria e endereço primeiro!");
    return;
  }

  vinculo = {
    mercadoria,
    endereco
  };

  document.getElementById("resultado").textContent = JSON.stringify(vinculo, null, 2);
}