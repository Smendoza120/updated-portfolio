import SkillsDescription from "./cardsSkills";

function Skills (){
    return (
      <section id="skills" className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__info">
          <SkillsDescription 
            title={'HTML'}
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vero aspernatur dignissimos veritatis quibusdam! Laudantium, distinctio aliquam voluptatum assumenda, amet vel incidunt repudiandae rem aliquid provident velit non excepturi nobis!'/>
            <SkillsDescription 
            title={'CSS'}
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vero aspernatur dignissimos veritatis quibusdam! Laudantium, distinctio aliquam voluptatum assumenda, amet vel incidunt repudiandae rem aliquid provident velit non excepturi nobis!'/>
            <SkillsDescription 
            title={'JavaScript'}
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vero aspernatur dignissimos veritatis quibusdam! Laudantium, distinctio aliquam voluptatum assumenda, amet vel incidunt repudiandae rem aliquid provident velit non excepturi nobis!'/>
            <SkillsDescription 
            title={'React'}
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus vero aspernatur dignissimos veritatis quibusdam! Laudantium, distinctio aliquam voluptatum assumenda, amet vel incidunt repudiandae rem aliquid provident velit non excepturi nobis!'/>
        </div>
      </section>
    )
}

export default Skills;