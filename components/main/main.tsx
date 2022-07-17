import QuickCalculation from './quickCalculation/quickCalculation';
import ComprehensiveCalculation from './comprehensiveCalculation/comprehensiveCalculation';
import styles from '../../styles/components/main/main.module.css';
import GPAVisualiser from './comprehensiveCalculation/GPAVisualiser/GPAVisualisation';

const Main: React.FC = () => {

    return (
        <main>
            <aside className={ styles.main }>
                <h1>A <span className={ styles.colourfulText }>flexible way</span> to <br /> calculate your GPA</h1>
                <p className={ styles.sentence1 }> Customised points</p>
                <p className={ styles.sentence2 }> Self-defined decimal places</p>
                <p className={ styles.sentence3 }> Visualised GPA chart</p>
            </aside>
            <div className={ styles.quickCalculation }>
                <section>
                    <h2>Already have a current GPA and want to predict one?</h2>
                    <p>Try the quick calculator</p>
                </section>
                <QuickCalculation />
            </div>
            <div className={ styles.comprehensiveCalculation }>
                <section>
                    <h2>Comprehensive GPA Calculator</h2>
                    <p>Weighted GPA | Course manager | GPA Visualisation</p>
                </section>
                <ComprehensiveCalculation />
            </div>
        </main>
    )
}

export default Main;