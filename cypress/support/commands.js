
import { HOME_PAGE } from '../e2e/specs/selectors/homePage'

/**
 * 
 * 
 */
Cypress.Commands.add('Add_to_Cart', (product_name, value, size, color, quantity=1) => {
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
                var valueInt= parseInt(value);
                if (quantity > valueInt) {
                  cy.get(HOME_PAGE.BLOCK_PRODUCTS.quantity).clear().type(quantity);
            }
            });
            
            cy.get(HOME_PAGE.BLOCK_PRODUCTS.addToCartBtn).click()
            cy.get(HOME_PAGE.BLOCK_PRODUCTS.addToCartSuccessMsg).should('be.visible')

})

