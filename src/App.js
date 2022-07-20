import './App.css';
import AnimateRoutes from './components/AnimateRoutes';
import Card from './components/Card';
import Home from './components/Home';
import { BrowserRouter as Router} from "react-router-dom";


function App() {
  //const location = useLocation();
  return (

    <Router basename="/pb-web-test">
      <AnimateRoutes />
    </Router>

  );
}

export default App;
