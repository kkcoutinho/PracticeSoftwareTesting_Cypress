import datalogin from '../fixtures/datalogin.json';
import LoginPage from '../support/pages/LoginPage';
import Produto2 from '../support/pages/Produto2';
import BillingAddress from '../support/pages/BillingAddress';
import DataCard from '../support/pages/DataCard';

describe('Fluxo de compra Practice Software Testing', () => {
  it('Compra do produto Hammer', () => {
    cy.visit('/');

    Produto2.selecionarProdutoHammer();
    Produto2.validarNome('Hammer');
    Produto2.validarPreco('12.58');
    Produto2.adicionarAoCarrinho();

    Produto2.acessarCarrinho();
    cy.get('[data-test="proceed-1"]').click();

    LoginPage.fazerLogin(datalogin.email, datalogin.password);

    cy.get('[data-test="proceed-2"]').click();

    BillingAddress.validarBillingAddress();
    BillingAddress.preencherEndereco('Rua do Oratório, 3600');
    BillingAddress.preencherCidade('São Paulo');
    BillingAddress.preencherEstado('SP');
    BillingAddress.preencherPais('Brasil');
    BillingAddress.preencherCep('03117-000');
    BillingAddress.submeterEndereco();

    // Pagamento
    cy.get('app-payment > .container > .row > .col-md-6 > h3').should('have.text', 'Payment');
    cy.get('[data-test="payment-method"]').select('Credit Card');

    DataCard.preencherNumero('4080-2034-5028-1234');
    DataCard.preencherDataExpiracao('11/2031');
    DataCard.preencherCvv('123');
    DataCard.preencherNome('Jack Howe');

    cy.get('[data-test="finish"]').click();

  });
});
