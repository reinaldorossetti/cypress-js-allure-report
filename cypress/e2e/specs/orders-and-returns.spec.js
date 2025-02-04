import OrdersDetails from '../../fixtures/orderDetails.json'
import DataShipping from '../../fixtures/dataProducts.js'

describe('Orders and Returns Tests', () => {
	beforeEach(() => {
		cy.visit('/')
	})
	const testData = DataShipping()
	it('TC01 - Submit Orders and Returns Form with Valid Data with Email', () => {
		cy.orders_and_returns_email(OrdersDetails.orderNumber, OrdersDetails.lastName, testData.emailSelect, OrdersDetails.email)
		cy.get('.order-details-items').should('be.visible')
	})

	it('TC02 - Submit Orders and Returns Form with Valid Data with Zip Code', () => {
		cy.orders_and_returns_zip_code(OrdersDetails.orderNumber, OrdersDetails.lastName, testData.zipCodeSelect, OrdersDetails.postCode)
		cy.get('.order-details-items').should('be.visible')
	})

	it('TC03 - Submit Orders and Returns Form with Invalid Data', () => {
		cy.orders_and_returns_email(testData.incorrectOrder, testData.lastName, testData.emailSelect, testData.incorrectEmail)
		cy.get('.message-error').should('be.visible')
	})

	it('TC04 - Submit Orders and Returns Form with Empty Fields', () => {
		cy.orders_and_returns_email(testData.emptyOrder, testData.emptylastName, testData.emailSelect, testData.emptyEmail)
		cy.get('#oar-order-id-error').should('be.visible')
		cy.get('#oar-billing-lastname-error').should('be.visible')
		cy.get('#oar_email-error').should('be.visible')
	})
})
