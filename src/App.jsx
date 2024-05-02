import './App.css'
import { Header } from './assets/components/Header/Header';
import { Catalog } from './pages/Catalog/Catalog';
import { Home } from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { SingleProductPage } from './pages/SingleProductPage/SingleProductPage';
import { Footer } from './assets/components/Footer/Footer';
import { About } from './pages/About/About';

export default function App() {
  return (
    <>
      <Header/>
      <main>
      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/catalog' element={<Catalog/>} />
              <Route path='/catalog/:id' element={<SingleProductPage/>} />
              <Route path='/about' element={<About/>} />
          </Routes>
      </main>
      <Footer/> 
    </>
  );
}