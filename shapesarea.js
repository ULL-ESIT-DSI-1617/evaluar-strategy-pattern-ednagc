"use strict"


var Shape = require('./shapes.js').Shape;
var Triangle = require('./triangle.js').Triangle;
var Square = require('./square.js').Square;
var Rectangle = require('./rectangle.js').Rectangle;

var figura = {Triangle: 'Triangle',
            Square: 'Square',
            Rectangle: 'Rectangle'};


module.exports = function(shape, options) {

  let s = figura[shape];

      try{
          let clase =  eval(s);//Guarda la clase correspondiente a la forma
          let n_shape = new clase(options);//Creamos la clase del tipo que sea shape
          let area = n_shape.getArea();
          return area;

      }
      catch(err) {
		      console.log('Desconozco la forma ' + shape);
	   }
  }
