import './App.css';
import Todo from './Components/Pages/Todo';
import Todos from './Components/Pages/Todos';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/" children={<Todos />}  />
           <Route path="/todo/:id" children={<Todo />} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;