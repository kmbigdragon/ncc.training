// type union
type roles = "root" | "moderator";
// primitive
type id = number;
// tuple
type GeoLocation = [number, number];
const hanoi: GeoLocation = [21.0285, 105.8542];
console.log(hanoi);
// function
type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;
console.log(add(5, 3));
console.log(subtract(10, 4));

// interface
interface User {
    id: id;
    name: string;
    location: GeoLocation;
}

// interface extends interface
interface AdminUser extends User {
    role: roles;
    deleteUser(userId: id): void;
}

// class implements interface
class Student implements User {
    id: id = 1;
    name: string = "";
    location: GeoLocation = [0, 0];
    constructor (name: string, location: GeoLocation) {
        this.name = name;
        this.location = location;
    }
}

class Teacher implements AdminUser {
    id: id = 1;
    name: string = "";
    location: GeoLocation = [0, 0];
    role: roles = "moderator";
    constructor (name: string, location: GeoLocation) {
        this.name = name;
        this.location = location;
    }
    deleteUser(userId: id): void {
        console.log(userId);    
    }
}