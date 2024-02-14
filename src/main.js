class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }

  estáAprovado() {
    return this.nota >= 6;
  }
}

const alunos = [
  new Aluno("Ana", 7),
  new Aluno("João", 5),
  new Aluno("Maria", 8),
  new Aluno("Pedro", 6),
  new Aluno("Beatriz", 9),
];

const alunosAprovados = alunos.filter(aluno => aluno.estáAprovado());

console.log(`Alunos com nota acima de 6:`);
alunosAprovados.forEach(aluno => console.log(`- ${aluno.nome} (${aluno.nota})`));



