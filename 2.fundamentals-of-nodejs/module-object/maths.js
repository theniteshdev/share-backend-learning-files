function add(...nums) {
    return nums.reduce((a, c) => a + c, 0);
};

function mul(...nums) {
    return nums.reduce((a, c) => a * c, 0);
};
const md = module;
module.exports = {
    mul, add, md
}