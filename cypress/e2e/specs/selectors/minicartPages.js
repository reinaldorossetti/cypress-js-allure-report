
export const SELECTORS = {
	


	PRODUCT_FILTERS: {
		filterItem: '.filter-options-item > div',
		filterItemActive: '.filter-options-item.active',
		item : '.item',
	},
	OTHER : {
		miniCart: '[data-block="minicart"]', 
		miniCartCounter: '[data-block="minicart"] .counter .counter-number',
		miniCartSubTotal: '.subtotal .price-container',
		miniCartDropDownProceedToCheckout: '[id="top-cart-btn-checkout"]',
	},
	SHIPPING: {
		email: '#shipping #customer-email',
		firstName: '[name="firstname"]',
		lastName: '[name="lastname"]',
		streetAddress: '[name="street[0]"]',
		city: '[name="city"]',
		stateSelect: '[name="shippingAddress.region_id"] > div > select',
		country: '[name="country_id"]',
		phone: '[name="telephone"]',
		postCode: '[name="postcode"]'
	},
	PAYMENT: {
		shippingDetails: '.ship-to .shipping-information-content',
		placeOrderBtn: '[title="Place Order"]',
	},
	SUCCESS_PURCHASE : {
		createAccountAreaText: '[id="registration"] p',
		x : 'x'
	},
	HTML : {
		a: 'a',
		inputRadio: 'input.radio',
		typeCheckbox: '[type="checkbox"]'
	}
}