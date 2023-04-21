import { NavLink } from 'react-router-dom';

const HomeAuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </div>
  );
};

export default HomeAuthNav;
