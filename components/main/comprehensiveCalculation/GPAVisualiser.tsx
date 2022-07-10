import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { BarElement, PointElement, LineElement, CategoryScale, Chart, LinearScale, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);
import GradeContext from "../../../context/gradeContext";
import MaxGPAContext from "../../../context/maxGPAContext";
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';
import useCalculatingGPA from "../../../hooks/useCalculatingGPA";

const GPAVisualiser = ({ courseData, CGPA, totalCredits }) => {
    if (courseData.length === 0) return;

    const { gradeList } = useContext(GradeContext);
    const { maxGPA } = useContext(MaxGPAContext);
    const GPA = useCalculatingGPA(CGPA, totalCredits);

    const maxSemester = Math.max(...courseData.map(courseData => courseData.semester));
    let gradeMap = new Map;
    let courseMap = new Map;

    for (let i = 1; i <=maxSemester; i++) {
        courseData.map(courseData => courseData.semester === i ?
            courseMap.has(i) ?
                courseMap.set(i, courseData.credits + parseInt(courseMap.get(i)))
            : courseMap.set(i, courseData.credits)
        : 0);
    }

    for (let i = 1; i <= maxSemester; i++) {
        courseData.map(courseData => courseData.semester === i ? 
            gradeMap.has(i) ? 
                gradeMap.set(i, courseData.grade === "" ? 0　
                : ((gradeList.find(gradeList => (gradeList.grade === courseData.grade)).point * courseData.credits) / courseMap.get(i) + parseFloat(gradeMap.get(i)))) 
            : gradeMap.set(i, courseData.grade === "" ? 0　: parseFloat(((gradeList.find(gradeList => (gradeList.grade === courseData.grade)).point * courseData.credits) / courseMap.get(i)).toFixed(3))) 
        : 0);
    }

    const [chartData, setChartData] = useState({
        labels: [],
        datasets:[],
    });

    const [chartOptions, setChartOptions] = useState({});

    const dataForAverage = [];
    for (let i = 0; i < maxSemester; i++) {
        dataForAverage[i] = GPA;
    }

    console.log(gradeMap);

    useEffect(() => {
        setChartData({
            labels: Array.from(courseMap.keys()),
            datasets: [
                {
                    label: "GPA",
                    data: Array.from(gradeMap.values()),
                    borderColor: "rgb(22, 22, 60)",
                }, 
                {
                    label: "Average GPA",
                    data: dataForAverage,
                    borderColor: "rgba(22, 22, 60, 0.4)",
                    borderDash: [6, 6],
                    borderDashOffset: 0,
                }
            ]
        });
        setChartOptions({
            maintainAspectRatio: false,
            responsive: true,
            global: {
                defaultFontFamily: "Raleway"
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            family: 'Raleway',
                        },
                    },
                },
                y: {
                    max: Math.min(Math.max(...Array.from(gradeMap.values()))*1.05, maxGPA),
                    min: Math.min(...Array.from(gradeMap.values()))*0.8,
                    ticks: {
                        font: {
                            family: 'Raleway',
                        },
                    },
                },

            },
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        font: {
                            family: "Raleway"
                        }
                    }
                },
                title: {
                    display: true,
                    text: "GPA Visualisation",
                    font: {
                        family: "'Raleway'",
                        size: "24"
                    }
                },
            }
        })
    }, [courseData, gradeList]);

    return (
        <Line className={ styles.GPAVisualiser } options={chartOptions} data={chartData}></Line>
    );
};

export default GPAVisualiser;