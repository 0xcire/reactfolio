import Directory from './Directory';
import { skillTree } from '../../data/data';

type treeProps = {
  skills: skillTree;
};

function SkillTree({ skills }: treeProps) {
  const skillKeys = Object.keys(skills);
  return (
    <div className='order-3 w-6/12 mt-8 md:mt-[52px] md:w-full'>
      <details open>
        <summary className='cursor-pointer w-full'>SKILLS:</summary>
        <div className='mt-2 skills flex flex-col justify-between md:w-10/12 xl:w-8/12'>
          {skillKeys.map((skill, index) => (
            <Directory
              key={index}
              title={skill}
              files={skills[skill as keyof skillTree]}
            />
          ))}
        </div>
      </details>
    </div>
  );
}

export default SkillTree;
