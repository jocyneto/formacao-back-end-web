// Existem três formas de se criar uma função/metodo no Javascript:

/*
Nas três formas há uma diferença que é no que chamamos de hoisting, ou seja, a ordem de execução que o Javascript interpreta o código isso faz que a forma clássica de declaração seja lida na varredura inicial do código, ou seja, se ela for declarada no inicio, meio ou fim, tanto faz, pois ela será varrida ao depurar o código.

Já na forma da EXPRESSION e ARROW-FUNCTION ela precisa ser declarada antes do seu uso no trecho de código.

---------------------------------------------------------------------------------------------------
HOISTING:
Conceitualmente, por exemplo, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código.
---------------------------------------------------------------------------------------------------

*/
//1 CLASSICA

function podeEntrar(idade_pessoa){
    const idade_minima = 18;
    return idade_pessoa >= idade_minima ? "Pode entrar" : "Não pode entrar";
}

function soma(num1, num2){
    return num1 + num2;
}

console.log(`Saida 01: ${podeEntrar(19)}`);
console.log(`Saida 02: ${soma(2, 2)}\n`);


//2 EXPRESSION FUNCTION
const func1 = function(idade_pessoa){
    const idade_minima = 18;
    return idade_pessoa >= idade_minima ? "Pode entrar" : "Não pode entrar";
}

const func2 = function(num1, num2){
    return num1 + num2;
}

console.log(`Saida 03: ${func1(15)}`);

console.log(`Saida 04: ${func2(10,2)}\n`);


//3 ARROW FUNCTION
const arrowfunc1 = idade_pessoa => {
    const idade_minima = 18;
    return idade_pessoa >= idade_minima ? "Pode entrar" : "Não pode entrar";
} 

const arrowfunc2 = (num1, num2) => num1 + num2

console.log(`Saida 05: ${arrowfunc1(22)}`);
console.log(`Saida 06: ${arrowfunc2(3,5)}`);