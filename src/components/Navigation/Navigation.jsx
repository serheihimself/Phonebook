import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLink to="/" style={{ color: 'white', fontWeight: '700' }}>
          Home
        </NavLink>
      </div>
      {isLoggedIn && (
        <div>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
