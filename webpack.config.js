const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.ts'
    },
    output: {
        path: path.join(__dirname,'public/js'),
        filename: '[name].js'
    },    
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js',],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
    },
};
