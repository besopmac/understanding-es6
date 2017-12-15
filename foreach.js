var nomes = ['Maria', 'José', 'João'];
var canais = ['Globo', 'SBT', 'Record'];

// Iterando com ES5.1
// for (var i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }


// Iterando com ES6
// 1. Função Anonima (callback)
nomes.forEach(function(nome) {
    console.log(nome);
});

// 2. Definindo uma Função
function mostrarCanais(canais) {
    console.log(canais);
}
canais.forEach(mostrarCanais);


/*
    OBS.: Elementos processados pelo forEach são determinados na primeira invocação.
    Sendo assim, elementos adicionados depois da chamada não serão exibidos
*/