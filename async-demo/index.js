console.log("Before");
const user = getUser(1, getRepositories);
console.log("After");


function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}


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