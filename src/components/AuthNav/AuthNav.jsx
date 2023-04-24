import { NavLink } from 'react-router-dom';
import { NavBox, NavDiv } from './AuthNav.styles';

const AuthNav = () => {
  return (
    <NavBox>
      <NavDiv>
        <NavLink to="/register" style={{ color: 'white', fontWeight: '700' }}>
          Registration
        </NavLink>
      </NavDiv>
      <NavDiv>
        <NavLink to="/login" style={{ color: 'white', fontWeight: '700' }}>
          LogIn
        </NavLink>
      </NavDiv>
    </NavBox>
  );
};

export default AuthNav;
