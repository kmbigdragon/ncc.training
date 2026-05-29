# STACK & HEAP
### Stack:
Stack is a Fixed size memory dedicated to a program to run. It stores primitive type variables like `number`, `string`, `boolean`,...

### Heap:
Heap is a Dynamic size memory that stores referenceable data types such as `object`, `array` (`number[]`, `string[]`,...).

Stack is limited so when the callstack is too large, many primitive variables are stored in stack so it cannot more, causing `StackOverFlow` error.

# THE REFERENCE TRAP
In object-oriented languages, it's easier to express. Here I got a TypeScript example:
```typescript
class Dog {
    age = 10;
    bark() {
        console.log("Woof, woof!");
    }
}

dog1 = Dog();
// dog2 is not a real other dog, it's just a copy of reference to dog1. Now dog1 and dog2 both reference to the same heap memory area, so changing properties of dog2 is the same as doing so on dog1
dog2 = dog1;
dog2.age = 11;
console.log(dog1.age);
// 11

// Creating a real new dog
dog3 = Dog();
// These 2 dogs have the same properties, but they reference to 2 different heap memory area, so technically they're not the same
console.log(dog1 === dog3)
// false
```

Objects in JavaScript work in the same concepts, but they're more flexible.

# IMMUTABILITY

### Spread and Object.assign
Spread is a powerful operator to make a new object with a copy of primitive properties of the spreaded object.
For example:
```javascript
let a = [1, 2, 3, 4];
let b = [2, 1];
// [1, 2, 3, 4, 2, 1]
let c = [...a, ...b];
```
Same does Object.assign, but it's more verbose.

### structuredClone()
```javascript
let obj1 = {
    a: 1,
    b: { c: 2 },
};
// a is a primitive variable, but b is not, so copying b is just copy a reference
let obj2 = Object.assign({}, obj1);
obj2.b.c = 3;
// Now that obj1.b.c also changed to 3
console.log(obj1.b.c)
// 3
```
So deep copy is used to recursively copy the primitive variable of nested objects. Before `structuredClone()`, people used `json.parse(json.stringify(obj))` but it may drop `undefined` properties, and not as fast as `structuredClone()` in large objects.