import '../style/general.scss';
import Icons from './footerIcons';
import data from '../Json/icons.json';

function Footer(){
  return(
    <footer>
      {
        data.map(icons =>
          <Icons links={icons.links} image={icons.images} description={icons.description}/>  
        )
      }
    </footer>
  )
}

export default Footer;