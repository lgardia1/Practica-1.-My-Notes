import { UI } from "./module/UI.js";

const titleInput = document.getElementById('Title');
const timeInput = document.getElementById('Time');
const notePadInput = document.getElementById('NotePad');


notePadInput.addEventListener('input', UI.updateGuideLine);