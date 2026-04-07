let mercadoria = {};
let endereco = {};
let vinculo = {};

// LOGIN -- tela inicial de apresentação
function login() {
  let senha = document.getElementById("senha").value;

  if (senha === "12345678") {
    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "block";
  } else {
    alert("Senha incorreta!");
  }
}

// CADASTRO MERCADORIA -- tela inicial de mercadoria
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
// Arrays para armazenar mercadorias e endereços
let mercadorias = JSON.parse(localStorage.getItem("mercadorias")) || [];
let enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];

// Função para salvar no LocalStorage
function salvarJSON() {
    localStorage.setItem("mercadorias", JSON.stringify(mercadorias));
    localStorage.setItem("enderecos", JSON.stringify(enderecos));
}

// Cadastro de mercadoria
function cadastrarMercadoria(nome, quantidade, peso, preco, categoria) {
    let produto = { nome, quantidade, peso, preco, categoria };
    mercadorias.push(produto);
    salvarJSON();
    alert("Mercadoria cadastrada!");
}

// Cadastro de endereço
function cadastrarEndereco(logradouro, complemento, numero, cep, cidade, estado) {
    let endereco = { logradouro, complemento, numero, cep, cidade, estado };
    enderecos.push(endereco);
    salvarJSON();
    alert("Endereço cadastrado!");
}

// Vinculação 1:1 entre mercadoria e endereço
function vincularProdutoEndereco(produtoIndex, enderecoIndex) {
    if (!mercadorias[produtoIndex].endereco && !enderecos[enderecoIndex].produto) {
        mercadorias[produtoIndex].endereco = enderecos[enderecoIndex];
        enderecos[enderecoIndex].produto = mercadorias[produtoIndex];
        salvarJSON();
        alert("Vinculação realizada com sucesso!");
    } else {
        alert("Erro: Mercadoria ou endereço já estão vinculados!");
    }
}

// Exemplo de listagem (para testar)
function listarMercadorias() {
    console.log("Mercadorias:", mercadorias);
}

function listarEnderecos() {
    console.log("Endereços:", enderecos);
}