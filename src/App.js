import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
        {/* exactをつけるとURLが完全一致した時のみ表示 */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/about/:id" exact component={About}></Route>
      </Router>
    </div>
  );
}

export default App;
