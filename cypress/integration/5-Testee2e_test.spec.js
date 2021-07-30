/// <reference types="Cypress" />

const faker = require('faker')

import '../support/pageobject/siteCommands';
import '../scripts/utils';
import '../support/commands';

const { describe } = require("mocha");

const user = {
    login: 'Lia_'+faker.random.alphaNumeric(4),
    email: 'Lia_'+faker.random.alphaNumeric(4) + '@gmail.com',           
    password: '91563815'
}
describe("Teste e2e", () => {

    it("Criar Perfil Novo", () => {
        
        cy.goSite()
        cy.cadastrar_user(user.login, user.email, user.password)
        cy.add_avatar()       
    })
    
    it("Acessar capitulos", () => {      
        cy.goSite()
        cy.login(user.login, user.password)
        cy.acessar_fanfic()
        cy.acessar_capitulos()

        const numberOfAbTests = 40;
    
        for (let i = 2; i <= numberOfAbTests; i += 1) {
            //  cy.xpath('(//td[contains(.,"'+i+'")])[2]').click();
              cy.get('#meio>div.clearfix>section>div:nth-child(3)>table>tbody>tr:nth-child('+ i +')').click();            
              cy.xpath('(//strong[contains(.,"Halfway there was love")])[1]').click();       
              cy.xpath('//span[contains(.,"Halfway there was love")]').should('be.visible')       
          }
     })
     
     it("Deletar usuario", () => {
        cy.goSite()
        cy.login(user.login, user.password)
        cy.deletar_user(user.password)
     })  
});