import './sass_files/main.scss'
import './App.css';
import Navigation from './Navigation'
import Header from './Header';
import About from './About'
import Features from './Features';
import Projects from './Projects'
import Stories from './Stories';
import Book from './Book';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Features />
      <Projects />
      <Stories />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
