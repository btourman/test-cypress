describe('My First Test', () => {
    it('Should contains Learn React link', () => {
        cy.visit('/')
            .get("a[data-cy='learn-react']").contains("Learn React")
    })

    it('Should insert value in input field', () => {
        cy.visit('/')
            .get("input[data-cy='name-input']")
            .type("toto")
            .should("have.value","toto")
    })
})
