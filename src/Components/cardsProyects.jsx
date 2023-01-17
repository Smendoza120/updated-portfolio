import '../style/general.scss';

function CardsProyects({links, picture, description}) {
  return (
    <div className="cards-poyects__container">
      <a 
        className="cards-poyects__links" 
        href={links} 
        target='_blank'
        rel='noreferrer'>
        <img 
          className="cards-poyects__image" 
          src={require(`../Images/${picture}.png`)} 
          alt={description} />
      </a>
    </div>
  );
}

export default CardsProyects;
