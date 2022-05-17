// tipos boolean
let verdadeiro = true;
let falso = false;

console.log("Saida 01: ",typeof verdadeiro, typeof falso);


//truly and false
let verd1 = 1 == true;
let fal1 = 0 == false;
let fal2 = "" == false;

console.log("Saida 02: ",verd1, fal1, fal2, );

// null e undefined
/**São similares, porém possuem diferenças quando falamos no seu tipo
 * O null ele é do tipo objeto;
 * O undefined é do tipo undefined.
 */

let varNull = null;
let varUnde;

console.log("Saida 03: ",varNull, varUnde);
console.log("Saida 04: ", typeof varNull, typeof varUnde);
