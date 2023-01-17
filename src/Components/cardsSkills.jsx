import '../style/general.scss'

function SkillsDescription({ title, description }) {
  return (
    <div className='description__container'>
      <h3 className='description__title'>{title}</h3>
      <p className='description__text active'>{description}</p>
    </div>
  );
}

export default SkillsDescription;
