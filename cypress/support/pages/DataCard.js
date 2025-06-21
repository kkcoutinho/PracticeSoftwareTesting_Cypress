class DataCard {

    preencherNumero(numero) {
        cy.get('[data-test="credit_card_number"]').type(numero);
    }

    preencherDataExpiracao(data) {
        cy.get('[data-test="expiration_date"]').type(data);
    }

    preencherCvv(cvv) {
        cy.get('[data-test="cvv"]').type(cvv);
    }

    preencherNome(nome) {
        cy.get('[data-test="card_holder_name"]').type(nome);
    }

}

export default new DataCard();