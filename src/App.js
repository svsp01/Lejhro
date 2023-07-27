import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json'
import './App.css';
import Home from './Home/Home';
import NavTop from './navbar/NavTop';
import Foot from './Footer/Foot';

function App() {
  return (
    <>
      <NavTop/>
      <Home/>
      <Foot/>
    </>
  );
}

export default App;
