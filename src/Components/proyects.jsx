import '../style/general.scss';
import CardsProyects from './cardsProyects';
import data from '../Json/Proyects.json';

function Proyects(){
  return(
    <section id='proyects' className="proyects__container">
      <h2 className="proyects__title">Proyectos</h2>
      <div className='proyects__cards'>
        {data.map( proyects => 
          <CardsProyects 
            links={proyects.link}
            picture={proyects.picture}
            description={proyects.description}  
          />
        )}
      </div>
    </section>
  )
}

export default Proyects;