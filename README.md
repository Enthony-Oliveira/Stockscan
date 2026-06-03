# 📦 StockScan PWA

> Transforme qualquer smartphone em um leitor de código de barras inteligente para controle de estoque em tempo real.

O **StockScan** é um Progressive Web App (PWA) focado em simplificar a auditoria e o gerenciamento de inventários físicos. Utilizando a câmera do dispositivo móvel, o sistema realiza a leitura instantânea de códigos de barras, permitindo atualizações rápidas de saldo e um rastreio transparente do fluxo de mercadorias.

---

## 🚀 Funcionalidades Principais

* **Autenticação Segura:** Controle de acesso para diferentes perfis de colaboradores (Administradores e Operadores).
* **Leitor de Código de Barras (Scanner PWA):** Captura rápida de dados numéricos diretamente pela câmera do celular, eliminando a necessidade de hardware externo.
* **Gestão de Inventário Atualizada:** Visualização detalhada de saldos, alertas de estoque mínimo e localização física nos corredores.
* **Histórico de Movimentações:** Auditoria completa com registro em tempo real de quem fez a operação (entrada/saída), quando e qual a quantidade alterada.
* **Modo Offline (PWA):** Prontidão de carregamento e funcionamento responsivo simulando a experiência de um aplicativo nativo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do ecossistema JavaScript moderno:

* **Frontend:** [React](https://react.dev/) + [Vite](https://vite.dev/) (Garantindo um build rápido e estrutura PWA leve)
* **Roteamento:** React Router Dom (Gerenciamento dinâmico de telas)
* **Banco de Dados:** [Firebase Firestore](https://firebase.google.com/) (Banco NoSQL em tempo real)
* **Hospedagem & Deploy:** [Vercel](https://vercel.com/) (Integração contínua diretamente com o GitHub)

---

## 🗄️ Arquitetura do Banco de Dados (Cloud Firestore)

O banco segue um modelo NoSQL estruturado em 3 coleções principais relacionáveis:

* `usuarios`: Documentos contendo `id_usuario`, `nome`, `email` e `cargo`.
* `produtos`: Documentos indexados pelo código de barras contendo `nome_produto`, `quantidade`, `estoque_minimo` e `localizacao_corredor`.
* `historico_movimentacao`: Documentos de auditoria registrando `data_hora`, `tipo_operacao`, `quantidade_alterada`, vinculando os IDs de referência (`id_usuario` e `id_produto`).

---

## 📈 Cronograma de Desenvolvimento (Metodologia Ágil)

O desenvolvimento foi distribuído em 6 sprints semanais focado em entregáveis funcionais:

* **Sprint 0:** Escopo, design inicial e provisionamento do console Firebase.
* **Sprint 1:** Configuração do ambiente React/Vite e Tela de Login.
* **Sprint 2:** Integração da biblioteca de scanner de câmera e leitura de strings.
* **Sprint 3:** Construção das rotas de detalhes (`Details.jsx`) e lógica de alteração no Firestore.
* **Sprint 4:** Implementação da esteira de histórico e testes de concorrência com múltiplos dispositivos.
* **Sprint 5:** Ajustes finais de UI/UX, correção de builds de produção e deploy contínuo na Vercel.

---

## 🔧 Como Executar o Projeto Localmente

### Pré-requisitos
Você precisará ter instalado em sua máquina o **Node.js** e um gerenciador de pacotes (npm ou yarn).

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Enthony-Oliveira/stockscan.git](https://github.com/Enthony-Oliveira/stockscan.git)
