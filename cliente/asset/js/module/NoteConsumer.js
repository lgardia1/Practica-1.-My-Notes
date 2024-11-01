import { Note } from "./Note.js";
import { NoteBuilder } from "./NoteBuilder.js";

export const NoteConsumer = {
    consumer: (data) => {
        let notes = [];
        data.forEach(element => {
            const { _id, title, content, typeNote, dateCreate } = element;
            
            const note = new NoteBuilder()
                .setId(_id)
                .setTitle(title)
                .setNote(content)
                .setTime(dateCreate)
                .setTypeNote(typeNote)
                .build();
                
            notes.push(note);
        });
     
        return notes;
    },

    modelElement: (notes, schema) => {
        let newValue;
        let cloneParent; 
      
        notes.forEach(note => {
            let newValue = schema.element; 
            
           
            newValue = newValue.replace('$$title', note.title);
            newValue = newValue.replace('$$image', note.typeNote === 'normal' ? note.typeNote + '.png' : note.typeNote + '.svg');
            newValue = newValue.replace('$$content', note.note);
            newValue = newValue.replace('$$date', new Date(note.time).toLocaleDateString());
            
            cloneParent = schema.elementParent.cloneNode(false);
            cloneParent.classList.add(note.typeNote);
            cloneParent.innerHTML = newValue;

            note.element = cloneParent; 
        });

        schema.elementParent = null;
    }
}