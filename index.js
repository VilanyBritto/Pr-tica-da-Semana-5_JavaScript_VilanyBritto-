const prompt = require('prompt-sync')();
var array_sapato = [];
var codigo = 0;

do {
  console.log("Sistema de Cadastro de Produto 'Sapato' ");
  console.log("1 - Inserir Produto 'Sapato' ");
  console.log("2 - Excluir Produto 'Sapato' ");
  console.log("3 - Listar Produto 'Sapato' ");
  console.log("4 - Atualizar Produto 'Sapato' ");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo produto: Sapato...\n");
    //let codigo = parseInt(prompt("Digite o código: "));
    codigo++
    let modelo = prompt("Digite o modelo Masculino ou Feminino: ");
    let cor = prompt("Digite a cor: ");
    let tamanho = prompt("Digite o tamanho: ");
    let marca = prompt("Digite a marca: ");

    // Neste trecho estamos declarando um objeto
    const sapato = {
      codigo: codigo,
      modelo: modelo,
      cor: cor,
      tamanho: tamanho,
      marca: marca
    }
    // Chamar a função inserir
    inserir_sapato(sapato);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo item...\n");
    let codigo = prompt("Digite o código do produto Sapato: ");
    // Chamar a função excluir
    excluir_sapato(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando produto(s): 'Sapato'...\n");
    // Chamar a função listar
    listar_sapato();
  } else if (opcao == 4) {
    console.log("\n\nAtualizando Cadastro do Produto 'Sapato'...\n");
    let codigo = prompt("Digite o código do Produto 'Sapato': ");
    // Chamar a função atualizar
    atualizar_sapato(codigo);
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_sapato(sapato) {
  // Implementar corpo da função
  array_sapato.push(sapato);
}

function excluir_sapato(codigo) {
  // Implementar corpo da função
  let result = false;
  for(let i=0;i < array_sapato.length;i++) {
    if (array_sapato[i]['codigo'] == codigo) {
      array_sapato.splice(i, 1);
      result = true;
    }
  }
  check_result(result, codigo, "delete");
}

function listar_sapato() {
  // Implementar corpo da função
  for(let i=0;i < array_sapato.length;i++) {
    console.log(`${array_sapato[i]['codigo']}: ${array_sapato[i]['modelo']} - ${array_sapato[i]['cor']} - ${array_sapato[i]['tamanho']} - ${array_sapato[i]['marca']}`);
  }
  
}

function atualizar_sapato(codigo) {
  let result = false;
  let modelo = prompt("Digite o modelo Masculino ou Feminino: ");
  let cor = prompt("Digite a cor: ");
  let tamanho = prompt("Digite o tamanho: ");
  let marca = prompt("Digite a marca: ");
  for(let i=0;i < array_sapato.length;i++) {
    if (array_sapato[i]['codigo'] == codigo) {
      array_sapato[i]['modelo'] = modelo;
      array_sapato[i]['cor'] = cor;
      array_sapato[i]['tamanho'] = tamanho;
      array_sapato[i]['marca'] = marca;
      array_sapato = array_sapato;
      result = true;
    }
  }
  check_result(result, codigo, "update");
}

function check_result(result, codigo, type) {
  if (!result) {
    console.log(`Registro ${codigo} não localizado em nossa base.`);
  } else {
    console.log(`Registro ${codigo} ${type === "delete"? 'deletado' : 'atualizado'} com sucesso.`);
  }
}
