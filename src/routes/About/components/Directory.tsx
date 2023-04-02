import { useRef, useState } from 'react';
import { File, Folder, FolderOpen } from '@phosphor-icons/react';

type DirProps = {
  title: string;
  files: Array<string> | undefined;
};

function Directory({ title, files }: DirProps) {
  const [isOpen, setOpen] = useState<boolean>(true);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const toggleOpen = () => {
    setOpen(!isOpen);
    if (detailsRef.current) {
      detailsRef.current.open = isOpen;
    }
  };

  return (
    <details ref={detailsRef} open>
      <summary
        onClick={toggleOpen}
        className='flex cursor-pointer items-center rounded-md  hover:bg-neutral-dark'
      >
        {isOpen ? (
          <FolderOpen className='mr-1' size={20} />
        ) : (
          <Folder className='mr-1' size={20} />
        )}
        {title}
      </summary>
      {files?.map((file, index) => (
        <div key={index} className='flex items-center pl-5'>
          <File className='mr-1' size={20} />
          <p>{file}</p>
        </div>
      ))}
    </details>
  );
}

export default Directory;
