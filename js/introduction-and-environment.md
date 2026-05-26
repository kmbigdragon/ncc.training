# V8 JAVASCRIPT ENGINE
V8 is a JavaScript engine written in C++ that parses and executes JavaScript code, powering the Google Chrome and Node.js.

# BLOCKING & NON-BLOCKING I/O
Blocking occurs when the execution of additional JavaScript code in the process have to wait until a non-JavaScript code is done.
Synchronous I/O methods in Node.js standard library (like node:fs.readFileSync,...) is a blocking process.

```javascript
import fs from "node:fs";
// blocking
fs.readFileSync("./git.md");
// this method is waiting for the above code to fully execute
somethingElse();
```

So there are Non-blocking solution to handle. Instead of synchronously call a function, use asynchronous function so the code will be running continously without having to wait for the I/O to be done.

```javascript
import fs from "node:fs";
// non-blocking
fs.readFile("./git.md", (error, data) => {
    if (error) {
        console.log(error);
    }
    // if there're no error during reading the file, this will run after somethingElse() is called
    console.log(data);
});
// this method will be executed before the inside block of the readFile() method.
somethingElse();
```

# SINGLE-THREADED ARCHITECTURE
The V8 Engine powering Node.js is running on Single-threaded Event Loop model, that means it will only use one thread and event queue to reduce resources usage.

Request (Asynchronously receive) $\rightarrow$ Event Queue $\rightarrow$ Waiting for execution $\rightarrow$ Pop out of Event Queue and execute (Asynchronously) $\rightarrow$ Response (Asynchronously send)

So this only cost 1 single thread to handle many requests.

# NPM
Installed alongside with Node.js runtime, NPM stands for Node Package Manager. It's used to install, remove, manage packages with a `package.json` file. Inside `package.json`, there are sections such as installed packages, macro commands, version,...

There are other package managers such as `yarn`, `pnpm`, `bun`,... that creates lock-files like `package-lock.json` for `npm`, `yarn.lock` for `yarn` or `pnpm-lock.yaml` for `pnpm`.