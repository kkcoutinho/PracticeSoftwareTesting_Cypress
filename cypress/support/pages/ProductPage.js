class ProductPage {
selecionarProdutoPliers() {
  cy.get('[data-test="product-01JY9G2600CE68C07EFGAX1YZ1"] > .card-img-wrapper > .card-img-top').click();
}

  validarNome(nomeEsperado) {
    cy.get('[data-test="product-name"]').should('have.text', nomeEsperado);
  }

  validarPreco(precoEsperado) {
    cy.get('[data-test="unit-price"]').should('have.text', precoEsperado);
  }

  adicionarAoCarrinho() {
    cy.get('[data-test="add-to-cart"]').click();
  }

  acessarCarrinho() {
    cy.get('[data-test="cart-quantity"]').click();
  }
}

export default new ProductPage();