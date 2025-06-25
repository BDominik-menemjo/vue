export default class Cart {
    #name;
    #piece;
    #price;

    constructor(name, piece, price) {
        this.setName(name);
        this.setPiece(piece);
        this.setPrice(price);

        this.getName = this.getName.bind(this);
        this.getPiece = this.getPiece.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.setPiece = this.setPiece.bind(this);
    }


    setName(name) {
        this.#name = name;
    }

    setPiece(piece) {
        this.#piece = piece;
    }

    setPrice(price) {
        this.#price = price;
    }

    getName() {
        return this.#name;
    }

    getPiece() {
        return this.#piece;
    }

    getPrice() {
        return this.#price;
    }

}