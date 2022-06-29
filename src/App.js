import './App.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout/> }>
              <Route index element={ <Home/> }/>
              <Route path='about' element={ <About/> }/>
              <Route path='contact' element={ <Contact/> }/>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
