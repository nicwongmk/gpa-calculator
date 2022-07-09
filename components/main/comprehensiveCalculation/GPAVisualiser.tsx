import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { BarElement, PointElement, LineElement, CategoryScale, Chart, LinearScale, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';
import GradeContext from "../../../context/gradeContext";

const GPAVisualiser = ({ courseData }) => {
    if (courseData.length === 0) return;

    const { gradeList } = useContext(GradeContext);

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
            : gradeMap.set(i, courseData.grade === "" ? 0　: (gradeList.find(gradeList => (gradeList.grade === courseData.grade)).point * courseData.credits) / courseMap.get(i)) 
        : 0);
    }

    const [chartData, setChartData] = useState({
        labels: [],
        datasets:[],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: Array.from(courseMap.keys()),
            datasets: [
                {
                    label: "GPA",
                    data: Array.from(gradeMap.values()),
                    borderColor: "rgb(22, 22, 60)",
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
                    min: Math.min(...Array.from(gradeMap.values()))*0.8,
                    ticks: {
                        font: {
                            family: 'Raleway',
                        },
                    },
                }
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