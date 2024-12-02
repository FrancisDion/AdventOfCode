const listOne = [3, 4, 2, 1, 3, 3];
const listTwo = [4, 3, 5, 3, 9, 3];
let organizedListOne = [];
let organizedListTwo = [];
let difference = [];

//sort each list into two new arrays, from small to big
organizedListOne = listOne.sort(function(a, b){return a-b});
organizedListTwo = listTwo.sort(function(a, b){return a-b});


//function to find absolute
function findDifference(a,b) {
    return (Math.abs(a - b));
}

//push absolute of each number in a new array
for (let i = 0; i< organizedListOne.length; i++) {
    if (organizedListOne[i] === organizedListTwo[i]) {
        difference.push(0);
    }else {
        difference.push(findDifference(organizedListOne[i],organizedListTwo[i]));
    }
}

//sum of all numbers
let sumOfDifference = difference.reduce((accumulator, currentValue) => accumulator + currentValue, 0);





console.log("Ogiginal list")
console.log(listOne);
console.log(listTwo);
console.log("organized lists");
console.log(organizedListOne);
console.log(organizedListTwo);
console.log("Difference");
console.log(difference);
console.log("Sum of all numbers");
console.log(sumOfDifference);