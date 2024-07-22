function criptografarTexto(texto) {
    let textoCriptografado = texto.replace(/e/g, 'enter');
    textoCriptografado = textoCriptografado.replace(/i/g, 'imes');
    textoCriptografado = textoCriptografado.replace(/a/g, 'ai');
    textoCriptografado = textoCriptografado.replace(/o/g, 'ober');
    textoCriptografado = textoCriptografado.replace(/u/g, 'ufat');
    return textoCriptografado;
}


const botaoCriptografar = document.querySelector('.criptografar');


botaoCriptografar.addEventListener('click', () => {

    const textarea = document.getElementById('textareaFn');
    const textoCriptografado = criptografarTexto(textarea.value);
    const saida = document.getElementById('saida');
    saida.textContent = textoCriptografado;


    const imagem = document.getElementById('imagem');
    const frase = document.getElementById('frase');
    imagem.classList.add('esconder');
    frase.classList.add('esconder');
});


function descriptografarTexto(texto) {
    let textoDescriptografado = texto.replace(/enter/g, 'e');
    textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
    textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
    textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');
    return textoDescriptografado;
}


const botaoDescriptografar = document.querySelector('.descriptografar');


botaoDescriptografar.addEventListener('click', () => {
    const textarea = document.getElementById('textareaFn');
    const textoDescriptografado = descriptografarTexto(textarea.value);
    const saida = document.getElementById('saida');
    saida.textContent = textoDescriptografado;
});

const botaoCopiar = document.getElementById('botaoCopiar');

botaoCopiar.addEventListener('click', () => {
    const saida = document.getElementById('saida');
    const textoCriptografado = saida.textContent;
    copiarTextoParaAreaDeTransferencia(textoCriptografado);
});

function copiarTextoParaAreaDeTransferencia(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch((error) => {
        console.error('Erro ao copiar texto para a área de transferência:', error);
    });
}