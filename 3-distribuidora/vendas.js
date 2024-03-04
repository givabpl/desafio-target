async function fetchData() {
    //console.log("aaaaaaa");
    const res = await fetch('dados.json');
    const dados = await res.json();
    aguardarDados(dados);
}

const aguardarDados = (dados) => {
    const total = document.getElementById('totalVendido');
    const menorValor = document.getElementById('menorValor');
    const maiorValor = document.getElementById('maiorValor');
    const diasAcimaMedia = document.getElementById('diasAcimaMedia');

    let numeros = dados.map((element) => element.valor);
    let maior = Math.max(...numeros);
    let numerosPositivos = numeros.filter((numero) => numero > 0);
    let menor = Math.min(...numerosPositivos);
    let soma = numeros.reduce((total, numero) => total + numero, 0);
    let media = soma / 30;

    let maiorMedia = numeros.filter((numero) => numero > media);
    let formatoBRL = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    maior = formatoBRL.format(maior);
    menor = formatoBRL.format(menor);
    soma = formatoBRL.format(soma);
    media = formatoBRL.format(media);
    maiorMedia = maiorMedia.map((numero) => formatoBRL.format(numero),);

    total.lastChild.textContent = soma;
    maiorValor.lastChild.textContent = maior;
    menorValor.lastChild.textContent = menor;
    diasAcimaMedia.children[0].textContent = maiorMedia.length;
}