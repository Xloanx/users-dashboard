import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import UserDetails from './components/userDetails';
import Dashboard from './components/dashboard';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <main className='container-fluid'>
      < ToastContainer />
      <Switch>
        <Route path="/dashboard/:uuid" component={ UserDetails} />
        <Route path="/dashboard" component={ Dashboard } />
        <Redirect from="/" to="/dashboard" />
        <Redirect to="/notfound" />
      </Switch>
    </main>
  );
}

export default App;
