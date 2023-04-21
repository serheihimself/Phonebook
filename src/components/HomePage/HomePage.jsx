import useAuth from '../../hooks/UseAuth';
import HomeAuthNav from '../HomeAuthNav/HomeAuthNav';

const HomePage = () => {
  const isLoggedIn = useAuth();

  return (
    <>
      <section>
        <h1>Welcome to PhoneBook</h1>
        {!isLoggedIn && <HomeAuthNav />}
      </section>
    </>
  );
};

export default HomePage;
