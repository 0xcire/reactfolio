import { m } from 'framer-motion';
import Directory from './Directory';
import { skillTree } from '../../data/data';

type treeProps = {
  skills: skillTree;
};

const content = {
  initial: { y: '100%', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.25,
    },
  },
};

function SkillTree({ skills }: treeProps) {
  const skillKeys = Object.keys(skills);
  return (
    <m.div
      className='order-3 w-6/12 mt-8 md:mt-[52px] md:w-full'
      variants={content}
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
  );
}

export default SkillTree;
