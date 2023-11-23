import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Esta página no existe!</h1>
      <Link to="/expenses" style={{color: 'red'}} >
        Regresar al menú principal
      </Link>
    </div>
  )
}

export default NotFound;