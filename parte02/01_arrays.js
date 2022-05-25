const listaNotas = [10, 6, 6, 8.5]
listaNotas.push(5); //adicionando
listaNotas.pop() //remove ultimo elemento

const calcularMedia = (notas) =>{
    let notaTotal = 0;
    for (let i = 0; i < notas.length; i++) {
        notaTotal += notas[i];
        
    }
    return notaTotal/notas.length
};


const mediaCalculada = calcularMedia(listaNotas);
console.log(`${mediaCalculada.toFixed(2)} nota final`);
console.log(listaNotas)