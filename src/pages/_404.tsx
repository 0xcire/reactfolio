import { Link } from 'react-router-dom';

type _404Prop = {
  message: string;
};

function _404(props: _404Prop) {
  return (
    <div className='h-full grid place-items-center'>
      <div>
        <h1>{props.message}</h1>
        <p>
          go <Link to={`/`}>home</Link>
        </p>
      </div>
    </div>
  );
}

export default _404;
