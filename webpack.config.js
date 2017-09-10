var debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: __dirname,
    devtool : debug? "inline-sourcemap" : null,
    entry: './src/propertyPage/app.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png/,
                loader: 'url-loader'
            }
        ],
    },

    output: {
        path: __dirname + "/src/",
        filename: 'client.min.js'
    },
    watch: true
};