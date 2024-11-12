export default class Fruit{
    #x;
    #y;
    #isApple;
    #speed;
    #container;
    #element;
    #fallInterval;
    #onColleectCallback;

    constructor(x, y, speed, container, onColleectCallback){
        this.setX(x);
        this.setY(y);
        this.setSpeed(speed);
        this.setContainer(container);
        this.#onColleectCallback = onColleectCallback;
        this.createFruit();

    }

    createFruit(){
        this.#element = document.createElement("div");
        this.#isApple = parseInt(Math.random()*2);
        this.#element.classList.add(this.#isApple == 0 ? "apple": "banana");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";
        this.#container.appendChild(this.#element);

        this.#element.addEventListener("click", ()=>this.collectFruit());
    }

    fall(){
        this.#fallInterval = setInterval(() => {
            this.#y += this.#speed; 
            this.#element.style.top = this.#y + "px";

            if(this.#y > this.#container.offsetHeight){
                this.removeFruit();
            }
        }, 20);
    }

    removeFruit(){
        clearInterval(this.#fallInterval);
        this.#element.remove();
    }

    collectFruit(){
        this.removeFruit();
        this.#onColleectCallback((this.#isApple==0)?1:-1);
    }

    setX(x){
        this.#x = x;
    }

    setY(y){
        this.#y = y;
    }

    setSpeed(speed){
        this.#speed = speed;
    }

    setContainer(container){
        this.#container = document.querySelector(container);
    }


}