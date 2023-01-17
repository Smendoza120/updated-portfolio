import "../style/general.scss";
import logo from "../Images/logo.png";
import logo2 from "../Images/logo2.png";
import puntos from "../Images/puntos.png";
import foto from '../Images/perfil.png'
import { useState } from "react";

function Profile() {
  const [clicked, setClicked] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleMouseEnter = () => {
    setIsShown(true)
  }

  const handleMouseLeave = () => {
    setIsShown(false)
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img 
            src={logo} 
            alt="Logo" 
            className="header__logo-1" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}/>
          <img src={logo2} alt='Logo2' className={`header__logo-2 ${isShown ? 'active__logo' : ''}`} />
        </div>
        <nav>
          <img src={puntos} alt="Menu desplegable" className='header__puntos' onClick={handleClick} />
          <ul className={`header__nav ${clicked ? 'active' : ''}`} id="header__nav">
            <li><a href="#about" className="header__nav-items">About Me</a></li>
            <li><a href="#skills" className="header__nav-items">Skills</a></li>
            <li><a href="#proyects" className="header__nav-items">Proyects</a></li>
            <li><a href="/" className="header__nav-items">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="header__profile">
        <img 
        src={foto}
        alt='Foto Pefil'
        className="header__picture"/>
        <h1 className="header__name">Harold Sanchez</h1>
        <h2 className="header__description">Front-end Developer</h2>
      </div>
    </header>
  );
}

export default Profile;
