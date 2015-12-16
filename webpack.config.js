 
module.exports = {  
   entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,                 
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', 
                query:
                  {
                    presets:['react']
                  } 
            },
            { 
              test: /\.json$/, 
              loader: 'json' 
            }           
        ]
    }
};