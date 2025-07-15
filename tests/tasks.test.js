// Teste básico com Jest
import { criarTarefa } from '../src/tasks.js';

test('criar tarefa retorna objeto com título correto', () => {
  const tarefa = criarTarefa('Estudar', 'Revisar Kanban', 'Alta');
  expect(tarefa.titulo).toBe('Estudar');
});
