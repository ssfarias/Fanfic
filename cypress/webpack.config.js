const config = {
    "entry": {
      "webpack-bundle": "./app/registration",
    },
  
    "output": {
      filename: "[name].js",
      path: pathLib.resolve(__dirname, "../app/assets/webpack"),
    },
  
    "module": {
      "rules": [
        {
          "exclude": /node_modules/,
          "test": /\.jsx?$/,
          "use": {
            "loader": "babel-loader",
            "options": {
              "plugins": [
                "@babel/plugin-proposal-class-properties",
                ["@babel/plugin-proposal-decorators", {"legacy": true}],
                "@babel/plugin-proposal-export-namespace-from",
                "@babel/plugin-proposal-function-sent",
                "@babel/plugin-proposal-json-strings",
                "@babel/plugin-proposal-numeric-separator",
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-throw-expressions",
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-syntax-import-meta",
                "@babel/plugin-transform-react-jsx"
              ],
              "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }
        }
      ],
    },
  
    "plugins": [
      new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
        "window.jQuery": "jquery"
      }),
      new UglifyJsPlugin(),
    ],
  
    "optimization": {
      "splitChunks": {
        "cacheGroups": {
          "vendor": {
            "test": /node_modules/,
            "chunks": "all",
            "name": "vendor-bundle"
          }
        }
      }
    },
  
    "resolve": {
      "alias": {
        "Lib": pathLib.resolve(__dirname, "app/lib/"),
        "Shared": pathLib.resolve(__dirname, "app/shared/")
      },
      "extensions": [".js", ".jsx"]
    },
    "target": "node"
  };
  
  module.exports = config;