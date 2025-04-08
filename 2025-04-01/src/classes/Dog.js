export default class Dog{
    #id;
    #url;
    #isFavorite;
    #likes;

    constructor(url, isFavorite, likes){
        this.setUrl(url);
        this.setLikes(likes);
        this.setIsFavorite(isFavorite);

        this.getUrl = this.getUrl.bind(this);
        this.getIsFavorite=this.getIsFavorite.bind(this);
        this.getLikes = this.getLikes.bind(this);
        this.setUrl = this.setUrl.bind(this);
        this.getCrudId = this.getCrudId.bind(this);
        this.setCrudId = this.setCrudId.bind(this);
    }

    setUrl(url){
        this.#url = url;
    }

    setCrudId(id){
        this.#id = id;
    }

    getCrudId(){
        return this.#id;
    }

    setIsFavorite(isFavorite){
        this.#isFavorite=isFavorite;
    }

    setLikes(likes){
        this.#likes = likes;
    }

    getUrl(){
        return this.#url;
    }

    getLikes(){
        return this.#likes;
    }

    getIsFavorite(){
        return this.#isFavorite
    }
}