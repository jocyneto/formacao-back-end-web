/**
 * - Operadores ternários são chamados dessa maneira, pois eles realizam três comparações em apenas uma linha, ou seja, ele é uma espécie de abreviação de uma construção de um IF.
 * - Ao invés de usar uma estrutura tradicional de construção de condicional, ele passa a utilizar apenas a estrutura de (VALORES_A_SEREM_COMPARADOS ? RESULTADO_VERDADEIRO : RESULTADO_FALSO)
 * - Sempre tomar cuidado, pois quanto mais complexo, maior dificuldade de leitura do código, lembre-se de sempre ter um código simples e legivel (pense sempre nos seus colegas, futuros colegas e o legado do código) 
 *
 * 
 * EXEMPLO: 
*/

let idade_minima = 18;
let idade_user = 17;

if(idade_user >= idade_minima){
    console.log(`Pode entrar, o usuário é maior de idade, idade do usuário: ${idade_user}`);
}else {
    console.log(`Não pode entrar, usuário menor de idadade, idade do usuário: ${idade_user}`);
}

// Podemos construir a mesma estrutura de cima em uma linha, vejamos:

console.log(idade_user >= idade_minima ? 
    `Pode entrar, o usuário é maior de idade, idade do usuário: ${idade_user}`
    : 
    `Não pode entrar, usuário menor de idadade, idade do usuário: ${idade_user}`);

// OBS: Teve mais de uma linha devido a quebra de linha devido ao tamanho da mensagem de feedback.
