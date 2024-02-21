/// <reference types="cypress" />

describe('Teste de funcionalidades', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve adicionar 1 contatos', () => {        
        cy.get('.sc-gLDzan input[type="text"]').type('Rafael')
        cy.get('.sc-gLDzan input[type="email"]').type('rafael@rafael.com.br')
        cy.get('.sc-gLDzan input[type="tel"]').type('41999999999')
        cy.get('.adicionar').click()
    })
    it('Deve alterar 1 contatos', () => {
        cy.get('.edit:first').click()
        cy.get('.sc-gLDzan input[type="text"]').type('Rafael')
        cy.get('.sc-gLDzan input[type="email"]').type('rafael@rafael.com.br')
        cy.get('.sc-gLDzan input[type="tel"]').type('41999999999')
        cy.get('.alterar').click()
    })
    it('Deve remover 1 contatos', () => {
        cy.get('.delete:first').click()
    })
})