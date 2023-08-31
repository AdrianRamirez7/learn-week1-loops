//1
for (let i = 1; i <= 20; i++) {
    console.log(i)
};
//2
for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}
//3
for (let i = 1; i <= 20; i++) {
    console.log(i * 3);
}
//4
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i); // Log even number
    } else {
        console.log("ODD"); // Log "ODD" for odd numbers
    }
}

//5 Consider var
const nums = [3, 57, -9, 20, 67];
let largestNum = nums[0]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
        largestNum = nums[i];
    }
}

console.log("The largest number is " + largestNum)

//lowest num
let smallestNum = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNum) {
        smallestNum = nums[i];
    }
}

console.log(smallestNum)

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] % 2);
}

//Last section
const myString = "learn student";



//stretch
for (let i = 5; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
};

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else {
        console.log(i);
    }
};

