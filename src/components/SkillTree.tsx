import Directory from './Directory';

const skills: Record<string, string[]> = {
  '.github': ['actions.yml'],
  client: ['.html', '.css', '.tailwind', '.js', '.ts', '.react'],
  server: ['.node', '.express'],
};

const skillKeys = Object.keys(skills);

function SkillTree() {
  return (
    <div className='order-3 mt-4 md:mt-[52px] w-6/12 md:w-full'>
      <details open>
        <summary className='cursor-pointer w-full'>SKILLS:</summary>
        <div className='mt-2 skills flex flex-col justify-between md:w-10/12 xl:w-8/12'>
          {skillKeys.map((skill, index) => (
            <Directory key={index} title={skill} files={skills[skill]} />
          ))}
        </div>
      </details>
    </div>
  );
}

export default SkillTree;
