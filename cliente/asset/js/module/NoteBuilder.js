import { Note } from "./Note.js";

export class NoteBuilder {

    constructor() {
        this._note = new Note();
    }

    setId(id) {
        this._note.id = id;
        return this;
    }

    setTitle(title) {
        this._note.title = title;
        return this;
    }

    setTime(time) {
        this._note.time = time;
        return this;
    }

    setNote(note) {
        this._note.note = note;
        return this;
    }

    setElement(element) {
        this._note.element = element;
        return this;
    }

    setTypeNote(typenote) {
        this._note.typeNote = typenote;
        return this;
    }

    build(){
        return this._note;
    }
}