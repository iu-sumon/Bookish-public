import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/coins_details/:coinId' element={<CoinDetails />} />

          <Route path='/contact' element={<Contact />}>
            <Route path='bd-address' element={<BDAddress />} />
            <Route path='us-address' element={<USAddress />} />
          </Route>

          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Routes>
    </div>
  );
}

export default App;
