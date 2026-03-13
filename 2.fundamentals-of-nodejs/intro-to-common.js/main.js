// const comment = require("./features/comment");
// const like = require("./features/like");

// console.log(comment("nitesh.dev", 'Good Job 🎊')); // it works
// console.log(like("7htyge44g34g")); // also works
console.log("-------------------------------");
const follow = require("./features/follow");



// console.log(follow("nitesh.dev")); //not works
// console.log(follow)
// console.log(follow("sdfsdf"))

// learning desctructuring
const { h, e, l, o } = "hello";
const { [0]: n } = "nitesh";
console.log(h, e, l, o);
console.log(n)

let { [0]: a, [1]: b } = 4545;
console.log(a, b)

const { [0]: d } = Boolean(true)
console.log(d)