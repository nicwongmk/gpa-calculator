import styles from '../../../styles/components/main/quickCalculation/quickCalculation.module.css';
import RegularInput from '../../UI/input/regularInput';
import CourseList from './courseList';

const QuickCalculation = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.resultContainer }>
                <p>CGPA:</p>
                <p>0</p>
                <p>Total Credits:</p>
                <p>0</p>
            </div>
            <div className={ styles.inputContainer }>
                <p>Current GPA:</p>
                <RegularInput className={undefined} type={''} placeholder={''} max={0} min={0} step={0} value={undefined} onChange={undefined} />
                <p>Current Credits:</p>
                <RegularInput className={undefined} type={''} placeholder={''} max={0} min={0} step={0} value={undefined} onChange={undefined} />
            </div>
            <CourseList />
        </div>
    );
};

export default QuickCalculation;