
export const SHIPPING_PAGE = {

    email: '#shipping #customer-email',
    firstName: 'input[name="firstname"]',
    lastName: 'input[name="lastname"]',
    postCode: 'input[name="postcode"]',
    streetAddress: 'input[name="street[0]"]',
    city: 'input[name="city"]',
    stateSelect: '[name="shippingAddress.region_id"] > div > select',
    country: '[name="country_id"]',
    phone: 'input[name="telephone"]',

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