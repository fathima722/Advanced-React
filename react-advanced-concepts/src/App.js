import logo from './logo.svg';
import './App.css';
import MapMethod from './components/MapMethod';
import Desserts from './components/sort/Desserts';
import ControlledForm from './components/typesOfForms/ControlledForm';
import Ratings from './components/typesOfForms/Ratings';
import UserDetailsForm from './components/typesOfForms/UserDetailsForm';
import UnControlledForm from './components/typesOfForms/UnControlledForm';
import Root from './components/useContextExamples/Root';
import LightDarkTheme from './components/useContextExamples/LightDarkTheme';
import SimpleForm from './components/useStateExamples/SimpleForm';
import GiftCardPage from './components/useStateExamples/GiftCardPage'
import UpdateBrowserTab from './components/useEffectExamples/UpdateBrowserTab';
import APICalls from './components/useEffectExamples/APICalls';
import CustomerData from './components/useEffectExamples/customerData';
import Grocery from './components/useReducerExamples/Grocery';
import FocusInputField from './components/useRefExamples/FocusInputField';
import CustomHook from './components/customHooks/CustomHook';
import Day from './components/customHooks/Day';

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
        <Day/>
        <FocusInputField/>
        <Grocery/>
        <CustomerData/>
        <APICalls/>
        <UpdateBrowserTab/>
        <GiftCardPage/>
        <SimpleForm/>
        <LightDarkTheme/>
        <Root/>
        <MapMethod/>
        <Desserts/>
        <ControlledForm/>
        <Ratings/>
        <UserDetailsForm/>
        <UnControlledForm/>
        <CustomHook/>
      </header>
    </div>
  );
}

export default App;
