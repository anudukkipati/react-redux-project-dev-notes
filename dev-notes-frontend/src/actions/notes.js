//sync action creators

export const loadNotes = notes => {
   return {
    type: "LOAD_NOTES", 
    notes
   }
    

}

export const addNote = note => {
    return {
        type: "ADD_NOTE",
        note
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

export const createNote = (note) => {
    return dispatch => {
        const body = {
            note
        }
        return fetch("http://localhost:3001/api/notes",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
          .then(resp => resp.json())
          .then(newNote =>{
              if(newNote.error) {
                  alert(newNote.error)
              } else{
                  dispatch(addNote(newNote))
              }
              return newNote
          })
    }
}