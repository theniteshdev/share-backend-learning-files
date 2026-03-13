function follow(userID) {
    return `You followed ${userID}`;
};

// module.exports = follow; // this works

// exports = follow;
exports.follow = follow;
// exports.follow = follow;