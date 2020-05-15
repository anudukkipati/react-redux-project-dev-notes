import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNotes} from '../actions/notes.js'
import Notes from '../components/Notes.js'

class NotesContainer extends Component {
  

    componentDidMount() {
      // debugger
      
        this.props.fetchNotes()
       
    }

    render(){
     
        return(
            <React.Fragment>
             
           
             <Notes notes={this.props.notes}/>
         </React.Fragment>
        )
       
    }

}
const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
}
//export default NotesContainer
export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)