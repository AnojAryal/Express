console.log("Before");
const user = getUser(1,  (user)=> {
    console.log("User", user);

    //get the repositories
    getRepositories(user.gitHubUsername,  (repos)=> {
        console.log("Repos", repos);
    });
});

console.log("After");


//asyncronous function
function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database...");
        //using callback function to return the user
        callback({ id: id, gitHubUsername: 'anoj' });
    }, 2000);

}

//asyncronous function to get the repositories with callback
function getRepositories(username, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API...");
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}