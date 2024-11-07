import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './view/Home'
import Second from './view/Second'
import BackToTop from './components/common/BackToTop';
import Preloader from './components/common/Preloader';

function App() {
  return (

      <div>
        <BrowserRouter>
        <Preloader/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='second' element={<Second/>} />
        </Routes>
        <BackToTop/>
        </BrowserRouter>
    </div>
  );
}

export default App;
