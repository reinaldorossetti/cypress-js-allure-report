// home page elements/locators.

export const HOME_PAGE = {

	BASE: {
		footerLinks: '.footer li a',
		searchInput: '[id="search"]',
		searchIconBtn: 'button.action.search',
	},

	COMMON: {
		nextBtn: '[data-role="opc-continue"]',
		loadingSpinner: '[title="Loading..."]',
	},

	NAVBAR: {
		whatsNew: '[id="ui-id-3"]',
		women: '#ui-id-4',
		men: '[id="ui-id-5"]',
		gear: '[id="ui-id-6"]',
		training: '[id="ui-id-7"]',
		sale: '[id="ui-id-8"]',
		navbarLinks: '.navigation .level-top > a',
		tops: '#ui-id-9',
		tees: '#ui-id-13',
	},

	// selectors may be grouped per component 
	BLOCK_PRODUCTS: {
		productItem: '.product-item',
		productItemPhoto: '.product-item-photo',
		productItemInfo: '.product-item-info',
		productItemName: '.product-item-name',
		addToCartBtn: '#product-addtocart-button',
		addToCartSuccessMsg: '[data-ui-id="message-success"]',
		priceContainer: '.price-container',
		sorter: '[id="sorter"]',
		quantity: 'input#qty',
		showcart_number: '.counter-number',
	},

	blocksPromoLinks: '.blocks-promo a',

}