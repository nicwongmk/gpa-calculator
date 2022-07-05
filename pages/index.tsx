import type { NextPage } from 'next';
import Header from '../components/header/header';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';
import styles from '../styles/Home.module.css';
import CalculationDataProvider from '../context/calculationProvider';

const Home: NextPage = () => {
  return (
    <CalculationDataProvider>
      <div className={styles.container}>
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
          <Header />
          <Main />
          <Footer />
      </div>
    </CalculationDataProvider>
  );
};

export default Home;
