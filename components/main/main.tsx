import styles from '../../styles/components/main/main.module.css';
import QuickCalculation from './quickCalculation/quickCalculation';

const Main: React.FC = () => {

    return (
        <main>
            <aside className={ styles.main }>
                <h1>A flexible way to <br /> calculate your GPA</h1>
                <p>． Customised points</p>
                <p>． Self-defined decimal places</p>
                <p>． Visualised GPA chart</p>
            </aside>
            <div className={ styles.quickCalculation }>
                <section>
                    <h2>Already have a current GPA and want to predict one?</h2>
                    <p>Try the quick calculator</p>
                </section>
                <QuickCalculation />
            </div>
            <div className={ styles.comprehensiveCalculation }>

            </div>
        </main>
    )
}

export default Main;