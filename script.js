// [a-z] Intervalos
// \s - \S Espaços
// \d - \D Digito
// ^ dentro dos colchetes [^] nega qualquer ocorrência daquilo
// . é qualquer caractere
// test - devolve true ou false
// match extrai o texto
// /.../g não para a primeira ocorrência

// Valide os campos do site utilizando uma regex, por exemplo:
// let regex = /\d{3}/
// let numero = "342"
// console.log(regex.test(numero)) //true

let regex = /\d{8}/
let email = /\w+@\w+\.\w{2,3}/
let cep = /\d{5}-?\d{3}/
let celular = /\(?\d{2}\)?\s?\d{4,5}-?\d{4}/
let apenasNumeros = /^\d+$/
let nome = /^[A-Za-zÀ-ú\s]+$/

function validarCampo(regex, campo) {
    let entrada = document.getElementById(campo)
    let valor = entrada.value
}

function validarCEP() {
    validarCampo(cep, "rua")
}