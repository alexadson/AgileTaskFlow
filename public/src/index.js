// Arquivo principal que inicializa o sistema
import { login } from './auth.js';
import { renderTasks } from './tasks.js';

document.addEventListener('DOMContentLoaded', () => {
  login(); // Simula login
  renderTasks(); // Exibe tarefas
});
