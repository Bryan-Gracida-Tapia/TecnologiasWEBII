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
    total: 100.50,
    greeting: function() {
        return `Hello, ${this.client.name} ${this.client.lastName}`;
    },
};

invoice.client.name = "Jane";
invoice.client.age = 35;
invoice.total = 160.75;
console.log(invoice);

const greetingMessage = invoice.greeting();
console.log(greetingMessage);
