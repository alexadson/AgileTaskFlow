// Comentários nas tarefas (mudança de escopo)
export function adicionarComentario(idTarefa, texto) {
  const tarefa = tarefas.find(t => t.id === idTarefa);
  if (tarefa) {
    tarefa.comentarios.push({ texto, data: new Date() });
  }
}
