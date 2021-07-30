/// <reference types="Cypress" />

import '../support/pageobject/siteCommands';
const { describe } = require("mocha");

describe("Deletar Usuario", () => {
     
    it("Deletar usuario com sucesso", () => {
      const user = {
         login: 'LinaFer_Hummel',         
         password: '91563815'
     }   
        cy.goSite()
        cy.login(user.login, user.password)
        cy.deletar_user(user.password)
     })  
});