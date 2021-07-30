/// <reference types="Cypress" />

import '../commands'

Cypress.Commands.add('go_site', () => {
    cy.visit(Cypress.env(baseUrlOperationPortal) + '/')

})

Cypress.Commands.add('goSite', () => {
    cy.visit('/')
})

//Cadastrar usuário
Cypress.Commands.add('login', (login, password) => {
    cy.visit('/login')
    cy.get('#Usuario').type(login)   
    cy.get('#Senha').type(password)
    cy.get('#Login').click()
    cy.contains('Spirit Fanfics').should('be.visible')
})

//Cadastrar usuário
Cypress.Commands.add('cadastrar_user', (login, email, password) => {
   
    cy.visit('/cadastrar')
    cy.get('#Usuario').type(login)
    cy.get('#Email').type(email)
    cy.get('#Senha').type(password)
    cy.get('#Cadastrar').click()
    cy.contains('Spirit Fanfics').should('be.visible')
})

 //Foto do perfil
 Cypress.Commands.add('add_avatar', () => {
 cy.visit('/editar')
 cy.get('a#cphConteudo_cphConteudo_rptOpcoes_hplOpcao_1').click();     
 cy.get('#cphConteudo_cphConteudo_fupUsuarioAvatar').as('fileInput').attachFile('Imagem3.png');
 cy.get('#cphConteudo_cphConteudo_btnEnviarAvatar').click();
 cy.contains('Avatar enviado com sucesso!').should('be.visible')
 })

 //Deletar usuario
 Cypress.Commands.add('deletar_user', (password) => {
 cy.visit('/home')
 cy.get('#menu-trigger > div').click({force: true});
 cy.get('#Spirit > div.mx-menu.open > div > div.header > a.gear').click({force: true});
 cy.get('#meio > div.clearfix > aside > div.boxMenuDireito > div > a:nth-child(1)').click({force: true});
 cy.get('#ApagarSenha').type(password);
 cy.get('#Apagar').click();
 cy.contains('Usuário Excluído com sucesso').should('be.visible')
 })

 //Acessar Fanfic
 Cypress.Commands.add('acessar_fanfic', () => {
 cy.get('#nav > ul > li:nth-child(5) > a').click();
 cy.get('#listagem > div:nth-child(12) > strong > a').click();
 cy.get('#meio > div.clearfix > section > div.baixo.baixo-select.hidden-xs > a:nth-child(9)').click();
 cy.get('#listagem > div:nth-child(2) > div > div.media-left > a > img').click();
 cy.get('#Spirit > div.alert.text-center.cookiealert.show > button').click();
 cy.xpath('//a[contains(.,"Halfway there was love")]').click(); 
 cy.get('#modalClassificacao > div > div > div.modal-body > div > div > div:nth-child(1) > button').click();
 cy.contains('Halfway there was love').should('be.visible')
 })

 //Acessar capítulos
 Cypress.Commands.add('acessar_capitulos', () => {
 cy.xpath('//strong[contains(.,"Prefácio")]').click();
 cy.contains('Prefácio').should('be.visible');
 cy.xpath('(//strong[contains(.,"Halfway there was love")])[1]').click(); 
 })