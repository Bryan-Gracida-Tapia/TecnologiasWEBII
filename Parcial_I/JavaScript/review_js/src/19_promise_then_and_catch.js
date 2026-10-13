import invoiceByClient from './data/invoices.js'

// the ´promise 
const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        const result = invoiceByClient('Jane')
        //console.log(result);

        if (result) {
            resolve(result)
        } else {
            reject('Error: Not find the invoice by client name')
        }

    }, 2500);
})
/*
promise.then((result) => {
    console.log(result);
    console.log("Simulate some homework with resolve")
}).catch((error) => {
    console.error(error);
    console.log("Simulate some homework with reject")
});
*/
promise.then(console.log).catch(console.error);