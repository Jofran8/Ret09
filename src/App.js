import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import News from './pages/News';
import About  from './pages/About';


function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
