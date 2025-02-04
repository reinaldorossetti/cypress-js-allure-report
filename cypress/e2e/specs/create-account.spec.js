import { ACCOUNT } from './selectors/shippingPage.js'
import DataShipping from '../../fixtures/dataProducts.js'



describe('Account', () => {
		it('Create Account' , () => {
			//const testData = DataShipping()
			// open base Url
			cy.visit('/')
			cy.create_new_account(DataShipping.email, DataShipping.firstName, DataShipping.lastName, DataShipping.password)


		})
})