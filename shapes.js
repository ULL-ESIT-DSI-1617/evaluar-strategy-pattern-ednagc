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



module.exports = {
		Shape: Shape,
		Triangle: Triangle,
		Square: Square,
		Rectangle: Rectangle
};
