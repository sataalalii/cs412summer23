let userInfo: [string, number];

userInfo = ['John Doe', 25]; // This is okay

// userInfo = [25, 'John Doe']; // This will cause an error because the types are in the wrong order

console.log(userInfo[0].substring(1)); // This will work because the first element is a string
// console.log(userInfo[1].substring(1)); // This will cause an error because the second element is a number

//userInfo[3] = 'Jane Doe'; // Error, Property '3' does not exist on type '[string, number]'.
