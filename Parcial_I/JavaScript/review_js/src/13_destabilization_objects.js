const user = {
    name : 'John Doe',
    age : 30,
    email : 'johndoe@gmail.com',
    ranking: 9,
}

const details = (user) => {
    const { name, age, ranking } = user;
    console.log(`Name: ${name}, Age: ${age}, Ranking: ${ranking}`);
}

// method 2
const details2 = ({ name, age, ranking }) => {
    console.log(`Name: ${name}, Age: ${age}, Ranking: ${ranking}`);
}

console.log(details(user));
console.log(details2(user));