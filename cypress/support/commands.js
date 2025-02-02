
import { HOME_PAGE } from '../e2e/specs/selectors/homePage'
import { SHIPPING_PAGE } from '../e2e/specs/selectors/shippingPage'


/**
 * 
 * 
 */
Cypress.Commands.add('add_to_cart', (product_name, value, size, color, quantity = 1) => {
  cy.get(`.product-item-name a[title=\"${product_name}\"]`).click()
  cy.get(`.product-item-name a[title=\"${product_name}\"]`).should('not.exist')

  cy.contains(product_name).should('be.visible')
  cy.contains(`${value}`).should('be.visible')
  cy.contains('In stock').should('be.visible')
  cy.contains('Add to Cart').should('be.visible')
  cy.contains('Add to Wish List').should('be.visible')
  cy.contains('Add to Compare').should('be.visible')

  cy.get(`#product-options-wrapper [option-label="${size}"]`).click()
  cy.contains('Size').should('be.visible')

  cy.get(`.color [option-label="${color}"]`).click()
  cy.contains('Color').should('be.visible')
  cy.contains('Qty').should('be.visible')

  cy.get(HOME_PAGE.BLOCK_PRODUCTS.quantity).invoke('val').then((value) => {
    var valueInt = parseInt(value);
    if (quantity > valueInt) {
      cy.get(HOME_PAGE.BLOCK_PRODUCTS.quantity).clear().type(quantity);
    }
  });

  cy.get(HOME_PAGE.BLOCK_PRODUCTS.addToCartBtn).click()
  cy.get(HOME_PAGE.BLOCK_PRODUCTS.addToCartSuccessMsg).should('be.visible')

})

Cypress.Commands.add('fill_shipping', (email, firstName, lastName, postCode, streetAddress, city, state, country, phone_number, shipping_value) => {
  // fill in the SHIPPING PAGE
  cy.contains('Shipping Address').should('be.visible')
  cy.contains('Email Address').should('exist')
  cy.get(SHIPPING_PAGE.email).type(email)
  cy.contains('You can create an account after checkout.').should('exist')

  cy.contains('First Name').should('exist')
  cy.get(SHIPPING_PAGE.firstName).type(firstName)

  cy.contains('Last Name').should('exist')
  cy.get(SHIPPING_PAGE.lastName).type(lastName)

  cy.contains('Street Address').should('exist')
  cy.get(SHIPPING_PAGE.streetAddress).type(streetAddress)

  cy.contains('City').should('exist')
  cy.get(SHIPPING_PAGE.city).type(city)

  cy.contains('Country').should('exist')
  cy.get(SHIPPING_PAGE.country).select(country)

  cy.get(HOME_PAGE.COMMON.loadingSpinner).should('not.exist')
  cy.contains('Zip/Postal Code').should('exist')
  cy.get(SHIPPING_PAGE.postCode).type(postCode)

  cy.get(HOME_PAGE.COMMON.loadingSpinner).should('not.exist')
  cy.contains('State/Province').should('exist')
  cy.get(SHIPPING_PAGE.stateSelect).select(state)

  cy.contains('Phone Number').should('exist')
  cy.get(SHIPPING_PAGE.phone).type(phone_number)

  cy.contains(shipping_value).should('be.visible').click() 
  cy.get(HOME_PAGE.COMMON.nextBtn).click()
  cy.url().should('include', '#payment')

})