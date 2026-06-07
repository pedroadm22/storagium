# Storagium 📦

[![Docker Support](https://img.shields.io/badge/Docker-enabled-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

O **Storagium** é uma plataforma web moderna e robusta projetada para o gerenciamento inteligente de inventário e controle de estoque para lojas e comércios. Inspirado na eficiência, organização e padronização dos **contêineres de transporte de cargas**, o Storagium traz a lógica da logística portuária global para o ecossistema digital de varejo, permitindo rastrear, armazenar e movimentar mercadorias com máxima precisão.

---

## 🎯 Sobre o Projeto

Gerenciar estoque de forma manual ou através de sistemas legados frequentemente resulta em perdas financeiras, furos de inventário e falhas operacionais. O Storagium resolve este problema centralizando toda a operação logística de uma loja em uma interface limpa, modular e altamente responsiva. 

Cada lote de produto funciona como um contêiner virtual: possui identificação única, localização específica, histórico de movimentação imutável e métricas de ocupação.

---

## ✨ Funcionalidades Principais

* **📦 Gestão Estruturada de Estoque:** Cadastro detalhado de produtos com suporte a variações (SKU, cores, tamanhos), categorização inteligente e controle de lotes.
* **⚡ Movimentações em Tempo Real:** Operações rápidas de Entrada (Check-in), Saída (Check-out) e Transferência interna com atualização instantânea do painel.
* **⚠️ Alertas de Escassez (Estoque Mínimo):** Notificações visuais automáticas quando um item atinge o limite de segurança operacional.
* **📊 Dashboard de Ocupação:** Painel analítico que exibe graficamente a capacidade de armazenamento ocupada, produtos mais rodados e saúde financeira do estoque.
* **🕵️ Rastreabilidade e Auditoria:** Histórico completo de auditoria detalhando *quem*, *quando* e *o quê* movimentou no inventário.
* **🐳 Arquitetura Containerizada:** Pronto para produção e desenvolvimento utilizando Docker, garantindo paridade de ambientes e facilidade de deploy.

---

## 🛠️ Tecnologias Utilizadas

A arquitetura do Storagium foi dividida estrategicamente para garantir escalabilidade, performance e facilidade de manutenção:

### Frontend
* **ReactJS** (v18+) com **TypeScript** para uma interface componentizada e tipagem estática segura.
* **Tailwind CSS** para estilização utilitária moderna e totalmente responsiva.
* **Lucide React** para o ecossistema de ícones minimalistas.

### Backend & API
* **Python** com **FastAPI** proporcionando um backend de alta performance, assíncrono e documentação automática via Swagger/OpenAPI.
* **SQLAlchemy** como ORM para mapeamento e manipulação de dados de forma eficiente.

### Banco de Dados & Infraestrutura
* **PostgreSQL** como banco de dados relacional principal para persistência robusta dos dados de inventário.
* **Docker & Docker Compose** para orquestração de ambientes, isolamento de dependências e agilidade no setup.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

### 🛠️ Clonando o Repositório

```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/storagium.git](https://github.com/seu-usuario/storagium.git)

# Acesse a pasta do projeto
cd storagium