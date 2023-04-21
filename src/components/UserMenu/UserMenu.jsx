import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import useAuth from '../../hooks/UseAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
