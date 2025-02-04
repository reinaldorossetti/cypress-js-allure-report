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
		productItem: '.navigation .ui-menu-item .level-top',
		categoriesMenu: '.categories-menu .item',
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