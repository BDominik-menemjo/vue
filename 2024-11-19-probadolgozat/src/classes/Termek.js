export default class Termek{
    #name;
    #price;
    #file;

    constructor(name,file){
        this.setName(name);
        this.setFile(file);
        this.setPrice(price)

        this.getName=this.getName.bind(this);
        this.getPrice=this.getPrice.bind(this)
        this.getFile=this.getFile.bind(this);
    }

    setName(name){
        this.#name=name;
    }
    setPrice(price){
        this.#price=price;
    }
    setFile(file){
        this.#file=file;
    }

    getName(){
        return this.#name;
    }
    getPrice(){
        return this.#price;
    }
    getFile(){
        return this.#file;
    }
}