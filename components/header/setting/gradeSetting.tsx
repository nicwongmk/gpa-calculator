import { useContext } from 'react';
import GradeContext from '../../../context/gradeContext';
import Grade from './grade';

const GradeSetting = () => {
    const {gradeList, setGradeList} = useContext(GradeContext);

    const setPointHandler = (point: number, key: number) => {
        setGradeList((prev: []) => [
            ...prev.slice(0, key),
            point,
            ...prev.slice(key + 1)
        ]);
    };

    return (
        <ul>
            { gradeList.map((gradeList: any, index: number) => (
                <Grade 
                    key={index}
                    grade={gradeList.grade}
                    point={gradeList.point}
                    pointChangeHandler={(point: number) => {setPointHandler(point, index);
                    }}
                />
            )) }
        </ul>
    );
};

export default GradeSetting;