const myPromise = new Promise((resolve, reject) => {
    let age = 40;
    if (age >= 18) {
        // throw new Error("new Error")
        resolve("Eligible to vote.")
    } else {
        reject("Not eligible for vote.")
    }
})
// myPromise.then((msg) => console.log(msg))
//     .catch((e) => console.log(e))
//     // .finally(()=>console.log("final outcome"))
// console.log(myPromise);


// const myPromise2 = async ()=>{
//     let data = await myPromise;
//     console.log(data);   
// }
// myPromise2();

async function handlePromise() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch {
        console.log("some error ocured.");
    } finally {
        console.log("end of promise");
    }
}
handlePromise();