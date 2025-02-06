console.log("Before");
//asyncronous or non blocking function
setTimeout(() => {
    console.log("Reading a user from a database...");
}, 2000);
console.log("After");