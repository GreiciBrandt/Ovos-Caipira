# Ovos-Caipira
Loja virtual para venda de ovos
# 🥚 Ovos Caipira

Aplicação web de uma loja virtual de ovos caipiras, desenvolvida em React. O projeto simula o processo de compra, desde a visualização dos produtos no carrinho até o preenchimento e processamento do pagamento.

## 📌 Sobre o projeto

O objetivo do projeto é desenvolver uma aplicação React utilizando componentes, propriedades, estados, eventos, formulários, validações e rotas.

A aplicação possui um carrinho com produtos fixos e um fluxo de pagamento simulado. Não existe integração com banco de dados ou sistema de pagamento real.

## 🚀 Tecnologias utilizadas

* React
* JavaScript
* JSX
* Vite
* React Router DOM
* React Hook Form
* Zod
* CSS
* Git e GitHub

## 📂 Estrutura do projeto

```text
src/
├── assets/
│   └── styles/
├── components/
│   ├── ItemCarrinho.jsx
│   └── ResumoCompra.jsx
├── data/
│   └── produtos.js
├── hooks/
│   └── usePagamento.js
├── pages/
│   ├── Carrinho.jsx
│   ├── Pagamento.jsx
│   ├── Sucesso.jsx
│   └── Falha.jsx
├── App.jsx
└── main.jsx
```

## 🛒 Funcionalidades

### Carrinho

* Exibição de produtos;
* Exibição do preço unitário;
* Exibição da quantidade;
* Cálculo do subtotal de cada produto;
* Cálculo do valor total da compra;
* Navegação para a tela de pagamento.

### Pagamento

O formulário possui os seguintes campos:

* Nome do titular;
* Número do cartão;
* Validade;
* CVV.

Os dados são validados utilizando React Hook Form e Zod.

O cartão deve possuir 16 dígitos, a validade deve estar no formato `MM/AA` e o CVV deve possuir 3 dígitos.

### Processamento

O pagamento é simulado no navegador.

Durante o processamento, a aplicação apresenta a mensagem:

> Processando compra…

Se os 16 números do cartão forem iguais, a aplicação identifica a situação como uma tentativa de golpe e direciona para a tela de falha.

Exemplo:

```text
1111 1111 1111 1111
```

Nesse caso, a tela apresenta:

> tentativa de golpe

Para outros cartões que atendam às validações do formulário, a compra é considerada aprovada.

## 🗺️ Rotas

A aplicação possui as seguintes rotas:

| Rota         | Página             |
| ------------ | ------------------ |
| `/`          | Carrinho           |
| `/pagamento` | Pagamento          |
| `/sucesso`   | Compra aprovada    |
| `/falha`     | Falha no pagamento |

## 💻 Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd nome-do-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

Depois, acesse o endereço informado pelo Vite no terminal.

## 📱 Responsividade e acessibilidade

A aplicação utiliza CSS responsivo para adaptar a interface a diferentes tamanhos de tela.

Também foram utilizados elementos semânticos, labels associados aos campos do formulário, estados de foco e botões com estados de desabilitação durante o processamento.

## 🌳 Versionamento

O projeto foi desenvolvido utilizando Git e GitHub.

Foram utilizadas branches para organizar o desenvolvimento das funcionalidades e commits descritivos para registrar a evolução do projeto.

## 🔮 Possíveis melhorias

Como melhorias futuras, poderiam ser adicionadas:

* Banco de dados para armazenar produtos e pedidos;
* Login e cadastro de usuários;
* Carrinho com alteração de quantidade;
* Integração com um serviço de pagamento real;
* Histórico de pedidos;
* Área administrativa para gerenciamento dos produtos.

## 🤖 Uso de inteligência artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o desenvolvimento, principalmente para auxiliar na organização do projeto, identificação de erros e compreensão de conceitos utilizados na aplicação.

O código foi testado e validado durante o desenvolvimento para verificar o funcionamento das funcionalidades implementadas.
