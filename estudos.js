const alunos = ['joao', 'marina','lia'
]
console.log(alunos);
console.log(alunos[0]);

alunos.push('renan');
alunos[4] = 'amanda';

alunos.pop(); //tira o ultimosta da lista

alunos.shift(); // tira o primeiro da lista 

const notas = [5,6,10,9,4,6,4];
console.log(notas.length);

let soma =0;
for (let indice = 0; indice < notas.length; indice++) {
    const notaParcial = notas[indice];
    soma = soma + notaParcial;
    
}

const media = soma/notas.length;
console.log(media);

const nome = "andressa simoes medeiros pacheco"
for (let i = 0; i <= notas.length; i++) {
    const letra = nome[i];
    console.log(letra);
}



    const lista = [23,56,4,3,9,12];
    for (let i = 0; i < lista.length; i++) {
        let num = lista[i];
        if(num%2===0){
            console.log(num);
        }
        
    };

    console.log("--------------------------------");
    const tabuada = [1,2,3,4,5,6,7,8,9,10];
    const num = 5;
     for (let i = 1; i < 11; i++) {
     const total = num * tabuada[i];
     console.log(total);  
    }

  