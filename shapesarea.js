"use strict"

class Shape {
	constructor(options) {
		this.options_ = options;
	}
}


class Triangle extends Shape {
  constructor(options) {
		super(options);
	}

	getArea() {
    let area = .5 * this.options_.width * this.options_.height;
    return area;
	}
}

class Square extends Shape {
	constructor(options) {
		super(options);
	}

	getArea() {
    let area = Math.pow(this.options_.width, 2);
		return area;
	}
}


class Rectangle extends Shape {
	constructor(options) {
		super(options);
	}

	getArea() {
    let area = this.options_.width * this.options_.height;
    return area;
	}
}



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
