import { HOME_PAGE } from './selectors/homePage'
import { MINICART } from './selectors/minicartPages'
import { SHIPPING } from './selectors/shippingPage'
import DataShipping from '../../fixtures/dataProducts'
import Order from '../../fixtures/purchaseOrder.json'

let orderDetails = {'orderNumber': '', 'email': ''};

describe('Purchase functionalities', () => {
	context('Orders', () => {

	// 	it('Add 2 itens by Home Page to cart and complete the order' , () => {

	// 		// open base Url
	// 		cy.visit('/')
	// 		const testData = DataShipping()

	// 		cy.add_to_cart(Order.product_name, Order.valueItem, Order.size, Order.color, Order.quantity)
    //         cy.contains(`You added ${Order.product_name} to your shopping cart.`).should('be.visible')
    //         cy.get(HOME_PAGE.BLOCK_PRODUCTS.showcart_number).then(($el)=>{ $el.get(0).scrollIntoView()}).contains(`${Order.quantity}`);
            
	// 		// assert number of items in cart
	// 		cy.get(HOME_PAGE.BLOCK_PRODUCTS.quantity).invoke('val').then((value) => {
    //             expect(value).to.eq(`${Order.quantity}`)
    //         });

	// 		cy.get(MINICART.miniCart).click()
	// 		cy.get(MINICART.miniCartSubTotal).should('be.visible')

	// 		cy.contains(`${Order.quantity} Item in Cart`).should('be.visible')
	// 		cy.contains(`Proceed to Checkout`).should('be.visible')
	// 		cy.contains(`View and Edit Cart`).should('be.visible')
	// 		cy.contains(`${Order.valueItensTotal}`).should('be.visible')
	// 		cy.get(MINICART.miniCartProductItemName).should('be.visible').contains(Order.product_name)
	// 		cy.get(MINICART.miniCartProductItemPrice).should('be.visible').contains(Order.valueItem)

	// 		cy.get(MINICART.miniCartDropDownProceedToCheckout).click()
	// 		cy.url().should('include', 'checkout/#shipping')

	// 		cy.fill_shipping(testData.email, testData.firstName, testData.lastName, testData.postCode, testData.streetAddress, testData.city, testData.state, testData.country, testData.phone, Order.shipping_value)
			
	// 		cy.get(SHIPPING.PAYMENT.shippingDetails).should('be.visible')
	// 		cy.contains(testData.firstName).should('be.visible')
	// 		cy.contains(testData.lastName).should('be.visible')
	// 		cy.contains(testData.streetAddress).should('be.visible')
	// 		cy.contains(testData.city).should('be.visible')
	// 		cy.contains(testData.country).should('exist')
	// 		cy.contains(testData.postCode).should('be.visible')
	// 		cy.contains(testData.state).should('exist')
	// 		cy.contains(testData.phone).should('be.visible')

	// 		cy.get(SHIPPING.PAYMENT.placeOrderBtn).should('be.visible').click()
	// 		cy.url().should('include', 'checkout/onepage/success/')

	// 		// assert registration data.
	// 		cy.contains('Thank you for your purchase!').should('be.visible')
	// 		cy.get(SHIPPING.PAYMENT.OrderNumber).invoke('text').then((text) => {
    //             cy.contains(`Your order # is: ${text}`).should('be.visible')
	// 			orderDetails.orderNumber = text;
	// 			orderDetails.email = testData.email;
	// 			const orderDetailsJSON = JSON.stringify(orderDetails);
	// 			// create JSON with order details.
	// 			cy.writeFile('./cypress/fixtures/orderDetails.json', orderDetailsJSON);
    //         });

	// 		cy.contains(`Email Address: ${testData.email}`).should('be.visible')		
	// 		cy.contains('Continue Shopping').should('be.visible')
	// 		cy.contains('Create an Account').should('be.visible')
	// 	})
	// })

	it('Add 1 itens from category to cart and complete the order' , () => {

		// open base Url
		cy.visit('/')
		const testData = DataShipping()

		cy.get(HOME_PAGE.NAVBAR.women).then(($el)=>{ $el.get(0).scrollIntoView()})
		cy.get(HOME_PAGE.NAVBAR.tops).then(($el)=>{ $el.get(0).scrollIntoView()})
		cy.get(HOME_PAGE.NAVBAR.tees).then(($el)=>{ $el.get(0).scrollIntoView()}).click()

		cy.add_to_cart(Order.product_name, Order.valueItem, Order.size, Order.color, Order.quantityOne)
		cy.contains(`You added ${Order.product_name} to your shopping cart.`).should('be.visible')
		cy.get(HOME_PAGE.BLOCK_PRODUCTS.showcart_number).then(($el)=>{ $el.get(0).scrollIntoView()}).contains(`${Order.quantity}`);
		
		// assert number of items in cart
		cy.get(HOME_PAGE.BLOCK_PRODUCTS.quantity).invoke('val').then((value) => {
			expect(value).to.eq(`${Order.quantityOne}`)
		});

		cy.get(MINICART.miniCart).click()
		cy.get(MINICART.miniCartSubTotal).should('be.visible')

		cy.contains(`${Order.quantity} Item in Cart`).should('be.visible')
		cy.contains(`Proceed to Checkout`).should('be.visible')
		cy.contains(`View and Edit Cart`).should('be.visible')
		cy.contains(`${Order.valueItensTotal}`).should('be.visible')
		cy.get(MINICART.miniCartProductItemName).should('be.visible').contains(Order.product_name)
		cy.get(MINICART.miniCartProductItemPrice).should('be.visible').contains(Order.valueItem)

		cy.get(MINICART.miniCartDropDownProceedToCheckout).click()
		cy.url().should('include', 'checkout/#shipping')

		cy.fill_shipping(testData.email, testData.firstName, testData.lastName, testData.postCode, testData.streetAddress, testData.city, testData.state, testData.country, testData.phone, Order.shipping_value)
		
		cy.get(SHIPPING.PAYMENT.shippingDetails).should('be.visible')
		cy.contains(testData.firstName).should('be.visible')
		cy.contains(testData.lastName).should('be.visible')
		cy.contains(testData.streetAddress).should('be.visible')
		cy.contains(testData.city).should('be.visible')
		cy.contains(testData.country).should('exist')
		cy.contains(testData.postCode).should('be.visible')
		cy.contains(testData.state).should('exist')
		cy.contains(testData.phone).should('be.visible')

		cy.get(SHIPPING.PAYMENT.placeOrderBtn).should('be.visible').click()
		cy.url().should('include', 'checkout/onepage/success/')

		// assert registration data.
		cy.contains('Thank you for your purchase!').should('be.visible')
		cy.get(SHIPPING.PAYMENT.OrderNumber).invoke('text').then((text) => {
			cy.contains(`Your order # is: ${text}`).should('be.visible')
			orderDetails.orderNumber = text;
			orderDetails.email = testData.email;
			const orderDetailsJSON = JSON.stringify(orderDetails);
			// create JSON with order details.
			cy.writeFile('./cypress/fixtures/orderDetails.json', orderDetailsJSON);
		});

		cy.contains(`Email Address: ${testData.email}`).should('be.visible')		
		cy.contains('Continue Shopping').should('be.visible')
		cy.contains('Create an Account').should('be.visible')
	})
})
})