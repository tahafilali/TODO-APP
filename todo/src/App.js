import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosList from './components/todo-list.component';
import CreateTodos from './components/create-todo.component';
import EditTodos from './components/edit-todo.component';
import logo from './logo.png';
function App() {
  return (
    <Router>
     <div className="container">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <a className="navbar-brand" href="#" target="_blank">
           <img src={logo} width="30" height="30"/>
           </a>
           <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
        
             <ul className="navbar-nav mr-auto">
             <li className="navbar-item">
             <Link to="/" className="nav-link">Todos</Link>
             </li>
             <li className="navbar-item">
             <Link to="/create" className="nav-link">Create Todo</Link>
             </li>
             </ul>
       </nav>
      <Route path='/' exact component={TodosList}/>
      <Route path='/edit/:id' component={EditTodos}/>
      <Route path='/create' component={CreateTodos}/>
     </div>
     
    </Router>
  );
}

export default App;
