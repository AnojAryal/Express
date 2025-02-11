console.log("Before");

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos);
        console.log(commits);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

displayCommits();

console.log("After");


// Asynchronous function to get the user
function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Reading a user from a database...");
            resolve({ id: id, gitHubUsername: 'anoj' });
        }, 2000);
    });
}

// Asynchronous function to get repositories
function getRepositories(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Calling GitHub API...");
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

// Asynchronous function to get commits
function getCommits(repos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetching commits...");
            resolve(['commit1', 'commit2', 'commit3']);
        }, 2000);
    });
}
