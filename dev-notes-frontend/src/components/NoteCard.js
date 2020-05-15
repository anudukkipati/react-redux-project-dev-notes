import React from 'react'

const NoteCard = ({note }) => {
    
    return (
        <div>
        <h3>{note.title}</h3>
        <h3>{note.content}</h3>
    </div>
    )
   

}

export default NoteCard