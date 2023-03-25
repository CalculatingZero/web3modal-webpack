const path = require("path");

module.exports = {
    entry: {
        web3modalV2: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
};