import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import About from './components/about';
import Home from './components/home';
import ContactUs from './components/contactUs';
import NotFound from './components/notFound';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
  </>
  );
}

export default App;
