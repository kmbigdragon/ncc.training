# VARIABLES
- `var` is used before to declare a variable, but it's deprecated due to its hoisting issue.
For example:

  ```javascript
  console.log(a);
  // undefined
  var a = 1;
  ```
  in the above code, there's no `a` declared before `console.log(a)` but logging out `a` still doesn't throw an error. Instead, it logged `undefined`. This is because `var` is hoisting, and its declaration is automatically moved on top, behaving like the code below.
  
  ``` javascript
  var a;
  console.log(a);
  // undefined
  a = 1;
  ```

- `let` is a better version of `var` in ES6 that solve the problem of `var` since it's in Temporal Dead Zone and cannot be called before declaration. `let` is used to declare a editable variable in block scope.
  ```javascript
  let a = 1;
  {
    let b = 2;
  }
  console.log(b);
  // ReferenceError
  ```

- `const` is similar to `let` but it declares a constant variable whose value is fixed and cannot be changed after declaration.

   ```javascript
   const EPS = 1e-6;
   const INF = 1e9;
   const MOD = 1e9 + 7;
   ```

## Data Types

- **Primitives**: immutable values stored directly in stack memory.
  - `String`
    ```javascript
    const name = "Minh";
    ```
  - `Number`
    ```javascript
    const age = 20;
    ```
  - `Boolean`
    ```javascript
    const isApproved = true;
    ```
  - `Null`
    ```javascript
    const data = null;
    ```
  - `Undefined`
    ```javascript
    let score;
    console.log(score); // undefined
    ```
  - `Symbol`
    ```javascript
    const id = Symbol("id");
    ```

- **References**: objects stored by reference in memory.
  - `Object`
    ```javascript
    const user = {
      name: "Minh",
      age: 20
    };
    ```
  - `Array`
    ```javascript
    const numbers = [1, 2, 3];
    ```
  - `Function`
    ```javascript
    function helloWorld() {
      console.log("Hello World!");
    }
    ```