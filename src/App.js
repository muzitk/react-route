import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
 } from "react-router-dom";

 //Pages
import AboutMe from './Pages/AboutMe'
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'

class App extends Component {
    render() {
     return(

       <Router>
         <div>
           <nav>
            <h1>WELCOME TO MY PORTFOLIO</h1>
              <ul>
                  <li>
                    <Link to="/home/">Home</Link>
                  </li>
                  <li>
                    <Link to="/skills/">Skill</Link>
                  </li>
                  <li>
                    <Link to="/projects/">Projects</Link>
                  </li>
                  <li>
                    <Link to="/aboutme/">About Me</Link>
                  </li>
                  <li>
                    <Link to="/contacts/">Contacts</Link>
                  </li>
             </ul>
           </nav>

           <Route path="/" exact component={Home} />
           <Route path="/skills/" component={Skills} />
           <Route path="/projects/" component={Projects} />
           <Route path="/aboutme/" component={AboutMe} />
           <Route path="/contacts/" component={Contacts} />
         </div>
       </Router>

     )
   }
 }

 export default App;
