/*01) Utilizando o metodo SLICE */
const lista_pessoas = ["João", "Maria", "Jocy", "Bruno", "Israel", "Giulia", "Thiago", "Carol", "Sarah", "Filipe", "Eduardo", "Renato", "Luiz Guilherme", "Gabriel", "James", "Stephen", "Kevin", "Lucia", "Gabriela"]; //19 pessoas no total

const sala1 = lista_pessoas.slice(0, lista_pessoas.length/2); //[0, metada_array[
const sala2 = lista_pessoas.slice(lista_pessoas.length/2); //[metadade_array, ate_fim[
    
console.log(`Lista da sala 01: ${sala1}\n\nLista da Sala 02: ${sala2}`);

/*--------------------------------------------------------------------*/

/*02) Utilizando o metodo SPLICE */
const novas_pessoas = ["Yuri", "Luisa", "Alan", "Fernanda"];
console.log(`\n\n${novas_pessoas}`);

novas_pessoas.splice(1,2,"Rodrigo"); 
// Os dois primeiros paramentros serve aonde você quer modicar a lista do inicio ao fim
// O terceiro argumento passa o que você quer colocar
console.log(`${novas_pessoas}`);

novas_pessoas.splice(2,0,["Alan", "Luisa"]);
// Nesse caso você consegue modficar a partir do segundo paramentro sem precisar remover outro elementro
console.log(`${novas_pessoas}`);

novas_pessoas.splice(3,2,["Alberto"]);
//remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 
console.log(`${novas_pessoas}`);


let frase = "abobora";
let letra = "a"

console.log(frase.split(letra).length-1)