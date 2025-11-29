# 🌾 AgroConecta: Conectando Conhecimento e Tecnologia

[![Status do Deploy](https://img.shields.io/badge/Status-Deploy%20Concluído-brightgreen)](SEU_LINK_DO_VERCEL_AQUI)
[![Feito Com](https://img.shields.io/badge/Feito%20Com-HTML%2C%20CSS%20e%20PBL-blueviolet)](SEU_LINK_DO_GITHUB_AQUI)

## 💡 Sobre o Projeto

O **AgroConecta** é a interface de uma plataforma digital desenvolvida para ser a **solução tecnológica para o pequeno agricultor familiar brasileiro**. O projeto nasceu como um **PBL (Project Based Learning)** do primeiro ano da faculdade de **Engenharia de Software**.

Nosso objetivo é apoiar a **Agenda ODS 2 da ONU (Fome Zero e Agricultura Sustentável)**, fornecendo ferramentas e conhecimentos práticos para aumentar a produtividade e reduzir a vulnerabilidade do agricultor.

## 🌟 O Desafio e a Solução

| Seção | Objetivo Principal | Funcionalidades em Destaque |
| :--- | :--- | :--- |
| **O Problema** | Apresentar os desafios enfrentados pela agricultura familiar (clima, falta de informação, ineficiência de recursos). | Segmentação clara do público-alvo (Persona: José da Almeida). |
| **Solução** | Introduzir a assistente virtual **Dona Rosa** e os pilares do AgroConecta. | Chatbot via Telegram, Educação SENAR, Otimização de Recursos (IA). |
| **Recursos** | Detalhar os benefícios práticos da plataforma. | Alertas Climáticos, Interface Intuitiva, Parcerias Estratégicas. |

---

## ✨ Funcionalidades Dinâmicas Implementadas (Frontend)

As seções de Formulário e Calculadora foram implementadas usando **JavaScript Vanilla** para adicionar interatividade essencial ao usuário, demonstrando a capacidade de manipulação do DOM e lógica de negócios.

### 1. Calculadora de Otimização de Insumos
Uma ferramenta prática 100% no frontend que permite ao agricultor estimar de forma rápida e precisa a necessidade de insumos e o custo total para o tamanho de sua lavoura.

* **Lógica Implementada (JavaScript):**
    * **Total de Insumo:** `Área da Lavoura (ha) * Insumo Recomendado (kg/ha)`
    * **Custo Total:** `Total de Insumo (kg) * Preço Unitário (R$/kg)`
    * O JavaScript manipula o DOM para exibir os resultados formatados em tempo real, sem necessidade de recarregar a página ou de um backend.

### 2. Formulário de Contato Inteligente
A seção "Fale Conosco" foi aprimorada com regras de validação customizadas, essenciais para a qualidade dos dados.

* **Validações Críticas (JavaScript):**
    * **Nome Completo:** Implementação de regra que **exige nome e sobrenome** (mínimo de 2 letras cada), bloqueando o envio de nomes incompletos como "João".
    * **Padrões:** Validação de formato para E-mail e Telefone, além de validação nativa HTML5 (`required`).
    * **Bloqueio de Envio:** Uso de `event.preventDefault()` e `form.checkValidity()` para impedir o *submit* da página até que todas as regras customizadas sejam satisfeitas.

---

## 🛠️ Tecnologias Utilizadas

Este site estático foi construído com foco em fundamentos web e design responsivo.

| Tecnologia | Descrição | Ícone |
| :--- | :--- | :---: |
| **HTML5** | Estrutura semântica de todo o conteúdo da página. | <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"> |
| **CSS3** | Estilização completa, layout e cores baseadas no protótipo do Figma. | <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"> |
| **JavaScript (Vanilla)** | Implementação de lógica de validação e da Calculadora de Otimização de Insumos. | <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> |
| **Bootstrap 5** | Utilizado para componentes de UI e sistema de grid responsivo. | <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"> |
| **Git** | Sistema de controle de versão. | <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Git"> |
| **GitHub** | Hospedagem do código-fonte e gestão de colaboração. | <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"> |
| **Vercel** | Plataforma para deploy e hospedagem do site. | <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"> |

---

## 🚀 Como Visualizar

### Pré-requisitos
Certifique-se de ter um navegador moderno e o Git instalado.

### Acessando o Projeto
1. Clone o repositório:
    ```bash
    git clone SEU_([https://github.com/m-assis/agroconecta-site](https://github.com/m-assis/agroconecta-site)
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd agroconecta-site
    ```
3. Abra o arquivo `index.html` em seu navegador para visualizar o site localmente.
