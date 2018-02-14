const obj = {
    x: 5,
    y: 3,
    'prop one': 2
};
console.log(obj);

obj.x = 7;
obj.z = 3;
console.log(obj);

const n = obj.x;

obj.x = {
    t: 1
};

console.log(obj.x.t);

console.log(obj.b);

console.log(obj["prop one"]);
