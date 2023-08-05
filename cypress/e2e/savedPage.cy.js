describe('Saved page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://api.nookipedia.com/nh/fish?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac`, {
      statusCode: 200,
      fixture: 'mainPageData.json'
    })
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nookipedia.com/nh/fish/Angelfish?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac', {
      statusCode: 200,
      fixture: 'Angelfish.json'
    })

  })

  it('should allow the user to save and delete a fish', () => {
    cy.get('.nav').contains('h1', 'Animal Crossings: Fishipedia')
    .get('.nav').contains('button', 'Saved Fishes')
    .get('.fish-container').should('be.visible')
    .url().should('include', '/')
    .get('#Angelfish').click()
    .url().should('include', '/fish/Angelfish')
    .get('.fish-container').should('not.exist')
    .get('.fish-icon').should('be.visible')
    .get('.fish-name').contains('h1', 'Angelfish')
    .get('.focus-details').should('be.visible')
    .get('.focus-details').contains('p', 'Location: River')
    .get('.focus-details').contains('p', 'sell to C.J.: 4500 Bells')
    .get('.focus-details').contains('p', 'sell to Nook: 3000 Bells')
    .get('.focus-details').contains('p', 'Tank Length: 1 Units')
    .get('.focus-details').contains('p', 'Tank Width: 1 Units')
    .get('.focus-display > button').click()
    .get('[href="/saved-fishes"] > button').click()
    .url().should('include', '/saved-fishes')
    .get('img').should('have.attr', 'src').should('include', 'https://dodo.ac/np/images/c/cd/Angelfish_NH_Icon.png')
    .get('.card > #Angelfish').click()
    .get('.card > #Angelfish').should('not.exist')
  })
})