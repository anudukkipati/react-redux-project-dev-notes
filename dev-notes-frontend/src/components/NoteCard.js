import React from 'react'
import { Link } from 'react-router-dom';
import { useReducer } from 'react';


const NoteCard = ({note: {title, content, url, user, id} }) => {
    
    return (
        <div className="notecard">
           
           <p><strong><Link to={`/notes/${id}`}>{title}</Link></strong></p>
            <h5>{title}</h5>
            <p>{content}</p>
            <p><a href={url} target="_blank" rel="noopener noreferrer">Click here to to go to the link</a></p>
            <p>{user.name}</p>
        </div>
    )
   

}

export default NoteCard
// <p><strong><Link to={`/notes/${id}`}>{note.title}</Link></strong></p>