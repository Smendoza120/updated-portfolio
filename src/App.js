import './App.css';
import Profile from './Components/header';
import AboutMe from './Components/about-me';
import Skills from './Components/skills';
import Proyects from './Components/proyects';
import Contact from './Components/contact';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Profile />
      <AboutMe />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
