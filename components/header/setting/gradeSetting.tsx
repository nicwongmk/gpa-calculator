import { useEffect } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';
import Grade from './grade';

const GradeSetting = ({ receiveSelectedSetting }) => {
    const [gradeList, setGradeList] = useLocalStorage("gradeList", [
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

    useEffect(() => setGradeList(receiveSelectedSetting), [receiveSelectedSetting]);
    
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