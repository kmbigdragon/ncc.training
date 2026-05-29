// lớp
class Animal {
    // các thuộc tính
    name = "";
    age = 1;

    // hàm dựng
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
   
}

// Lớp kế thừa
class Dog extends Animal {
    color = "black";
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    speak() {
        console.log("Woof woof!");
    }

    getInfo(beforeWord = "", afterWord = "") {
        console.log(`${beforeWord}, [name: ${this.name}, age: ${this.age}, color: ${this.color}]${afterWord}`);
    }
    
    updateInfo(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

const dog = new Dog(name = "Mickey", age = 10, color = "golden");
dog.speak();
dog.getInfo("Hello", "!!!");

dog.updateInfo("Mouse", 11, "black");
dog.getInfo("Updated", ".");

const cat = {
    name: "Kitty",
    age: 2,
    color: "white"
};

dog.getInfo.call(cat, "Hi", " >.<");

dog.getInfo.apply(cat, ["Hi", " T.T"]);

dog.updateInfo.apply(cat, ["Kitten", 3, "golden"]);

dog.getInfo.call(cat, "Hmm", " :v");

const getCatInfo = dog.getInfo.bind(cat);
getCatInfo("Zzzzz", " is sleeping!");