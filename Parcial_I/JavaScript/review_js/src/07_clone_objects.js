const invoice = {
    id: 1,
    name: "Invoice 001",
    date: new Date(),
    client: {
        id: 1,
        name: "John Doe",
        lastName: "Smith",
        age: 30,
    },
    items: [
        {
            id: 1,
            name: "Item 001",
            price: 50.25,
            quantity: 2,
        },
        {
            id: 2,
            name: "Item 002",
            price: 25.00,
            quantity: 1,
        },
        {
            id: 3,
            name: "Item 003",
            price: 10.00,
            quantity: 5,
        },
    ],
    total: function() {
        let totalAmount = 0;
        this.items.forEach(item => {
            totalAmount += item.price * item.quantity;
        });

        return totalAmount;
    },
    greeting: function() {
        return `Hello, ${this.client.name} ${this.client.lastName}`;
    },
};
// clonar operadores con el operador spread
const invoiceTwo = {...invoice}
//const invoiceTwo = invoice;
const result = invoiceTwo == invoice;
console.log(result);

if (result) {
    console.log("they are the same");
} else {
    console.log("they are different");
}

invoiceTwo.id = 20;
console.log(invoice.id);
console.log(invoiceTwo.id);