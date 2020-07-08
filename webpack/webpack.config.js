const path = require('path')

console.log(path.resolve())

console.log(path.join(__dirname, './dist'))

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist1')
    }
}

module.exports = config