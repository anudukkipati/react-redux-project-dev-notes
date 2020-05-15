import React from 'react'
import '../App.css'

import NoteCard from './NoteCard.js'

const Notes =({notes}) => {
   
    const notesComponents =  notes.map(note => <NoteCard key={note.id} note={note} />)

    return (
        <div className="Notes">
            {notesComponents}
        </div>
    )
}

  

export default Notes