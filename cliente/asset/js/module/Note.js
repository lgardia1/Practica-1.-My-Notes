export class Note {
    //Constructor
    constructor(){
        this._id = null;
        this._title = null;
        this._time = null;
        this._note = null;
        this._typeNote = null;
        this._element = null;
    }


    //Getter
    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get time() {
        return this._time;
    }

    get note() {
        return this._note;
    }

    get typeNote() {
        return this._typeNote;
    }

    get element() {
        return this._element;
    }

    //Setter
    set id(id) {
        this._id = id;
    }

    set title(title) {
        this._title = title;
    }

    set time(time) {
        this._time = time;
    }

    set note(note) {
        this._note = note;
    }

    set typeNote(typeNote) {
        this._typeNote = typeNote;
    }

    set element(element) {
        this._element = element;
    }
}