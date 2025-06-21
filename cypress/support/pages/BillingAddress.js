class BillingAddress {

    validarBillingAddress() {
        cy.get('app-address > .container > .row > .col-md-6 > h3')
            .should('have.text', 'Billing Address');
    }

    preencherEndereco(endereco) {
        cy.get('[data-test="street"]').type(endereco);
    }

    preencherCidade(cidade) {
        cy.get('[data-test="city"]').type(cidade);
    }

    preencherEstado(estado) {
        cy.get('[data-test="state"]').type(estado);
    }

    preencherPais(pais) {
        cy.get('[data-test="country"]').type(pais);
    }

    preencherCep(cep) {
        cy.get('[data-test="postal_code"]').type(cep);
    }

    submeterEndereco() {
        cy.get('app-address > .container > .row > .col-md-6 > .float-end').click();
    }
}

export default new BillingAddress();
