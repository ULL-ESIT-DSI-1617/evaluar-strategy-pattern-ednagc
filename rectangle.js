"use strict"

var Shape = require('./shapes.js').Shape;

class Rectangle extends Shape {
	constructor(options) {
		super(options);
	}

	getArea() {
    let area = this.options_.width * this.options_.height;
    return area;
	}
}

module.exports = {
  Rectangle: Rectangle
}
