const invoice = {
    id: 1,
    name: "Invoice 001",
    date: new Date(),
    client: "John Doe",
    total: 100.50,
};

console.log(invoice);
console.log(invoice.name);

invoice.client = "Jane Smith";
invoice.total = 160.75;

console.log(invoice);