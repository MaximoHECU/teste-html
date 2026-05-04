//1.1
function inverterString(frase){
    const inverso = frase.split("").reverse().join("");

    console.log("O inverso da frase é " + inverso);
}

//1.2
function contarVogais(frase){
    const fraseMin = frase.toLowerCase("").split("");
    var qtd = 0;

    for(i = 0; i < fraseMin.length; i++){
        if (fraseMin[i] == "a" || fraseMin[i] == "e" || fraseMin[i] == "i" || fraseMin[i] == "o" || fraseMin[i] == "u"){
            qtd += 1; 
        }
    }

    console.log("Quantidade de vogais: " + qtd);
}

//1.3
function ehPalindromo(frase){
    frase = frase.toLowerCase("");
    const inverso = frase.split("").reverse().join("");

    if (frase == inverso){
        return true;
    } else {
        return false
    }
}

//1.4
function capitalizarPalavras(frase){
    var palavras = frase.split(" ");

    for(i = 0; i < palavras.length; i++){
        let p = palavras[i];

        if (p.length > 0){
            palavras[i] = p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
        }
    }

    return palavras.join(" ");
}

//2.1
let aluno = criarAluno("Maria", 20, "Sistemas");

function criarAluno(nome, idade, curso){
    
    return {
        nome: nome,
        idade: idade,
        curso: curso
    };
}

//2.2
function calcularIMC(nome, peso, altura){
    var IMC = peso/(altura * altura);
    var classificaçao;
    
    if(IMC < 18.5){
        classificaçao = "Abaixo do peso"
    }else if(IMC < 25){
        classificaçao = "Peso normal"
    }else if(IMC < 30){
        classificaçao = "Sobrepeso"
    }else{
        classificaçao = "Obesidade"
    }
    return {
        nome: nome,
        IMC: IMC,
        classificaçao: classificaçao
    };
}

//2.3
let contatos = [
    {nome: "Ana", telefone: "1111-1111"},
    {nome: "Bruno", telefone: "2222-2222"},
    {nome: "Carlos", telefone: "3333-3333"}
]

function buscarContato(contatos, nome){
    var cEncontrado = null;

    for(i = 0; i < buscarContatos.length; i++){
        if (contatos[i].nome == nome){
            cEncontrado = contatos[i];
            break;
        }
    }

    return cEncontrado;
}

//3.1
function diaDaSemana(dia){
    var d = "";

    switch(dia){
        case 1:
            d = "Domingo"
            break;
        case 2:
            d = "Segunda-Feira"
            break;
        case 3:
            d = "Terça-Feira"
            break;
        case 4:
            d = "Quarta-Feira"
            break;
        case 5:
            d = "Quinta-Feira"
            break;
        case 6:
            d = "Sexta-Feira"
            break;
        case 7:
            d = "Sábado"
            break;
        default:
            d = "Dia Inválido"
    }

    return d;
}

//3.2
function calculadora(num1, num2, operador){
    var resultado = null;

    switch(operador){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = "Erro: divisão por zero";

            if(num2 != 0){
                resultado = num1 / num2;
                valido = null;
            }
            break;
        default:
            resultado = "Operação inválida"
    }

    return resultado;
}

//3.3
function verificarAprovacao(nota){
    var status = nota >= 60 ? "Aprovado" : "Reprovado";

    return status;
}

//4.1
const realParaDolar = (real, cotacao) => {
    return real/cotacao;
};

//4.2
const gerarMensagem = (nome, idade, cidade) => {
    return `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
}

//5.1
function dobrarValores(numeros){
    return numeros.map(numero => numero * 2);
}

//5.2
let pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 15 },
    { nome: "Carlos", idade: 30 },
    { nome: "Diana", idade: 17 }
];

function filtrarMaiores(pessoas){
    return pessoas.filter(p => p.idade >= 18)
}

//5.3
let produtos = [
    { id: 1, nome: "Camiseta", preco: 49.90 },
    { id: 2, nome: "Calça", preco: 89.90 },
    { id: 3, nome: "Tênis", preco: 199.90 }
];

function buscarProduto(produtos, id){
    return produtos.find(p => p.id == id);
}

//6.1
function validarSenha(senha){
    const temOitoCaracteres = senha.length > 7;
    const temMaiscula = /[A-Z]/.test(senha);
    const temMiniscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    var valida = temOitoCaracteres && temMaiscula && temMiniscula && temNumero;

    return {
        valida: valida,
        caracteristicas: {
            comprimentoMinimo: temOitoCaracteres,
            possuiMaiuscula: temMaiscula,
            possuiMinuscula: temMiniscula,
            possuiNumero: temNumero
        }
    }
}

//6.2
function cifrarCesar(texto, deslocamento) {
  var resultado = "";
  const ajuste = deslocamento % 26;

  for (i = 0; i < texto.length; i++) {
    var char = texto[i];
    var codigo = texto.charCodeAt(i);

    if (codigo >= 97 && codigo <= 122) {
      var novoCodigo = codigo + ajuste;

      if (novoCodigo > 122) {
        novoCodigo -= 26;
      } else if (novoCodigo < 97) {
        novoCodigo += 26;
      }
      resultado += String.fromCharCode(novoCodigo);
    } else {
      resultado += char;
    }
  }

  return resultado;
}

//6.3
let alunos = [
    { nome: "Ana", nota: 7.5 },
    { nome: "Bruno", nota: 9.0 },
    { nome: "Carlos", nota: 6.0 },
    { nome: "Diana", nota: 8.5 }
];

function ordernarPorNota(alunos){
    return alunos.sort((a, b) => {
        return b.nota - a.nota;
    });
}

//6.4
function removerDuplicadosSet(array){
    return [...new Set(array)]
}

function removerDuplicadosFilter(array){
    return array.filter((elemento, indice, self) => {
        return self.indexOf(elemento) === indice;
    });
}

//6.5
let turma = [
    { nome: "Ana", nota: 85 },
    { nome: "Bruno", nota: 42 },
    { nome: "Carlos", nota: 70 },
    { nome: "Diana", nota: 95 },
    { nome: "Eduardo", nota: 55 }
];

function relatorioTurma(alunos){
    var somaNotas = 0;
    var mediaTurma = 0;
    var melhorAluno = alunos[0];
    var piorAluno = alunos[0];
    var qtdAprovados = 0;

    for(i = 0; i < alunos.length; i++){
        const aluno = alunos[i];

        somaNotas += aluno.nota;

        if(aluno.nota > melhorAluno.nota){
            melhorAluno = aluno;
        }

        if(aluno.nota < piorAluno.nota){
            piorAluno = aluno;
        }

        if(aluno.nota >= 60){
            qtdAprovados += 1;
        }
    }

    mediaTurma= somaNotas/alunos.length

    return {
        mediaTurma: mediaTurma.toFixed(2),
        melhorAluno: melhorAluno,
        piorAluno: piorAluno,
        qtdAprovados: qtdAprovados
    }
}