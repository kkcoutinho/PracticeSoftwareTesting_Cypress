import datalogin from '../fixtures/datalogin.json';
import LoginPage from '../support/pages/LoginPage';
import ProductPage from '../support/pages/ProductPage';
import BillingAddress from '../support/pages/BillingAddress';

describe('Fluxo de compra Practice Software Testing', () => {
  it('Compra do produto Plier', () => {
    cy.visit('/');

    ProductPage.selecionarProdutoPliers();
    ProductPage.validarNome('Pliers');
    ProductPage.validarPreco('12.01');
    ProductPage.adicionarAoCarrinho();

    ProductPage.acessarCarrinho();
    cy.get('[data-test="proceed-1"]').click();

    LoginPage.fazerLogin(datalogin.email, datalogin.password);

    cy.get('[data-test="proceed-2"]').click();

    BillingAddress.validarBillingAddress();
    BillingAddress.preencherEndereco('Avenida Paes de Barros, 1234');
    BillingAddress.preencherCidade('São Paulo');
    BillingAddress.preencherEstado('SP');
    BillingAddress.preencherPais('Brasil');
    BillingAddress.preencherCep('03149-100');
    BillingAddress.submeterEndereco();

    // Pagamento
    cy.get('app-payment > .container > .row > .col-md-6 > h3').should('have.text', 'Payment');
    cy.get('[data-test="payment-method"]').select('Cash on Delivery');
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="payment-success-message"]').should('have.text', 'Payment was successful');

  });
});
