export const ACCOUNT = {

	NEW_ACCOUNT: {
		createAccount: '.panel > .header > :nth-child(3) > a',
		firstName: '#firstname',
		lastName: '#lastname',
		email: '#email_address',
		password: '#password',
		passwordConfirmation: '#password-confirmation',
		createAccountButton: '#form-validate > .actions-toolbar > div.primary > .action > span',
	},

	LOGIN: {
		signIn: '.panel > .header > .authorization-link > a',
		email: '#email',
		password: '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass',
		signInButton: '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2',
	}
}