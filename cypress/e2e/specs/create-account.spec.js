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
	it('Should fail with incorrect email and correct password', () => {
		cy.fixture('user').then((user) => {
			cy.visit('/')
			cy.login(user.incorrectEmail, user.password)
			cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
		})
	});

	it('Should fail with correct email and incorrect password', () => {
		cy.fixture('user').then((user) => {
			cy.visit('/')
			cy.login(user.email, user.incorrectPassword)
			cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
		})
	});

	it('Should fail with both incorrect email and password', () => {
		cy.fixture('user').then((user) => {
			cy.visit('/')
			cy.login(user.incorrectEmail, user.incorrectPassword)
			cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
		})
	});

	it('Should fail with empty email and password', () => {
		cy.fixture('user').then((user) => {
			cy.visit('/')
			cy.login(user.emptyEmail, user.emptyPassword)
			cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
		})
	});
});
