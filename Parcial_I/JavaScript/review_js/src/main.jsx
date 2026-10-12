import invoiceByClient, {invoices,paper} from './data/invoices.js'

// the method map() returns a new array with the results of calling a provided function on every element in the calling array.
const invoicesName = invoices.map((i) => {return i.name})

console.log(invoicesName)

const InvoicesClientName = invoices.map((i) => {return i.clientInformation.name})

console.log(InvoicesClientName)

// the method find() returns the value of the first element in the provided array in which the provided function returns true. Otherwise undefined is returned.
console.log('Buscar por id de factura')
const invoiceById = invoices.find((i) => i.id === 2)
console.log(invoiceById)

// invoiceByClient is a function that takes a client name as an argument and returns the invoice object that matches the client name.
console.log('Buscar por nombre de cliente')
console.log(invoiceByClient('John'))


