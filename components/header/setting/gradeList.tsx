import useLocalStorage from '../../../hooks/useLocalStorage';
import Grade from './grade';

const GradeList = () => {
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

    const setPointHandler = (point: number, key: number) => {
        setGradeList((prev: []) => [
            ...prev.slice(0, key),
            point,
            ...prev.slice(key + 1)
        ]);
    };

    return (
        <div>
            { gradeList.map((gradeList: any, key: number) => (
                <Grade 
                    key={key}
                    grade={gradeList.grade}
                    point={gradeList.point}
                    pointChangeHandler={(point: number) => {setPointHandler(point, key);
                    }}
                />
            )) }
        </div>
    );
};

export default GradeList;