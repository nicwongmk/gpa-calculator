import type { NextPage } from 'next';
import useLocalStorage from "../hooks/useLocalStorage";
import Header from '../components/header/header';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [maxGPA, setMaxGPA] = useLocalStorage("maxGPA", 4.00);
  const [decimalPlaces, setDecimalPlaces] = useLocalStorage("decimalPlaces", 2);
  const [dataFromSetting, setDataFromSetting] = useLocalStorage("gradeList", [
    { grade: "A+", point: 4},
    { grade: "A", point: 4},
    { grade: "A-", point: 3.7},
    { grade: "B+", point: 3.3},
    { grade: "B", point: 3},
    { grade: "B-", point: 2.7},
    { grade: "C+", point: 2.3},
    { grade: "C", point: 2},
    { grade: "C-", point: 1.7},
    { grade: "D+", point: 1.3},
    { grade: "D", point: 1},
    { grade: "D-", point: 0.7},
    { grade: "F", point: 0},
]);

  return (
    <div className={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
        <Header 
          dataFromSetting={ (dataFromSetting) => setDataFromSetting(dataFromSetting) } 
          decimalPlaces={ (decimalPlaces) => setDecimalPlaces(decimalPlaces)}
          maxGPA={ (maxGPA) => setMaxGPA(maxGPA) }
        />
        <Main dataFromSetting={ dataFromSetting } decimalPlaces={ decimalPlaces } maxGPA={ maxGPA }/>
        <Footer />
    </div>
  );
};

export default Home;
