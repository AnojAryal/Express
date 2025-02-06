//object that holds the eventual result of an asynchronous operation
//initially in pending state, then settled in either fulfilled or rejected state

const p = new Promise((resolve, reject) => {
  //kick off some async work
  //...
  setTimeout(() => {
    // resolve(1);
    reject(new Error('message')); // pending => rejected
  }, 2000);

  
});

//consume the promise
p
    .then(result => console.log('Result', result)) // fulfilled
    .catch(err => console.log('Error', err.message)); // rejected   