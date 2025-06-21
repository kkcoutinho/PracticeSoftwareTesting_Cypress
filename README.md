```markdown
# Automação de Testes com Cypress

Este projeto tem como objetivo a automação de fluxos de compra no site 
[https://practicesoftwaretesting.com/], utilizando a ferramenta **Cypress** com o padrão **Page Object**.

Projeto desenvolvido como parte da conclusão do curso **Formação em Teste de Software – Turma 141**, 
orientado pelo professor **José Correia**.

---

## 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript 
- Git/GitHub
- VS Code

---

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── produto1.spec.cy.js
│   └── produto2.spec.cy.js
├── fixtures/
│   ├── datalogin.json
├── support/
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── ProductPage.js
│   │   ├── Produto2.js
│   │   ├── BillingAddress.js
│   │   └── DataCard.js
│   └── commands.js
```

---

## Cenários Implementados

### 🔹 produto1.spec.cy.js

- Compra do produto **Pliers**
- Adição ao carrinho
- Login de usuário
- Preenchimento de endereço
- Pagamento via **Cash on Delivery**
- Validação de sucesso na compra

### 🔹 produto2.spec.cy.js

- Compra do produto **Hammer**
- Adição ao carrinho
- Login de usuário
- Preenchimento de endereço
- Pagamento via **Cartão de Crédito**
- Preenchimento dos dados do cartão
- Validação de sucesso na compra

---

## Como executar os testes

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes:

```bash
npx cypress open
```

---

## Licença

Projeto desenvolvido para fins acadêmicos.
```
