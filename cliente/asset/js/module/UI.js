

export const UI = {

    updateGuideLine: (editableText) => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        console.log(range);
    },

    showNotes: (notes, parent)=> {
        notes.forEach(note => {
            parent.prepend(note.element);
        });
    },

    showInputs: (notes, title, time, text, id)=>{
        notes.forEach(note => {
            note.element.addEventListener('click', ()=>{
                title.innerText = note.title;
                time.innerText = note.time;
                text.innerText = note.note;
                id.innerText =  note.id;
            });
        });
    },

    showError: (error) => {
        console.log(error);
    }
}