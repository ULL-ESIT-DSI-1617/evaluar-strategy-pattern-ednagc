"use strict"

var Shape = require('./shapes.js').Shape;

class Triangle extends Shape {
  constructor(options) {
		super(options);
	}

	getArea() {
    let area = .5 * this.options_.width * this.options_.height;
    return area;
	}
}

module.exports = {
  Triangle: Triangle
}
