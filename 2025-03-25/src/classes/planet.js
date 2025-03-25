export default class Planet{
    #id;
    #sorszam;
    #name;
    #population;
    #climate;

    constructor(sorszam, name, population, climate){
        this.setSorszam(sorszam);
        this.setName(name);
        this.setPopulation(population);
        this.setClimate(climate);


        this.getId = this.getId.bind(this);
        this.getSorszam = this.getSorszam.bind(this);
        this.getName = this.getName.bind(this);
        this.getPopulation = this.getPopulation.bind(this);
        this.getClimate = this.getClimate.bind(this);
        this.setName = this.setName.bind(this);
        this.setId=this.setId.bind(this);
    }

    getSorszam(){
        return this.#sorszam;
    }

    setSorszam(sorszam){
        this.#sorszam = sorszam;
    }

    getId(){
        return this.#id;
    }

    setId(id){
        this.#id = id;
    }

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
    }

    getPopulation(){
        return this.#population;
    }

    setPopulation(population){
        this.#population = population;
    }

    getClimate(){
        return this.#climate;
    }

    setClimate(climate){
        this.#climate = climate;
    }

}