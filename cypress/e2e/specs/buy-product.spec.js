import { HOME_PAGE } from './selectors/homePage.js'


describe('Purchase functionalities', () => {
	context('Orders', () => {

		it('Add one item to cart and complete the order' , () => {

			// open base Url
			cy.visit('/')

			var product_name = 'Radiant Tee'
			var quantity = 2
			var valueItem = '$22.00'
			var size = 'XS'
			var color = 'Blue'

			cy.Add_to_Cart(product_name, valueItem, size, color, quantity)

            cy.contains(`You added ${product_name} to your shopping cart.`).should('be.visible')
            cy.get(HOME_PAGE.BLOCK_PRODUCTS.showcart_number).then(($el)=>{ $el.get(0).scrollIntoView()}).contains(`${quantity}`);
            cy.get(HOME_PAGE.BLOCK_PRODUCTS.quantity).invoke('val').then((value) => {
                expect(value).equal(`${quantity}`)
            });

			// cy.get('input#qty').then((value) => {
			// 	expect(parseInt(value)).equal(`${quantity}`)})
  
			// assert number of items in cart
			// cy.get(HOME_PAGE.miniCartCounter).invoke('text').then(function(cartNumber){
			// 	expect(Number(cartNumber)).to.eq(1)
			// })

			// cy.get(OTHER.miniCart).click()
			// cy.get(OTHER.miniCartSubTotal).should('be.visible')
			// cy.get(OTHER.miniCartDropDownProceedToCheckout).click()

			// cy.url().should('include', 'checkout/#shipping')

			// // fill in the info for shipping
			// cy.get(SHIPPING.email).type(testData.email)
			// cy.get(SHIPPING.firstName).type(testData.firstName)
			// cy.get(SHIPPING.lastName).type(testData.lastName)
			// cy.get(SHIPPING.streetAddress).type(testData.streetAddress)
			// cy.get(SHIPPING.city).type(testData.city)
			// cy.get(SHIPPING.country).select(testData.country)

			// // once you change the country the page will render again to populate State/Province. We wait for the loader to finish
			// cy.get(COMMON.loadingSpinner).should('not.exist')
			// cy.get(SHIPPING.postCode).type(testData.postCode)
			// cy.get(COMMON.loadingSpinner).should('not.exist')
			// cy.get(SHIPPING.stateSelect).select(testData.state)
			// cy.get(SHIPPING.phone).type(testData.phone)
			// cy.get(HTML.inputRadio).first().click()

			// cy.get(COMMON.nextBtn).click()

			// cy.url().should('include', '#payment')

			// // assert all the values entered at shipping are correctly saved at payment page
			// cy.get(PAYMENT.shippingDetails).should('be.visible').then(function(addressDetails){
			// 	expect(addressDetails[0].innerText).include(testData.firstName)
			// 	expect(addressDetails[0].innerText).include(testData.lastName)
			// 	expect(addressDetails[0].innerText).include(testData.streetAddress)
			// 	expect(addressDetails[0].innerText).include(testData.city)
			// 	expect(addressDetails[0].innerText).include(testData.country)
			// 	expect(addressDetails[0].innerText).include(testData.postCode)
			// 	expect(addressDetails[0].innerText).include(testData.state)
			// 	expect(addressDetails[0].innerText).include(testData.phone)
			// })
			// cy.get(PAYMENT.placeOrderBtn).should('be.visible').click()

			// cy.url().should('include', 'checkout/onepage/success/')

			// // assert email and registration pops up
			// cy.get(SUCCESS_PURCHASE.createAccountAreaText).invoke('text').should('include', testData.email)
		})
	})
})