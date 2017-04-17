var shape = require('shape.js');

module.exports = function(shape, options) {
  var area = 0;
  let shapes = shapes;

  try{
      var clase =  eval(shapes);//Guarda la clase correspondiente a la forma
      new clase(options);//Creamos la clase del tipo que sea shape
  }
  catch(err){
         return 'Desconozco la forma "'+forma+'"';
  }
}
