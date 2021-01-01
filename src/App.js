import './App.css';
import { AuthProvider } from './Auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Results from './Results';
import Schedule from './Schedule';


const App = () => {
  return (
    <AuthProvider>
      <Router>
          <PrivateRoute exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route path="/results" component={Results}/>
          <Route path="/schedule" component={Schedule}/>
      </Router>
    </AuthProvider>
  );
}

export default App;
