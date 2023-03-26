const path = require("path");

module.exports = {
    entry: {
        web3modalV2: path.resolve(__dirname, "src/index.js"),
        // web3modalV2: path.resolve(__dirname, "src/web3modal.js"),
        // wagmi: path.resolve(__dirname, "src/wagmi.js"),
        // web3modalV2 :{
        //     import: "./src/web3modal.js",
        //     dependOn: 'shared',
        // },
        // wagmi :{
        //     import: "./src/wagmi.js",
        //     dependOn: 'shared',
        // },
        // shared: 'lodash',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
};