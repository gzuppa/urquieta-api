import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css"
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Services from './components/routes/Services'
import Auxiliars from './components/routes/Auxiliars'
import Presentation from './components/routes/Presentation'
import Issues from './components/routes/Issues'
import Exam from './components/routes/Exam'

//Validar login y tokens correctos
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
    setAuthToken(token);

  const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000; 
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = "./login";
    }
  }

class App extends Component{
  render(){
    return(
      <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/auxiliars" component={Auxiliars} />
          <Route exact path="/aboutus" component={Presentation} />
          <Route exact path="/issues" component={Issues} />
          <Route exact path="/exam" component={Exam} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
