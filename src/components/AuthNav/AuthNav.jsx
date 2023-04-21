import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/register"
        >
          Registration
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/login"
        >
          LogIn
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;
