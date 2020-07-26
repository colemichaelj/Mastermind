'use strict'
const generateHint = () =>  {
    for (let i=0; i < solution.length; i++) {
if (answer[i] == solution[i]) {

        solution[i] = "matched";
        answer[i] = "check";
}
    }
    // your code here
}
const mastermind = (guess) => {
    solution = 'abcd'; // Comment this out to generate a random solution

    pick1 = colors[Math.floor(Math.random() * 8)];
    pick2 = colors[Math.floor(Math.random() * 8)];
    pick3= colors[Math.floor(Math.random() * 8)];
    pick4 = colors[Math.floor(Math.random() * 8)];

    answer = [pick1, pick1, pick3, pick4];
    console.log(answer);  