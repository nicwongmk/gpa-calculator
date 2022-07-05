import type { NextPage } from 'next';
import useLocalStorage from "../hooks/useLocalStorage";
import Header from '../components/header/header';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';
import styles from '../styles/Home.module.css';
import GradeProvider from '../context/gradeProvider';

const Home: NextPage = () => {
  const [maxGPA, setMaxGPA] = useLocalStorage("maxGPA", 4.00);
  const [decimalPlaces, setDecimalPlaces] = useLocalStorage("decimalPlaces", 2);

  return (
    <GradeProvider>
      <div className={styles.container}>
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
          <Header 
            decimalPlaces={ (decimalPlaces) => setDecimalPlaces(decimalPlaces)}
            maxGPA={ (maxGPA) => setMaxGPA(maxGPA) }
          />
          <Main decimalPlaces={ decimalPlaces } maxGPA={ maxGPA }/>
          <Footer />
      </div>
    </GradeProvider>
  );
};

export default Home;
