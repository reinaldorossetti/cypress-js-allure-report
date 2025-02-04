import DataShipping from '../../fixtures/dataProducts.js'

describe('Account', () => {
	it('Create Account', () => {
		const testData = DataShipping()

		cy.writeFile('cypress/fixtures/user.json', {
			email: testData.email,
			password: testData.password
		})

		cy.visit('/')
		cy.create_new_account(testData.email, testData.firstName, testData.lastName, testData.password)
		cy.get('.message-success').should('be.visible')
	})

	it('Login', () => {
		cy.fixture('user').then((user) => {
			cy.visit('/')
			cy.login(user.email, user.password)

			cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
		})
	})
})
