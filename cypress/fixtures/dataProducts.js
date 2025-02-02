import { faker } from '@faker-js/faker'
// Set the locale to US
faker.locale = 'en_US';

const DataShipping = () => {
	const data = {
		email : faker.internet.email(),
		firstName : faker.person.firstName(),
		lastName : faker.person.lastName(),
		streetAddress : faker.location.streetAddress(),
		city : faker.location.city(),
		country : 'United States',
		postCode : faker.location.zipCode(),
		state : faker.location.state(),
		phone : faker.phone.number(),
	};
	return data;
}

export default DataShipping