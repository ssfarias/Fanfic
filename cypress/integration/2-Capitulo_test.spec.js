/// <reference types="Cypress" />

import '../support/pageobject/siteCommands';
const { describe } = require("mocha");

describe("Fanfic", () => {
     
    it("Acessar capitulos", () => {
        const user = {
            login: 'LinaFer_Hummel',              
            password: '91563815'
        }        
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
});