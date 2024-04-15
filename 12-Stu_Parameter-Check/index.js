const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log("Argument 1:", arg1);
console.log("Argument 2:", arg2);

if (arg1 === arg2) {
    console.log("They are equal in type and value.");
    }
else if (arg1 == arg2) {
    console.log("They are equal in value.");
    }
else {
    console.log("They are not equal in type or value.");
    }
