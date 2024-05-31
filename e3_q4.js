class Shape {
    constructor() {
        if(this.constructor == 'Shape')
            throw new Error("Abstract classes can not be instantiated.")
    }

    area() {
        throw new Error("area must be implemented")
    }
    perimeter() {
        throw new Error("perimeter must be implemented")
    }
}

class Square extends Shape {
    constructor(length) {
        super()
        this.length = length
    }

    area() {
        return this.length * this.length
    }

    perimeter() {
        return 4 * this.length
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return Math.PI * this.radius * this.radius
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}