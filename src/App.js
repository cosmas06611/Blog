import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// REACT-ROUTER-DOM
// to use react-router dom, we call npm react-router-dom@5
// import import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
