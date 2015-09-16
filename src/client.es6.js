export default class Client {

    constructor(url) {
        console.log('Constructor with url: ' + url);
        this.url = url;
    }

    get url() {
        return this._url;
    }

    set url(url) {
        this._url = url;
    }
}