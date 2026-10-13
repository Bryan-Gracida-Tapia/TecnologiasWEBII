import { findInvoiceByName } from "./data/invoices";


findInvoiceByName('John').then((result) => {
    console.log(result);
    console.log("Simulate some homework with resolve")
}).catch((error) => {
    console.error(error);
    console.log("Simulate some homework with reject")
});

findInvoiceByName('Jane').then(console.log).catch(console.error);