const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // look all the files that ends in 'js' and 'jsx'
                test: /.(js|jsx)$/,
                // don't run node modules
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react']
                    }
                   
                }
            },
            {
                 // look all the files that ends in 'css' and 'scss'
                test:/\.(css|scss)$/,
                //using style/css/sass - loader 
                loader: 'style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash]' 
                
            },
            {
                test:/\.(jpeg|jpg|png|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    //a link referencing the file
                    name:'[path][name].[ext]'
                }
                
            },
            {
                test:/\.svg/,
                use: {
                    loader: 'url-loader',
                    //If the file size is less then 1MB, file-loader will work as an alternative loader 
                    options: {
                        limit: 1000000,
                        fallback:'file-loader?name=/[path][name].[ext]'
                    }
                }
            } 
        ]
    }
}