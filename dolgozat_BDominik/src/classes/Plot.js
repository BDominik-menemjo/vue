export default class Plot{
    #width;
    #length;
    #price;

    constructor(width, length, price){
        this.setWidth(width);
        this.setLength(length);
        this.setPrice(price);
    }

    setWidth(width) {
        this.#width = width;
    }
    getWidth() {
        return this.#width;
    }

    setLength(length) {
        this.#length = length;
    }
    getLength() {
        return this.#length;
    }

    setPrice(price) {
        this.#price = price;
    }
    getPrice() {
        return this.#price;
    }
}