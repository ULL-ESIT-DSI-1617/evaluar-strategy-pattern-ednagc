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

    const regexp = /([a-zA-Z]+)/;

    Shape.calculate = function (shape){
      let shapes = this.shapes;
      let s = shape.match(regexp);

      if(s){
        let forma = s[1];
        try{
          var clase =  eval(shapes[forma]);//Guarda la clase correspondiente a la forma
          new clase(options);//Creamos la clase del tipo que sea shape
        }
        catch(err) {
			       return 'Desconozco la forma "'+forma+'"';
		    }

      }

    }




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





// module.exports = function(shape, options) {
//   var area = 0;
//
//   switch (shape) {
//     case 'Triangle':
//       area = .5 * options.width * options.height;
//       break;
//
//     case 'Square':
//       area = Math.pow(options.width, 2);
//       break;
//
//     case 'Rectangle':
//       area = options.width * options.height;
//       break;
//
//     default:
//       throw new Error('Invalid shape: ' + shape);
//   }
//
//   return area;
// }
