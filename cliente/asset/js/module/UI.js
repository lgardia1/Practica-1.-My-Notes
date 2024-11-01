

export const UI = {

    updateGuideLine: (editableText) => {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        console.log(range);
    },

    showNotes: (data, parent, titleInput, timeInput, noteInput, noteID) => {
        let note;
        data.forEach(element => {
            const {_id , title, content, typeNote,  dateCreate} = element;

            note = document.createElement('div');
            note.classList.add('note');

            note.classList.add(typeNote);
            if (typeNote === 'normal') {
                note.innerHTML = `
                    <div class="note-title">
                        <h1>${title}</h1>
                        <img src="asset/img/note.png" alt="Note">
                    </div>`;
            } else {
                note.innerHTML = `
                    <div class="note-title">
                        <h1>${title}</h1>
                        <img src="asset/img/alert.svg" alt="Alert">
                    </div>`;
            }

            const contentNode = document.createTextNode(`${content.substring(0, 50)}...`); 
            const contentElement = document.createElement('p'); 
            contentElement.classList.add('text');
            contentElement.appendChild(contentNode); // Añade el nodo de texto al elemento <h1>
            note.appendChild(contentElement);

            const dateNode = document.createTextNode(dateCreate); 
            const dateElement = document.createElement('p'); 
            dateElement.classList.add('time');
            dateElement.appendChild(dateNode);
            note.appendChild(dateElement);

            parent.prepend(note);

            note.addEventListener('click', ()=>{
                titleInput.innerText = title;
                timeInput.innerText = dateCreate;
                noteInput.innerText = content;
                noteID.innerText =  _id;
            });
        });
    },

    addNote : ()=>{

    },

    showError: (error) => {
        console.log(error);
    }
}