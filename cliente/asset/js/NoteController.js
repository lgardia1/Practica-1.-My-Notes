import { UI } from "./module/UI.js";
import { TextHandle } from "./module/TextHandle.js";
import { NoteConsumer } from "./module/NoteConsumer.js";

//Variables:
//----Inputs----
const titleInput = document.getElementById('Title');
const timeInput = document.getElementById('Time');
const noteInput = document.getElementById('Note');
const noteID = document.getElementById('noteID');
const addNote = document.querySelector('.add-notes');

//----Elements----
const noteContainer = document.querySelector('.note-container');

//----URLS----
const url = 'http://localhost:3000';
const post = '/createNotes';
const get = '/obtainsNotes';
const put = '/putNote';

//----Connection----
const connection = TextHandle.getInstance(url);

/* notePadInput.addEventListener('input', UI.updateGuideLine); */


let data = await connection.getAllNotes(get);
const notes = NoteConsumer.consumer(data);

const schemaElement = {
    elementParent: (() => {
        const div = document.createElement('div');
        div.classList.add('note'); 
        return div; 
    })(),
    element: 
            `
                <div class="note-title">
                    <h1>$$title</h1>
                    <img src="asset/img/$$image" alt="Note">
                </div>
                <p class="text">$$content</p>
                <p class="time">$$date</p>
            `
};

NoteConsumer.modelElement(notes, schemaElement);


UI.showNotes(notes, noteContainer);
UI.showInputs(notes, titleInput, timeInput, noteInput, noteID);

