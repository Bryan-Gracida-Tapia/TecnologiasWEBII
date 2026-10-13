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

const invoiceByClient = (clientName) => {
    return invoices.find((i) => i.clientInformation.name === clientName)
}

export const findInvoiceByName = (name) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = invoiceByClient(name)
            if (result) {
                resolve(result)
            } else {
                reject(`Error: Not find the invoice by client name ${name}`)
            }
        }, 2500);
    });
    return promise;
}

export {
    paper,
    invoices,
    invoiceByClient as default
}