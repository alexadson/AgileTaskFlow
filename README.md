1. 📄 README.md


Objetivo e Escopo Desenvolver um sistema web para gerenciamento de tarefas com autenticação, painel Kanban, comentários e testes automatizados, focado em equipes de logística.

Metodologia Adotada Aplicação da metodologia ágil Kanban com o uso da aba Projects do GitHub.

Instruções para Execução Clonar repositório, instalar dependências, iniciar sistema com npm start, e rodar testes com npm test.

Justificativa de Mudança no Escopo Comentários em tarefas foram incluídos após feedback do cliente para facilitar a comunicação interna. Essa alteração foi registrada no Kanban e no README.

2. 💻 Código Fonte
Organização dos arquivos em pastas:

plaintext
AgileTaskFlow/
├── README.md
├── package.json
├── /public            # Contém index.html e arquivos da interface
├── /src               # Arquivos JS com funcionalidades (login, tarefas, comentários)
├── /tests             # Arquivos com testes unitários usando Jest
├── /docs              # Imagens ou exportações da modelagem UML (opcional)
├── .github/workflows/ # Pipeline de testes com GitHub Actions
Cada arquivo possui comentários explicativos e nome claro para facilitar a manutenção.

3. 🗂️ Quadro Kanban
Configurado na aba Projects do GitHub com colunas:

Coluna	Conteúdo
A Fazer	Tarefas planejadas (ex.: implementar login)
Em Progresso	Tarefas em desenvolvimento (ex.: configurar CI)
Concluído	Tarefas entregues (ex.: README finalizado)
Todos os cartões possuem descrições e são atualizados conforme o avanço do projeto.

4. 🕓 Histórico de Commits
Mensagens claras e bem distribuídas, exemplos:

feat: implementar login de usuário

fix: ajustar validação de campos obrigatórios

test: adicionar teste unitário para criação de tarefas

docs: justificar mudança de escopo no README

O histórico mostra evolução lógica do sistema e facilita acompanhamento.

5. ✅ Pipeline de Controle de Qualidade
Arquivo criado: .github/workflows/test.yml

Executa testes automatizados com Jest a cada push ou pull request

Logs ficam disponíveis na aba Actions do GitHub

Garante confiabilidade e rastreabilidade do código

6. 📐 Modelagem de Requisitos e UML
Requisitos Funcionais:

Login

CRUD de tarefas

Comentários nas tarefas

Visualização em Kanban

Requisitos Não Funcionais:

Código modular e comentado

Testes automatizados

Interface leve e intuitiva

Diagramas UML (draw.io):

Casos de Uso: Atores, funcionalidades principais

Classes: Usuário, Tarefa, Comentário com atributos e métodos

7. 🔁 Simulação de Mudança no Escopo
Comentário adicionado no README.md:

Novo cartão no quadro Kanban: Implementar funcionalidade de comentários nas tarefas incluído na coluna A Fazer → Em Progresso → Concluído

