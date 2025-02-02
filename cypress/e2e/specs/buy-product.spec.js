import { HOME_PAGE } from './selectors/homePage.js'
import { CART_PAGE } from './selectors/minicartPages.js'
import { SHIPPING_PAGE } from './selectors/shippingPage.js'
import DataShipping from '../../fixtures/dataProducts.js'


let orderDetails = {'orderNumber': ''};

describe('Purchase functionalities', () => {
	context('Orders', () => {

		it('Add itens to cart and complete the order' , () => {

			// open base Url
			cy.visit('/')

			var product_name = 'Radiant Tee'
			var quantity = 2
			var valueItem = '$22.00'
			var valueItensTotal = '$44.00'
			var size = 'XS'
			var color = 'Blue'
			const testData = DataShipping()
			var shipping_value = '$10.00'

			cy.log(testData)
			cy.add_to_cart(product_name, valueItem, size, color, quantity)

            cy.contains(`You added ${product_name} to your shopping cart.`).should('be.visible')
            cy.get(HOME_PAGE.BLOCK_PRODUCTS.showcart_number).then(($el)=>{ $el.get(0).scrollIntoView()}).contains(`${quantity}`);
            
			// assert number of items in cart
			cy.get(HOME_PAGE.BLOCK_PRODUCTS.quantity).invoke('val').then((value) => {
                expect(value).equal(`${quantity}`)
            });

			cy.get(CART_PAGE.MINICART.miniCart).click()
			cy.get(CART_PAGE.MINICART.miniCartSubTotal).should('be.visible')

			cy.contains(`${quantity} Item in Cart`).should('be.visible')
			cy.contains(`Proceed to Checkout`).should('be.visible')
			cy.contains(`View and Edit Cart`).should('be.visible')
			cy.contains(`${valueItensTotal}`).should('be.visible')

			cy.get(CART_PAGE.MINICART.miniCartDropDownProceedToCheckout).click()
			cy.url().should('include', 'checkout/#shipping')

			cy.fill_shipping(testData.email, testData.firstName, testData.lastName, testData.postCode, testData.streetAddress, testData.city, testData.state, testData.country, testData.phone, shipping_value)
			
			// assert all the values entered at shipping are correctly saved at payment page
			cy.get(SHIPPING_PAGE.PAYMENT.shippingDetails).should('be.visible').then(function(addressDetails){
				expect(addressDetails[0].innerText).include(testData.firstName)
				expect(addressDetails[0].innerText).include(testData.lastName)
				expect(addressDetails[0].innerText).include(testData.streetAddress)
				expect(addressDetails[0].innerText).include(testData.city)
				expect(addressDetails[0].innerText).include(testData.country)
				expect(addressDetails[0].innerText).include(testData.postCode)
				expect(addressDetails[0].innerText).include(testData.state)
				expect(addressDetails[0].innerText).include(testData.phone)
			})

			cy.get(SHIPPING_PAGE.PAYMENT.placeOrderBtn).should('be.visible').click()
			cy.url().should('include', 'checkout/onepage/success/')

			// assert registration data.
			cy.contains('Thank you for your purchase!').should('be.visible')
			cy.get('.checkout-success > p > span').invoke('text').then((text) => {
                cy.contains(`Your order # is: ${text}`).should('be.visible')
				orderDetails.orderNumber = text;
				const orderDetailsJSON = JSON.stringify(orderDetails);
				// Código para salvar o JSON em um arquivo
				cy.writeFile('./cypress/fixtures/orderDetails.json', orderDetailsJSON);
            });

			cy.contains(`Email Address: ${testData.email}`).should('be.visible')		
			cy.contains('Continue Shopping').should('be.visible')
			cy.contains('Create an Account').should('be.visible')
			cy.log(orderDetails)
		})
	})
})