import type { NextPage } from 'next'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
        <Header />
        <Footer />
    </div>
  );
};

export default Home;
