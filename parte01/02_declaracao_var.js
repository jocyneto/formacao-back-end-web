/*Boa pratica declarar o 'tipo' da variavel
- o tipo var pode ser declarado em qualquer lugar, pois o javascript lê todo o programa e pega primeiro a var
- Por ser muito solto, não é muito mais utilizado

Veja exemplo a seguir:
*/

var altura = 10;
var comprimento = 6;

area = altura * comprimento;
console.log(area);
var area;


/**
 * Uso do let:
 * 
 * - Precisa ser declarada antes de ser usada
 * - É flexivel
 */
let forma = 'quadrado'
let altura_let = 3;
let comprimento_let = 3;
let area_let;

if(forma == 'quadrado'){
    area_let = altura_let * comprimento_let;
}else {
    area_let = altura_let * comprimento_let / 2;
}

console.log(`${area_let} m2 -> é um ${forma}`)

/**
 * Usando a const:
 * 
 * - É uma constante, ou seja, uma vez declarada sempre será aquele valor.
 */

const forma_const = 'QUADRADO';
const altura_const = 5;
const comprimento_const = 5;
let area_const;

if(forma_const.toLocaleLowerCase() == 'quadrado'){
    area_const = altura_const * comprimento_const;
}else {
    area_const = altura_const * comprimento_const / 2;
}


console.log(`${area_const} m2 -> é um ${forma_const.toLocaleLowerCase()}`) 
