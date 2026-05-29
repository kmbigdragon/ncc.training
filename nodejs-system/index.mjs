import { sum, multiply } from "./math.mjs";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import EventEmitter from "events";
import http from "http";

dotenv.config();

console.log(sum(2, 3));
console.log(multiply(2, 3));

console.log(process.platform);
console.log(process.version);
console.log(process.env.SECRET_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
console.log(__filename);

// EventEmitter
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log(`Hello ${name}`);
});

emitter.emit("greet", "Minh");

// File System + Path
// Sync
const data = fs.readFileSync("./test.txt", "utf8");
console.log(data);
console.log("DONE");
// Async
fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
console.log("DONE");

// Writing file, delete file, create folder, read folder are the same, but using writeFile, appendFile, unlink, mkdir, readdir
setTimeout(() => {
    const filePath = path.join(__dirname, "test.txt");
    console.log(filePath);

    const users = [{ id: 1, name: "ABC" }, { id: 2, name: "DEF" }, { id: 3, name: "XYZ" }];

    // Raw HTTP web server
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            return res.end("Home");
        }

        if (req.url === "/about") {
            return res.end("About");
        }
        
        if (req.url === "/users") {
            return res.end(JSON.stringify({ users: users }));
        }

        if (req.method === "POST") {
            let body = "";

            req.on("data", (chunk) => {
                body += chunk.toString();
            });

            req.on("end", () => {
                const data = JSON.parse(body);
                console.log(data);
                res.end("JSON received");
            });
        }

        res.statusCode = 404;
        res.end("Not Found");
    });

    server.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
});
