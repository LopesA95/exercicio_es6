const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "João", nota: 5 },
  { nome: "Maria", nota: 8 },
  { nome: "Pedro", nota: 6 },
  { nome: "Beatriz", nota: 9 },
];

function alunosAprovados(alunos) {
  const alunosFiltrados = alunos.filter(aluno => aluno.nota >= 6);
  return alunosFiltrados;
}

const alunosAcimaDe6 = alunosAprovados(alunos);

console.log(alunosAcimaDe6);

