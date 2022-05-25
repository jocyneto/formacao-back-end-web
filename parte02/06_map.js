/*METODO MAP

- É bem parecido com o foreach, porem a unica diferença é que com o metodo map
você consegue passar um retorno para sua função, já no foreach isso não possível.
*/

// SOMA DE NOTAS
const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota !== 10 ? ++nota : nota);
console.log(notasAtualizadas);

//MODIFICANDO STRINGS
const produtos = ['lapis', 'CAneta', 'CaDeRnO', 'BorrachA'];

const produtosAtualizado = produtos.map(produto => produto.toUpperCase());
console.log(produtosAtualizado);