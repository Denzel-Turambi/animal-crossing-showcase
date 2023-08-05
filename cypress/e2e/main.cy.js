describe('main page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://api.nookipedia.com/nh/fish?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac`, {
      statusCode: 200,
      fixture: 'mainPageData.json'
    })
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nookipedia.com/nh/fish/Anchovy?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac', {
      statusCode: 200,
      fixture: 'Anchovy.json'
    })

  })

  it('should display all the fishes and allow user to click on a fish, view the fish details, and head back to main', () => {
    cy.get('.nav').contains('h1', 'Animal Crossings: Fishipedia')
    .get('.nav').contains('button', 'Saved Fishes')
    .get('.fish-container').should('be.visible')
    .get('#Anchovy > img').should('have.attr', 'src').should('include', 'https://dodo.ac/np/images/7/7f/Anchovy_%28Fish%29_NH_Icon.png')
    .get('#Angelfish > img').should('have.attr', 'src').should('include', 'https://dodo.ac/np/images/c/cd/Angelfish_NH_Icon.png')
    .get('#Arapaima > img').should('have.attr', 'src').should('include', 'https://dodo.ac/np/images/b/b1/Arapaima_NH_Icon.png')
    .get('#Anchovy').click()
    .get('.nav').should('be.visible')
    .get('.fish-container').should('not.exist')
    .get('.fish-icon').should('be.visible')
    .get('.fish-name').contains('h1', 'Anchovy')
    .get('.focus-details').should('be.visible')
    .get('.focus-details').contains('p', 'Location: Sea')
    .get('.focus-details').contains('p', 'sell to C.J.: 300 Bells')
    .get('.focus-details').contains('p', 'sell to Nook: 200 Bells')
    .get('.focus-details').contains('p', 'Tank Length: 1 Units')
    .get('.focus-details').contains('p', 'Tank Width: 1 Units')
    .get('.focus-image').contains('p', 'In-Game Render:')
    .get('.fish-image').should('be.visible')
    .get('.logo-title').click()
    .get('.fish-container').should('be.visible')
    .get('.focus-details').should('not.exist')
  })
})