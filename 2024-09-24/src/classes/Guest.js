export default class Guest{
    #name;
    #email;
    #pet;

    constructor(name,email,pet){
        this.setName(name);
        this.setEmail(email);
        this.setPet(pet);
    }
    
    setName(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }

    setEmail(email) {
        this.#email = email;
    }
    getEmail() {
        return this.#email;
    }

    setPet(pet) {
        this.#pet = pet;
    }
    getPet() {
        return this.#pet;
    }
}