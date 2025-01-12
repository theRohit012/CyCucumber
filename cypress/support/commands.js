Cypress.Commands.add('verifyLinksTextsUsingDataTable', (DataTable) => {
    const row = DataTable.rawTable.flat();
    row.forEach(element => {
        cy.contains(element).should('be.visible').should('have.attr', 'href')
    })
})