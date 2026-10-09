const users = ['John Doe', 'Jane Doe', 'Mary Jane', 'Peter Parker'];

const [user1, user2, user3, user4] = users;
console.log(`User 1: ${user1}, User 2: ${user2}, User 3: ${user3}, User 4: ${user4}`);

const [firstUser, secondUser, ...otherUsers] = users;
console.log(`First User: ${firstUser}, Second User: ${secondUser}, Other Users: ${otherUsers}`);