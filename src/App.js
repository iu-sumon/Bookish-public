import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import DashBoard from './Components/DashBoard/DashBoard';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import BdAddress from './Components/Contact/BdAddress';
import UsAddress from './Components/Contact/UsAddress';
 
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/review' element={<Review />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/blogs' element={<Blogs />} />

        <Route path='/contact' element={<Contact />}>
          <Route path='bd-address' element={<BdAddress />} />
          <Route path='us-address' element={<UsAddress />} />
        </Route>

        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
     
    </div>
  );
}

export default App;
