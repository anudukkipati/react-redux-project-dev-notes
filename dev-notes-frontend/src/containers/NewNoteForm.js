import React, { Component } from 'react'
import { connect } from "react-redux"
import {createNote} from "../actions/notes.js"

const initialState = {
    title: "",
    topic:"",
    content: "",
    url: "",
    name:""
    
}

class NewNoteForm extends Component {
    state = initialState

    handleChange = (event) => {
        this.setState( {[event.target.name]: event.target.value})
    }

    resetForm = () => {
        this.setState(initialState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createNote(this.state, this.props.history)
           .then(response => {
               if(!response.error)  {
                   this.resetForm()
                   this.props.history.push("/notes")
               }
           })
    }

    render() {
        console.log(this.state)
        //debugger
        return (
            <div className="NewNoteForm">
                <h4>Add a new note</h4>
                <form onSubmit={this.handleSubmit}>
                   <input name="title" placeholder="title" onChange={this.handleChange} value={this.state.title} />
                   <br></br>
                   <br></br>
                   <input name="topic" placeholder="topic" onChange={this.handleChange} value={this.state.topic} />
                   <br></br>
                   <br></br>
                   <label htmlFor="content">Content</label>
                   <br></br>
                   <textarea name="content" id="" placeholder="add content" cols="30" rows="10"   onChange={this.handleChange} value={this.state.content}></textarea>
                   <br></br>
                   <br></br>
                   <input name="url" placeholder="url" onChange={this.handleChange} value={this.state.url} />
                   <br></br>
                   <br></br>
                   <input name="name" placeholder="name" onChange={this.handleChange} value={this.state.user} />
                   <br></br>
                   <br></br>
                   <input type="submit" value="Create Note"/>
                </form>
          

            </div>
        )
        
    }
}

export default connect(null, { createNote })(NewNoteForm);