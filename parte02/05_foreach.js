const idades = [28, 33, 19, 23];
let mediaIdade = 0;

idades.forEach(idade =>{
    mediaIdade += idade;    
})

console.log(`Media das idades: ${(mediaIdade/idades.length)}`);