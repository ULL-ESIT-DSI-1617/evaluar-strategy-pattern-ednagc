"use strict";

  class Shape {

    constructor(shape,options){
      this.shape_ = shape;
      this.options_ = options;
    }
}
    Shape.shapes = {t: 'Triangle',
              s: 'Square',
              r: 'Rectangle'};

    // Shape.getArea = function (shape,options){
      // let shapes = this.shapes;
      // try{
      //     var clase =  eval(shapes);//Guarda la clase correspondiente a la forma
      //     new clase(options);//Creamos la clase del tipo que sea shape
      // }
      // catch(err){
			//        return 'Desconozco la forma "'+forma+'"';
		  // }

    // }

  class Triangle extends Shape{
    constructor(options){
      this.width = options.width;
      this.height = options.height;
    }

    getArea(){
      let area = .5 * this.width * this.height;
      return area;
    }
  }

  class Rectangle extends Shape{
    constructor(shape,options){
      this.width = options.width;
      this.height = options.height;
    }

    getArea(){
      let area = this.width * this.height;
      return area;
    }
  }

  class Square extends Shape{
    constructor(shape,options){
      this.width = options.width;
      this.height = options.height;
    }

    getArea(){
      let area = Math.pow(this.width, 2);
      return area;
    }
  }


  module.exports = {
    Shape: Shape,
    Triangle: Triangle,
    Rectangle: Rectangle,
    Square: Square
  }
