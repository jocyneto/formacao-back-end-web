const alunos = ["Aluno 1", "Aluno 2", "Aluno 3"];
const notasMedias = [7, 6.5, 8.3];
const salaDeAula = [alunos, notasMedias];

const pegarMedia = (nomeAluno) =>{
    let indice;
    if(salaDeAula[0].includes(nomeAluno)){
        indice = salaDeAula[0].indexOf(nomeAluno);
        return `O aluno ${salaDeAula[0][indice]} obteve nota média de ${salaDeAula[1][indice]}!`;
    }else{
        return "Aluno não encontrado!";
    }
}

console.log(pegarMedia("Aluno 3"));