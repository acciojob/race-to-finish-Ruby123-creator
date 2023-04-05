
// console.log(Math.floor(Math.random()*6000))

let ans = document.getElementById("output")
window.promises =[];
let myPromise1 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve("promise1 resolved")
    },Math.floor(Math.random()*6000))
  });
  let myPromise2 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve("promise2 resolved")
    },Math.floor(Math.random()*6000))
  });
  let myPromise3 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve("promise3 resolved")
    },Math.floor(Math.random()*6000))
  });
  let myPromise4 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve("promise4 resolved")
    },Math.floor(Math.random()*6000))
  });
  let myPromise5 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve("promise5 resolved")
    },Math.floor(Math.random()*6000))
  });

  promises.push(myPromise1,myPromise2,myPromise3,myPromise4,myPromise5)

  Promise.any(promises)
  .then((res) => {
    ans.innerText = res;
    // endingTime = new Date();

    // console.log("Time Diff", endingTime - startingTime);
  })