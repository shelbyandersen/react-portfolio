import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;