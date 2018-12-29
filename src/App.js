import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Users from './users/list'
import Home from './home'
import Team from './team'
import ShowUser from './users/show';

// function Home(props) {
//   return (
//     <div>
//       <h2>Welcome  to our website</h2>
//       <p>This is some content</p>
//     </div>
//   )
// }

function About(props) {
  return (
    <div>
      <h2>About us Section</h2>
      <p>This is the about us page</p>
      <Link to="/about/team">Our Team</Link>
    </div>
  )
}




class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <div>
            <h2>Hello React</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>

            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact/>
            <Route path="/about/team" component={Team}></Route>
            <Route path="/users" component={Users} exact/>
            <Route path="/users/:id" component={ShowUser}/>
          </div>
        </BrowserRouter>
        
      
    );
  }
}

export default App;
