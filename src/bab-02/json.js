var data = {
	"firstName": "John",
	"lastName": "Smith",
	"age": 25,
	"address": {
		"streetAddress": "21 2nd Street",
		"city": "New York",
		"state": "NY",
		"postalCode": "10021"
	},
	"phoneNumber": 
	{
		"home": "212 555-1234",
		"fax": "646 555-4567"
	}
}

console.log(data.firstName + " " + data.lastName + 
		" has this phone number = " 
		+ data.phoneNumber.home );

// hasil:
// John Smith has this phone number = 212 555-1234
