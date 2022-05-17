/**
 * - Comparadores com '==' apenas verificam o valor, INDEPENDENTE do tipo (Não usar)
 * - Por que não usar? 
 *      - Por padrão da boa prática se usa um conversão inplicita, ou seja, manualmente você irá fazer as conversões dos tipos
 * 
 * Exemplo:
*/

let varNum = 123;
let varStr = "123"
console.log(`Os tipos de variaveis são respectivamente: ${typeof varNum} e ${typeof varStr} \n`);

console.log(varNum == varStr ? `É igual! Ou seja, ele NÂO compara o tipo` : `Não é igual! Ou seja, ele COMPARA o tipo`);
console.log(varNum === varStr ? `É igual! Ou seja, ele NÂO compara o tipo` : `Não é igual! Ou seja, ele COMPARA o tipo\n`);

//Isso também serve para as operações de diferença
console.log(varNum != varStr ? `É diferente! Ou seja, ele COMPARA o tipo` : `Não é diferente! Ou seja, ele NÃO compara o tipo`);
console.log(varNum !== varStr ? `É diferente! Ou seja, ele COMPARA o tipo` : `Não é diferente! Ou seja, ele NÃO compara o tipo\n`);


