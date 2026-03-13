const fs = require("node:fs")
// custom require function

const getModule = function (filePath) {
    if (!filePath.includes(".js")) {
        filePath += ".js"
    }
    try {
        moduleSend = {}
        let moduleContents = fs.readFileSync(filePath, "utf-8");
        eval(moduleContents);
        return moduleSend;
    } catch (error) {
        console.error(`getModule error:: ${error.message}`)
        return (`getModule error:: ${error.message}`)
    }
};

module.exports = getModule;
