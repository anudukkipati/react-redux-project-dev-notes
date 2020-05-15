import React from 'react'

const NoteCard = ({note }) => {
    
    return (
        <div className="notecard">
        <h5>{note.title}</h5>
        <p>{note.content}</p>
        <p><a href={note.url} target="_blank" rel="noopener noreferrer">Click here to to go to the link</a></p>
    </div>
    )
   

}

export default NoteCard