# 🚀 AgileTaskFlow

AgileTaskFlow é um sistema de gerenciamento de tarefas desenvolvido pela **TechFlow Solutions**, como parte de uma simulação acadêmica voltada para o ensino de Engenharia de Software. O projeto tem como finalidade atender às demandas de uma startup de logística que precisa acompanhar seu fluxo de trabalho em tempo real, priorizar tarefas críticas e monitorar o desempenho da equipe com eficiência.

---

## 🎯 Objetivo e Escopo

**Objetivo Geral**: Construir um sistema web que permita o gerenciamento de tarefas com foco em metodologias ágeis.

**Escopo do Projeto**:
- Autenticação de usuários
- CRUD de tarefas (criar, listar, editar, excluir)
- Organização de tarefas por status: A Fazer, Em Progresso, Concluído
- Comentários internos nas tarefas para facilitar a comunicação da equipe
- Painel visual estilo Kanban
- Testes automatizados integrados ao fluxo de desenvolvimento

---

## 📚 Metodologia Adotada

O projeto foi desenvolvido utilizando a metodologia ágil **Kanban**, aplicada por meio das funcionalidades do **GitHub Projects**, com foco em:

- Visualização contínua do progresso
- Tarefas organizadas em colunas: *A Fazer*, *Em Progresso*, *Concluído*
- Ajustes dinâmicos conforme evolução do projeto
- Planejamentos curtos simulados com revisões periódicas

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript Vanilla** (sem frameworks)
- **HTML/CSS**
- **Node.js e NPM**
- **Jest** para testes automatizados
- **GitHub Actions** para integração contínua (CI)
- **GitHub Projects** para gerenciamento de tarefas
- **Git e GitHub** para versionamento de código

---

## 📁 Estrutura do Projeto

```plaintext
AgileTaskFlow/
├── README.md
├── package.json
├── /src
│   ├── index.js          # Entrada principal
│   ├── auth.js           # Lógica de login/registro
│   ├── tasks.js          # CRUD de tarefas
│   └── comments.js       # Gerenciamento de comentários (mudança de escopo)
├── /public
│   └── index.html        # Interface básica
├── /tests
│   └── tasks.test.js     # Testes unitários com Jest
├── .github/
│   └── workflows/
│       └── test.yml      # Pipeline CI com GitHub Actions

🧪 Instruções para Execução do Sistema
1. Clonar o projeto
bash
git clone https://github.com/seu-usuario/agile-task-flow.git
cd agile-task-flow
2. Instalar dependências
bash
npm install
3. Executar aplicação
bash
npm start
4. Executar testes
bash
npm test
O sistema pode ser acessado via navegador local após a execução, e os dados são armazenados temporariamente no localStorage (para fins educativos).

🔁 Justificativa para Mudanças no Escopo
Durante a fase de desenvolvimento, foi realizada uma simulação de reunião com o cliente. Como resultado, surgiu a necessidade de incorporar uma nova funcionalidade: comentários internos em tarefas.

Essa mudança foi solicitada para permitir uma melhor comunicação entre os membros da equipe, especialmente em tarefas complexas ou críticas, facilitando revisões e tomada de decisões colaborativas.

O escopo foi expandido, o README foi atualizado e o quadro Kanban no GitHub Projects recebeu uma nova tarefa para implementar esse recurso adicional.

📜 Histórico de Versões
Todos os commits seguem boas práticas de descrição clara e concisa:

feat: implementar criação de tarefa

fix: corrigir validação de login

chore: configurar pipeline de testes
