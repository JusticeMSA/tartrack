import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AuthProvider} from './contexts/AuthContext';  


//Importing page components
import Home from './pages/Home';

//importing driver components
import Register from './driver/register/Register';

function App() {
  return (
    <AuthProvider>
          <Router>
        <div>
            <Switch>
              <Route path='/driver/register'>
                <Register/>
              </Route>
              <Route exact path='/'>
                <Home/>
              </Route>
            </Switch>
        </div>
          </Router>
      </AuthProvider>
  );
}

export default App;
