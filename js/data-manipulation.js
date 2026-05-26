const a = [1, 2, 2, 3, 4, 5, 6, 7, 6];

const print = (x) => {
    console.log(x);
};

a.map((val, idx) => {
    print(idx + ":" + val);
});

b = a.filter((val, idx) => val % 2 == 0);
print(b);

x = 0
c = a.reduce((x, val, idx) => {
    print("Curent x: " + x);
    print("Current Value: " + val);
    print(idx + ":" + (x + val));
    return x + val;
});
print(c);

const aa = [{a: 1}, {a: 2}, {b: 2}, 3, 4, 5, 6, 7, 6];
d = aa.find(val => val.a === 2);
print(d);