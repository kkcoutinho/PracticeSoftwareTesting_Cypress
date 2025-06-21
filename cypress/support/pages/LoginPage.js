class LoginPage {
  
  preencherEmail(email) {
    cy.get('[data-test="email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-test="password"]').type(senha);
  }

  submeterLogin() {
    cy.get('[data-test="login-submit"]').click();
  }

  validarPaginaLogin() {
    cy.get('.col-md-6 > div.ng-star-inserted > h3').should('have.text', 'Login');
  }

  fazerLogin(email, senha) {
    this.validarPaginaLogin();
    this.preencherEmail(email);
    this.preencherSenha(senha);
    this.submeterLogin();
  }
}

export default new LoginPage();