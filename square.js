"use strict"

var Shape = require('./shapes.js').Shape;

class Square extends Shape {
	constructor(options) {
		super(options);
	}

	getArea() {
    let area = Math.pow(this.options_.width, 2);
		return area;
	}
}

module.exports = {
  Square: Square
}
