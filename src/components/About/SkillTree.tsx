import { m } from 'framer-motion';
import Directory from './Directory';
import { skillTree } from '../../data/data';
import { springReveal } from '../../data/data';
import HideOverflow from '../Layout/HideOverflow';

type treeProps = {
  skills: skillTree;
};

function SkillTree({ skills }: treeProps) {
  const skillKeys = Object.keys(skills);
  return (
    <HideOverflow className='order-3'>
      <m.div
        className='w-6/12 mt-8 md:mt-[52px] md:w-full'
        variants={springReveal}
        transition={{
          delayChildren: 0.15,
          staggerChildren: 0.1,
        }}
      >
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
      </m.div>
    </HideOverflow>
  );
}

export default SkillTree;
