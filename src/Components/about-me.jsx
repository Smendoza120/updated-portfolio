import "../style/general.scss";
import icono from "../Images/icono.svg";
import picture from "../Images/profile.png";
import CV from '../Documents/Harold_vida.pdf';

function AboutMe() {
  return (
    <section id="about" className="about__container">
      <img className="about__picture" src={picture} alt="Profile" />
      <div className="about__description">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          laborum. Soluta temporibus dignissimos, quis quisquam optio deleniti
          cumque asperiores inventore accusamus, sit delectus eligendi aliquam
          maiores quasi, repellat illum cupiditate.
        </p>

        <div className="about__info">
          <ul className="about__info-container">
            <li className="about__info-description">
              <strong>Nombre: </strong>Harold Sanchez
            </li>
            <li className="about__info-description">
              <strong>Edad: </strong>24
            </li>
            <li className="about__info-description">
              <strong>Telefono: </strong>(+57) 311-804-7047
            </li>
            <li className="about__info-description">
              <strong>Ubicación: </strong>Bogotá - Colombia
            </li>
            <li className="about__info-description">
              <strong>Correo: </strong>sanchezharold13(@)gmail.com
            </li>
          </ul>
        </div>
        <a className="about__cv" href={CV} target="_blank" rel="noreferrer">
          <button className="about__button">
            <img className="about__icon" src={icono} alt="Icono CV" />
            Dowload CV
          </button>
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
