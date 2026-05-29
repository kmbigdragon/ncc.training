// Declaration function
function helloWorld1() {
    console.log("Hello World!1");
}

helloWorld1();

// Expression function
const helloWorld2 = function () {
    console.log("Hello World!2");
}

helloWorld2();

// Arrow function
const helloWorld3 = () => {
    console.log("Hello World!3");
}

helloWorld3();

// Global Scope
const INF = 1e9;

// Function Scope
const test = () => {
    const MOD = 1e9 + 7;
}

// Block Scope
{
    const EPS = 1e-6;
}