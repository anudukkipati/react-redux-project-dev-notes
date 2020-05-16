import React from 'react'
import { Switch } from 'react-router-dom'
//import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

export default (props) => {
  return (
    <div className="navbar">
      <Switch>
        <React.Fragment>
        <ul>
           <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/notes">Notes</NavLink></li>
          <li><NavLink exact to="/notes/new">Create Note</NavLink></li>
        </ul>

        </React.Fragment>
    

      </Switch>
       
      
    </div>
  )
}