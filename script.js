// [a-z] Intervalos
// \s - \S Espaços
// \d - \D Digito
// ^ dentro dos colchetes [^] nega qualquer ocorrência daquilo
// . é qualquer caractere
// test - devolve true ou false
// match extrai o texto
// /.../g não para a primeira ocorrência

// ^ e $ garantem que o valor INTEIRO bate com a regex
const email = /^[\w.+-]+@[\w-]+(\.[\w-]+)*\.[a-z]{2,}$/i
const cep = /^\d{5}-\d{3}$/
const celular = /^\(\d{2}\) \d{5}-\d{4}$/
const apenasNumeros = /^\d+$/
const nome = /^[A-Za-zÀ-ÿ\s]+$/

// id do input -> regex + mensagens
const validacoes = {
    cep:    { regex: email,         erro: "E-mail inválido (ex: usuario@dominio.com)", ok: "E-mail válido!" },
    rua:    { regex: cep,           erro: "CEP inválido (use o formato 00000-000)",    ok: "CEP válido!" },
    bairro: { regex: celular,       erro: "Formato esperado: (00) 00000-0000",         ok: "Celular válido!" },
    cidade: { regex: apenasNumeros, erro: "O campo deve conter apenas números inteiros.", ok: "Apenas números detectados!" },
    uf:     { regex: nome,          erro: "Apenas letras e espaços são permitidos.",   ok: "Nome válido!" }
}

function validarCampo(id) {
    const entrada = document.getElementById(id)
    const { regex, erro, ok } = validacoes[id]
    const valor = entrada.value

    // cria o label de mensagem abaixo do campo (só uma vez)
    let mensagem = entrada.parentElement.querySelector(".mensagem")
    if (!mensagem) {
        mensagem = document.createElement("label")
        mensagem.className = "mensagem"
        mensagem.htmlFor = id
        entrada.insertAdjacentElement("afterend", mensagem)
    }

    entrada.classList.remove("valido", "invalido")
    mensagem.classList.remove("erro", "sucesso")

    if (valor === "") {          // campo vazio: volta ao estado neutro
        mensagem.textContent = ""
        entrada.removeAttribute("aria-invalid")
        return
    }

    if (regex.test(valor)) {
        entrada.classList.add("valido")
        mensagem.classList.add("sucesso")
        mensagem.textContent = ok
        entrada.setAttribute("aria-invalid", "false")
    } else {
        entrada.classList.add("invalido")
        mensagem.classList.add("erro")
        mensagem.textContent = erro
        entrada.setAttribute("aria-invalid", "true")
    }
}

for (const id in validacoes) {
    document.getElementById(id).addEventListener("input", () => validarCampo(id))
}
