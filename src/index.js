import React from 'react';
import ReactDOM from 'react-dom';
// import react router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import ProductList.js
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          {/* Set route  */}
          <Route exact path="/" component={ProductList}/>
          <Route path="/product/:slug" component={ProductDetail}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));