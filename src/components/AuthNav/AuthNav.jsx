import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <div className={css.link}>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/register"
        >
          Registration
        </NavLink>
      </div>
      <div className={css.link}>
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
