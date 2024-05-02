import logo from './logo.svg';
import './App.css';
import MapMethod from './components/MapMethod';
import Desserts from './components/Desserts';
import ControlledForm from './components/ControlledForm';
import Ratings from './components/Ratings';
import UserDetailsForm from './components/UserDetailsForm';
import UnControlledForm from './components/UnControlledForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MapMethod/>
        <Desserts/>
        <ControlledForm/>
        <Ratings/>
        <UserDetailsForm/>
        <UnControlledForm/>
      </header>
    </div>
  );
}

export default App;
