import { Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Home from "./Home/Home";
import Form1 from "./Form1/Form1";
import Form2 from "./Form2/Form2";
import Form3 from "./Form3/Form3";
import Form4 from "./Form4/Form4";

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' exact component={Home} />
        <Route exact path='/scribble-finance' component={Form1} />
        <Route exact path='/specter-finance' component={Form2} />
        <Route exact path='/specter-finance-unsecured' component={Form3} />
        <Route exact path='/specter-finance-secured' component={Form4} />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
