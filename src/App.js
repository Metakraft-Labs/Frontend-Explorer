import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componets/header.jsx'
import Footer from './Componets/footer.jsx'
import About from './Componets/About.jsx'
import Contact from './Componets/contact.jsx'
import Home from './Componets/Home.jsx'
import InfiniteSpace from './Animation/Infinitespace.jsx';
import Explore from './Componets/explore.jsx'

import $ from 'jquery'
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route exact path="/explore" element={<><Explore/></>}/>
     <Route exact path="/" element={<><Header/><Home/><Footer/></>}/>
     <Route exact path="/about" element={<><Header/><About/><Footer/></>}/>
     <Route exact path="/contact" element={<><Header/><Contact/><Footer/></>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
