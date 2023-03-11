import { useNavigate } from 'react-router-dom';

type LinkBtnProps = {
  path: string;
  text: string;
};

function LinkBtn({ path, text }: LinkBtnProps) {
  const navigate = useNavigate();
  return (
    <button className='' onClick={() => navigate(`${path}`)}>
      {text}
    </button>
  );
}

export default LinkBtn;
