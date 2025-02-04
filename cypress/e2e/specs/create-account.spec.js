import DataShipping from '../../fixtures/dataProducts.js'

describe('User Authentication Tests', () => {
	beforeEach(() => {
		cy.visit('/')
	})
	it('TC01 - Should create an account successfully', () => {
		const testData = DataShipping()

		cy.writeFile('cypress/fixtures/user.json', {
			email: testData.email,
			password: testData.password
		})
		cy.create_new_account(testData.email, testData.firstName, testData.lastName, testData.password)
		cy.get('.message-success').should('be.visible')
	})

	it('TC02 - Should log in successfully', () => {
		cy.fixture('user').then((user) => {
			cy.login(user.email, user.password)
			cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
		})
	})

	it('TC03 - Should log in fail with incorrect email and correct password', () => {
		const testData = DataShipping()
		cy.login(testData.incorrectEmail, testData.password)
		cy.get('.message-error').should('be.visible')
	});

	it('TC04 - Should log in fail with correct email and incorrect password', () => {
		const testData = DataShipping()
		cy.login(testData.email, testData.incorrectPassword)
		cy.get('.message-error').should('be.visible')
	});

	it('TC05 - Should log in fail with both incorrect email and password', () => {
		const testData = DataShipping()
		cy.login(testData.incorrectEmail, testData.incorrectPassword)
		cy.get('.message-error').should('be.visible')
	});

	it('TC06 - Should log in fail with empty email and password', () => {
		const testData = DataShipping()
		cy.login(testData.emptyEmail, testData.emptyPassword)
		cy.get('#email-error').should('be.visible')
		cy.get('#pass-error').should('be.visible')
	});
})




