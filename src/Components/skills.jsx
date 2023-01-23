import SkillsDescription from "./cardsSkills";
import dataSkills from '../Json/skills.json'

function Skills (){
    return (
      <section id="skills" className="skills__container">
        <h2 className="skills__title">Habilidades</h2>
        <div className="skills__info">
          {
            dataSkills.map(skills =>
              <SkillsDescription
                title={skills.tecnology}
                first={skills.first}
                second={skills.second}
                third={skills.third}
                fourth={skills.fourth}
                fifth={skills.fifth}
              />
            )
          } 
        </div>
      </section>
    )
}

export default Skills;