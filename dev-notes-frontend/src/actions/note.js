//sync action creators

export const loadNote = note => {
    return {
     type: "LOAD_NOTE", 
     note
    }
     
 
 }
 
 
 //async action creators
 
 export const fetchNote = () => {
     debugger
    let id = this.props.match.params.id;
     return dispatch => {
         return fetch(`http://localhost:3001/notes/api/${id}`)
           .then(resp => resp.json())
           .then(noteJSON => {
              // dispatch(loadNotes(notesJSON))
               if(noteJSON.error) {
                   alert(noteJSON.error) 
               } else {
                   dispatch(loadNote(noteJSON))
               }
           })
     }
 }