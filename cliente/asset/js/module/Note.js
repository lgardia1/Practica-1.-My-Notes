export class Note {
    constructor(title, time, note){
        this._title = title;
        this._time = time;
        this._note = note;
    }

    get getTitle() {
        return this._title;
    }

    get getTime() {
        return this._time;
    }

    get getNote() {
        return this._note;
    }
}