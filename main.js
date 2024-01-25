const {gets,print} = require('./funcoesauxiliares');

const quantAlunos = gets();

let maiorValor = 0;

for (let i = 0; i < quantAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado> maiorValor){
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);