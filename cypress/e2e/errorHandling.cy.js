describe('error handling', () => {
  it('should take user to an error page when user types in route path that does not exist', () => {
    cy.intercept('GET', 'https://api.nookipedia.com/nh/fish?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac', {
      statusCode: 404,
      fixture: 'mainPageData.json'
  })
    .visit('http://localhost:3000/dlkkjlaadfkjkljsadkjlfds')
    .url().should('include', '/404')
    .get('.error-message').contains('p', '404 page not found')
    .get('.try-again').click()
    .url().should('include', '/')
    .get('.fish-container').should('be.visible')
  })

  it('should display an error message when network request for all fishes fails', () => {
    cy.intercept('GET', 'https://api.nookipedia.com/nh/fish?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac', {
      statusCode: 500
  })
    .visit('http://localhost:3000/')
    .url().should('include', '/')
    .get('h1').contains('An error occurred while fetching data.')
  })

  it('should display an error message when network request for when single fish fails', () => {
    cy.intercept('GET', `https://api.nookipedia.com/nh/fish?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac`, {
      statusCode: 200,
      fixture: 'mainPageData.json'
    })
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nookipedia.com/nh/fish/Anchovy?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac', {
      statusCode: 500
    })
    .get('#Anchovy').click()
    .url().should('include', '/fish/Anchovy')
    .get('h1').contains('An error occurred while fetching data.')
  })
})