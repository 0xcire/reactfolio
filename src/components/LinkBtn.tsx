import { useNavigate } from 'react-router-dom';

type LinkBtnProps = {
  path: string;
  text: string;
};

function LinkBtn(props: LinkBtnProps) {
  const navigate = useNavigate();
  return (
    <button className='' onClick={() => navigate(`${props.path}`)}>
      {props.text}
    </button>
  );
}

export default LinkBtn;
