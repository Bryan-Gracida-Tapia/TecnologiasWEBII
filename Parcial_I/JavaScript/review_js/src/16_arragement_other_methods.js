const paper = {
    product: 'Paper',
    price: 10.0,
    quantity: 2,
}

const invoices = [
    {
        id: 1,
        name: 'Invoice 1',
        date: new Date(),
        clientInformation: {
            id: 1,
            name: 'John',
            lastName: 'Doe',
            age: 30,
        },
        items: [
            {
                id: 1,
                product: 'Item invoice 1 1',
                price: 10.0,
                quantity: 2,
            },
            {
                id: 2,
                product: 'Item invoice 1 2',
                price: 20.0,
                quantity: 1,
            },
            {
                id: 3,
                product: 'Item invoice 1 3',
                price: 30.0,
                quantity: 3,
            }
        ],
    },
    {
        id: 2,
        name: 'Invoice 2',
        date: new Date(),
        clientInformation: {
            id: 2,
            name: 'Jane',
            lastName: 'Doe',
            age: 25,
        },
        items: [
            {
                id: 1,
                product: 'Item invoice 2 1',
                price: 10.0,
                quantity: 1,
            },
            {
                id: 2,
                product: 'Item invoice 2 2',
                price: 20.0,
                quantity: 2,
            },
            {
                id: 3,
                product: 'Item invoice 2 3',
                price: 30.0,
                quantity: 1,
            },
            paper,
        ],
    },
    {
        id: 3,
        name: 'Invoice 3',
        date: new Date(),
        clientInformation: {
            id: 3,
            name: 'Mary',
            lastName: 'Jane',
            age: 28,
        },
        items: [
            {
                id: 1,
                product: 'Item invoice 3 1',
                price: 10.0,
                quantity: 3,
            },
        ],
    }
]

/*
const invoicesName = invoices.map((i) => { return i.name });

console.log(invoicesName);

const invoicesClientName = invoices.map((i) => { return i.clientInformation.name });

console.log(invoicesClientName);
*/

// Find method
const invoiceById = invoices.find((i) => { return i.id === 3 });

console.log(invoiceById);

const invoiceByName = invoices.find((i) => { return i.name === 'Invoice 2' });

console.log(invoiceByName);

const invoiceByClientName = invoices.find((i) => { return i.clientInformation.name === 'Mary' });

console.log(invoiceByClientName);

// Filter method
console.log("Aplication of the filter method");
const invoicesFilter = invoices.filter((i ) => i.id > 1);

console.log(invoicesFilter);

 // the method includes() is used to check if the array contains a specific element. 
 // In this case, we are checking if the items array of each invoice contains the paper object.
 //  If it does, the invoice will be included in the filtered array.
console.log("Aplication of the filter method with includes() method");
const invoicesFilterTwo = invoices.filter((i) => i.items.includes(paper));
console.log(invoicesFilterTwo);

// Some method 
const result = invoices.some((i) => i.clientInformation.name === 'John');
console.log(result); // Output: true