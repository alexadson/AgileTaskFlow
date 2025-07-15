// CRUD de tarefas
let tarefas = [];

export function criarTarefa(titulo, descricao, prioridade) {
  const nova = {
    id: Date.now(),
    titulo,
    descricao,
    prioridade,
    status: 'A Fazer',
    comentarios: []
  };
  tarefas.push(nova);
  return nova;
}

export function renderTasks() {
  const app = document.getElementById('app');
  app.innerHTML = '<ul>' + tarefas.map(t => `<li>${t.titulo}</li>`).join('') + '</ul>';
}
