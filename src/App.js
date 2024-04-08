import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Wheather from './components/Wheather';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Wheather/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
