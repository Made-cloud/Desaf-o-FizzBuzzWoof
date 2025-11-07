// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 150; i++) {
    if (i % 3 === 0 && i % 5 === 0) {

        console.log("fizzbuzz");
    } else if (i % 3 === 0) {

        console.log("fizz");
    } else if (i % 5 === 0) {

        console.log("buzz");
    } else {
      
        console.log(i);
    }
}