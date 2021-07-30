/// <reference types="Cypress" />

const faker = require('faker')

import '../support/pageobject/siteCommands';
import '../scripts/utils';
import '../support/commands';

const { describe } = require("mocha");

const user = {
    login: 'LinaFer_Hummel',
    email: 'Lm_FerHummel_@gmail.com',           
    password: '91563815'
}
describe("Criar usuário", () => {

    it("Criar Perfil Novo", () => {
        
        cy.goSite()
        cy.cadastrar_user(user.login, user.email, user.password)
        cy.add_avatar()       
    })  
 });