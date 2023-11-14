import Routes from './_config/routes';
import './App.css';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
   <Routes/>
  );
}

export default App;
