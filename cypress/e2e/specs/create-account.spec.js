import DataShipping from '../../fixtures/dataProducts.js'

describe('User Authentication Tests', () => {
	it('Should create an account successfully', () => {
		const testData = DataShipping()

		cy.writeFile('cypress/fixtures/user.json', {
			email: testData.email,
			password: testData.password
		})

		cy.visit('/')
		cy.create_new_account(testData.email, testData.firstName, testData.lastName, testData.password)
		cy.get('.message-success').should('be.visible')
	})

	it('Should log in successfully', () => {
		cy.fixture('user').then((user) => {
			cy.visit('/')
			cy.login(user.email, user.password)
			cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
		})
	})
})

describe('Negative Login Tests', () => {
	const testData = DataShipping()
	it('Should fail with incorrect email and correct password', () => {
			cy.visit('/')
			cy.login(testData.incorrectEmail, testData.password)
			cy.get('.message-error').should('be.visible')
	});

	it('Should fail with correct email and incorrect password', () => {
			cy.visit('/')
			cy.login(testData.email, testData.incorrectPassword)
			cy.get('.message-error').should('be.visible')
	});

	it('Should fail with both incorrect email and password', () => {
			cy.visit('/')
			cy.login(testData.incorrectEmail, testData.incorrectPassword)
			cy.get('.message-error').should('be.visible')
	});

	it('Should fail with empty email and password', () => {
			cy.visit('/')
			cy.login(testData.emptyEmail, testData.emptyPassword)
			cy.get('#email-error').should('be.visible')
			cy.get('#pass-error').should('be.visible')
	});
});
