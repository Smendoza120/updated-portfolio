import '../style/general.scss'

function SkillsDescription({ title, first, second, third, fourth, fifth }) {
  return (
    <div className='description__container'>
      <h3 className='description__title'>{title}</h3>
      <ul className='description__text active'>
        <li className='description__list'>{first}</li>
        <li className='description__list'>{second}</li>
        <li className='description__list'>{third}</li>
        <li className='description__list'>{fourth}</li>
        <li className='description__list'>{fifth}</li>
      </ul>
    </div>
  );
}

export default SkillsDescription;
