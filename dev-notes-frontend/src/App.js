import React from 'react';
//import logo from './logo.svg';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import NotesContainer from './containers/NotesContainer'
import NoteShow from './containers/NoteShow'
import NewNoteForm from './containers/NewNoteForm'

function App() {
  return (
    <div className="App">
        <Header title={"Dev.Notes"} />

        <NavBar />
        <br></br>
        <Switch>
        <Route exact path="/notes/new" component={NewNoteForm}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={NotesContainer} />
          <Route exact path="/notes/:id" component={NoteShow} />
          
          
        </Switch>
    </div>
  );
}

export default App;
// <Route exact path="/notes/:id" component={NoteShow} />