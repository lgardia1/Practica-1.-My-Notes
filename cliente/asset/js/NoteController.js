import { UI } from "./module/UI.js";
import { TextHandle } from "./module/TextHandle.js";

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
UI.showNotes(data, noteContainer, titleInput ,timeInput ,noteInput ,noteID);
UI.addNote();