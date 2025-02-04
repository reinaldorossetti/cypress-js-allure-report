
import { HOME_PAGE } from '../e2e/specs/selectors/homePage'
import { SHIPPING } from '../e2e/specs/selectors/shippingPage'
import { ACCOUNT } from '../e2e/specs/selectors/account'


/**
 * 
 * 
 */
Cypress.Commands.add('add_to_cart', (product_name, value, size, color, quantity = 1) => {

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
  cy.get(SHIPPING.email).type(email)
  cy.contains('You can create an account after checkout.').should('exist')

  cy.contains('First Name').should('exist')
  cy.get(SHIPPING.firstName).type(firstName)

  cy.contains('Last Name').should('exist')
  cy.get(SHIPPING.lastName).type(lastName)

  cy.contains('Street Address').should('exist')
  cy.get(SHIPPING.streetAddress).type(streetAddress)

  cy.contains('City').should('exist')
  cy.get(SHIPPING.city).type(city)

  cy.contains('Country').should('exist')
  cy.get(SHIPPING.country).select(country)

  cy.get(HOME_PAGE.COMMON.loadingSpinner).should('not.exist')
  cy.contains('Zip/Postal Code').should('exist')
  cy.get(SHIPPING.postCode).type(postCode)

  cy.get(HOME_PAGE.COMMON.loadingSpinner).should('not.exist')
  cy.contains('State/Province').should('exist')
  cy.get(SHIPPING.stateSelect).select(state)

  cy.contains('Phone Number').should('exist')
  cy.get(SHIPPING.phone).type(phone_number)

  cy.contains(shipping_value).should('be.visible').click() 
  cy.get(HOME_PAGE.COMMON.nextBtn).click()
  cy.url().should('include', '#payment')

})

Cypress.Commands.add('create_new_account', (email, firstName, lastName, password) => {
  cy.contains('Create an Account').should('exist')
  cy.get(ACCOUNT.NEW_ACCOUNT.createAccount).click()
  
  cy.contains('First Name').should('exist')
  cy.get(ACCOUNT.NEW_ACCOUNT.firstName).type(firstName)

  cy.contains('Last Name').should('exist')
  cy.get(ACCOUNT.NEW_ACCOUNT.lastName).type(lastName)

  cy.contains('Email').should('exist')
  cy.get(ACCOUNT.NEW_ACCOUNT.email).type(email)

  cy.contains('Password').should('exist')
  cy.get(ACCOUNT.NEW_ACCOUNT.password).type(password)

  cy.contains('Confirm Password').should('exist')
  cy.get(ACCOUNT.NEW_ACCOUNT.passwordConfirmation).type(password)

  cy.get(ACCOUNT.NEW_ACCOUNT.createAccountButton).click()
})

Cypress.Commands.add('login', (email, password) => {
  cy.contains('Sign In').should('exist')
  cy.get(ACCOUNT.LOGIN.signIn).click()

  cy.contains('Email').should('exist')
  cy.get(ACCOUNT.LOGIN.email).type(email)

  cy.contains('Password').should('exist')
  cy.get(ACCOUNT.LOGIN.password).type(password)

  cy.get(ACCOUNT.LOGIN.signInButton).click()
})

Cypress.Commands.add('find_product_name', (product_name) => {
  cy.get(HOME_PAGE.BLOCK_PRODUCTS.productItem).contains(product_name).click()
  cy.get(HOME_PAGE.BLOCK_PRODUCTS.productItem).contains(product_name).should('not.exist')
})

Cypress.Commands.add('navbar_by_category', (category_item, menu_item) => {
  cy.get(HOME_PAGE.NAVBAR.productItem).contains(category_item).then(($el)=>{ $el.get(0).scrollIntoView()}).click()
  cy.get(HOME_PAGE.NAVBAR.categoriesMenu).then(($el)=>{ $el.get(0).scrollIntoView()}).contains(menu_item).click()
})

Cypress.Commands.add('seach_bar', (product_name) => {
  cy.get(HOME_PAGE.BASE.searchInput).then(($el)=>{ $el.get(0).scrollIntoView()}).type(product_name).type('{enter}')
  cy.contains(product_name).should('exist')
})
