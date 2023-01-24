import "../style/general.scss";
import icono from "../Images/icono.svg";
import picture from "../Images/profile.png";
import CV from "../Documents/Harold_vida.pdf";

function AboutMe() {
  return (
    <section id="about" className="about__container">
      <img className="about__picture" src={picture} alt="Profile" />
      <div className="about__description">
        <h2 className="about__title">Acerca de</h2>
        <p className="about__text">
          Mi nombre es Harold Sanchez tengo 24 años y en los últimos 9 meses me
          he convertido en una persona autónoma y constante, teniendo un total
          de 16 cursos certificados en los cuales me forme como desarrollador
          front-end, participe en el ministerio de las TIC y actualmente me
          encuentro en un curso de desarrollo web con Oracle.
        </p>
        <p className="about__text">
          Me especializo en la maquetación web, desarrollo responsive y el uso
          correcto de las google dev tools, actualmente sigo trabajando en mi
          crecimiento profesional, personal e intelectual.
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
        <button className="about__button">
          <a className="about__cv" href={CV} target="_blank" rel="noreferrer">
            <img className="about__icon" src={icono} alt="Icono CV" />
            Dowload CV
          </a>
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
