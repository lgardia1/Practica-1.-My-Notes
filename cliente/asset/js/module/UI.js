export const UI = {

    updateGuideLine : (editableText)=>{
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        console.log(range);
    }
}