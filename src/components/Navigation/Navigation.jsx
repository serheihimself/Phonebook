import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/"
        >
          Home
        </NavLink>
      </div>
      {isLoggedIn && (
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
