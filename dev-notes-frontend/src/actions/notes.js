//sync action creators

export const loadNotes = notes => {
   return {
    type: "LOAD_NOTES", 
    notes
   }
    

}


//async action creators

export const fetchNotes = () => {
    
    return dispatch => {
        return fetch("http://localhost:3001/api/notes")
          .then(resp => resp.json())
          .then(notesJSON => {
             // dispatch(loadNotes(notesJSON))
              if(notesJSON.error) {
                  alert(notesJSON.error) 
              } else {
                  dispatch(loadNotes(notesJSON))
              }
          })
    }
}