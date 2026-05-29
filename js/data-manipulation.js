const a = [1, 2, 2, 3, 4, 5, 6, 7, 6];

const print = (x) => {
    console.log(x);
};

// map
a.map((val, idx) => {
    print(idx + ":" + val);
});

// filter
b = a.filter((val, idx) => val % 2 == 0);
print(b);

// reduce
x = 0
c = a.reduce((x, val, idx) => {
    print("Curent x: " + x);
    print("Current Value: " + val);
    print(idx + ":" + (x + val));
    return x + val;
});
print(c);

// find
const aa = [{a: 1}, {a: 2}, {b: 2}, 3, 4, 5, 6, 7, 6];
d = aa.find(val => val.a === 2);
print(d);

// flatMap
const book = [
    {
        page: 1,
        data: ["ABC", "DEF", "GHI"],
    },
    {
        page: 2,
        data: ["JKL", "MNO", "PQR"],
    },
    {
        page: 3,
        data: ["STU", "VWX", "YZ"],
    }
];
data = book.flatMap(page => page.data);
print(data);

// Object destruction
const obj1 = {
    id: "1",
    name: "ABC",
    age: 20,
}

const { name, age } = obj1;
print(name + " " + age);

// Object dynamic keys
const keyName = "test"
const obj2 = { [keyName]: 123 };

// Object.entries()
const entries = Object.entries(obj1);
for (const [key, value] of entries) {
    print(key + " : " + value);
}