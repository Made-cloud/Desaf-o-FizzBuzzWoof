// Refer to Task 4 in your Instructions to complete this task

// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 150; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {

        console.log("fizzbuzzwoof");
    } else if (i % 3 === 0 && i % 5 === 0) {

        console.log("fizzbuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {

        console.log("fizzwoof");
    } else if (i % 5 === 0 && i % 7 === 0) {

        console.log("buzzwoof");
    } else if (i % 3 === 0) {

        console.log("fizz");
    } else if (i % 5 === 0) {

        console.log("buzz");
    } else if (i % 7 === 0) {
      
        console.log("woof");
    } else {
      
        console.log(i);
    }
}

// ESTA ES OTRA LALTERNATIVA
// for (let i = 1; i <= 150; i++) {
//     let output = '';
//     if (i % 3 === 0) {
//         output += 'Fizz'; 
//     }
//     if (i % 5 === 0) {
//         output += 'Buzz';
//     }
//     if (i % 7 === 0) {
//         output += 'Woof';
//     }
//     if (output === '') {
//         console.log(i);
//     } else {
//         console.log(output);
//     }
// }