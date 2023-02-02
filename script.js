function contar() {
    var n1 = document.querySelector('input#inicio');
    var n2 = document.querySelector('input#fim');
    var n3 = document.querySelector('input#passo');
    var resultado = document.querySelector('div#resultado');
    if (n1.value == '' || n2.value == '' || n3.value == '') {
        window.alert('Erro!');
    } else {
        var i = Number(n1.value);
        var f = Number(n2.value);
        var p = Number(n3.value);
        if (p <= 0) {
            window.alert('Passo INVÁLIDO! Considerando passo 1.');
            p = 1;
        }
        if (i < f) {
            //Crescente
            for (c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        } else { 
            //Decrescente
            for (c = 1; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        //Emoji final
        resultado.innerHTML += `\u{1F3C1}`;
    }
}