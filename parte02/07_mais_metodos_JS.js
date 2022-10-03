//METODO FILTER:

const nomes = ["Ana", "Bruna", "Carlos"];
const idades = [19, 23, 15];

// const permissao = nomes.filter((nome, indice) => idades[indice] >= 18);
// =
const permissao = nomes.filter((_, indice) => idades[indice] >= 18);

console.log(`Podem entrar na festa: ${permissao}`);


//METODO REDUCE:

const notas = [10, 9, 5, 4];

// Obrigatorio a passagem dos paramentros acumulador e atual "acum" e "atual", podendo ser qualquer nome;
// Na parte do código que possui "acum + atual, 0" o '0' significa em qual numeral vai passar e começar a somar os vaolores;
// acum = são os valores que estão sendo calculados;
// atual = valor atual do arrya que está sendo interado.
const media = notas.reduce((acum, atual) => acum + atual, 0);
console.log(media/notas.length);