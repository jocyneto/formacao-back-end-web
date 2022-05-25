const nomes = ["Jocy", "Lucia", "Israel"];
const notas = [10, 8, 6];

let nome_nota = [nomes, notas];
console.log(nome_nota); 

for(let i = 0; i < nome_nota.length; i++){
    for(let j = 0; j< nome_nota[i].length; j++){
        console.log(nome_nota[i][j]);
    }
}