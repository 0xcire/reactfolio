import { m } from 'framer-motion';

import Directory from './Directory';
import HideOverflow from '@/components/Layout/HideOverflow';

import { skillTree, springReveal } from '@/data/data';

type treeProps = {
  skills: skillTree;
};

function SkillTree({ skills }: treeProps) {
  const skillKeys = Object.keys(skills);
  return (
    <HideOverflow className='col-start-2 col-end-5 row-start-2 row-end-7 mt-4 min-h-full md:mt-0'>
      <m.div
        className='w-6/12 md:mt-[18px] md:w-full'
        variants={springReveal}
        transition={{
          delayChildren: 0.15,
          staggerChildren: 0.1,
        }}
      >
        <details open>
          <summary className='w-full cursor-pointer'>SKILLS:</summary>
          <div className='skills mt-2 flex flex-col justify-between md:w-10/12 xl:w-8/12'>
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
