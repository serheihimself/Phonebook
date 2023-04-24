import useAuth from '../../hooks/UseAuth';
import HomeAuthNav from '../HomeAuthNav/HomeAuthNav';
import { Section, Title } from './HomePage.styles';

const HomePage = () => {
  const isLoggedIn = useAuth();

  return (
    <>
      <Section>
        <Title>Welcome to PhoneBook</Title>
        {!isLoggedIn && <HomeAuthNav />}
      </Section>
    </>
  );
};

export default HomePage;
