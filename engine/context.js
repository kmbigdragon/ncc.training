const print = (x) => {
    console.log(x);
};

// Call stack
function test1() { 
    return 1;
}
function test2() { 
    print(test1());
    return 2; 
}
function test3() {
    print(test2());
    return 3;
}
// 1 2 3 because test 1 is the last called, test 2 is the second called and test3 is the first called
print(test3());

print("");

// Execution priority
print(1); // Call stack: print(1) -> execute;
setTimeout(() => print(2)); // Call stack: empty, Macrotask: print(2);
Promise.resolve().then(() => print(3)); // Call stack: empty, Macrotask queue: print(2), Microtask queue: print(3);
Promise.resolve().then(() => print(4)); // Call stack: empty, Macrotask queue: print(2), Microtask queue: print(3), print(4);
setTimeout(() => print(5)); // Call stack: empty, Macrotask queue: print(2), print(5), Microtask queue: print(3), print(4);
print(6); // Call stack: print(6) -> execute, Macrotask queue: print(2), print(5), Microtask queue: print(3), print(4);
// Move print(3) from Microtask queue to call stack and execute
// Move print(4) from Microtask queue to call stack and execute
// Move print(2) from Macrotask queue to call stack and execute
// Move print(5) from Macrotask queue to call stack and execute

// 1 6 3 4 2 5, because 1st and 4th line is synchronous, so it enters the stack and immediately be executed and popped out.
// Asynchronous Microtask like Promise has higher priority than Macrotask like setTimeout() so when call stack is empty,
// the event loop starts checking Microtask queue, move them to stack and execute until it's empty
// then the event loop checks Macrotask queue, move them to stack and execute until it's empty