const path = require('path'); // Obtener un módulo de nodejs que es la ruta del sistema operativo

module.exports = {   // Es la configuración de webpack
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',  //nombre del archivo final
    path: path.join(__dirname, '/')  // donde quiero guardar el fichero bundle.js
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: 'development'
};