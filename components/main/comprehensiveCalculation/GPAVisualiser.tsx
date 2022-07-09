import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { BarElement, PointElement, LineElement, CategoryScale, Chart, LinearScale, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);
import styles from '../../../styles/components/main/comprehensiveCalculation.module.css';

const GPAVisualiser = ({ courseData }) => {
    const semesterGPA = [
        {semester: 1, GPA: 3.51},
        {semester: 2, GPA: 3.12},
        {semester: 3, GPA: 3.23},
        {semester: 4, GPA: 3.38},
    ]

    const [chartData, setChartData] = useState({
        labels: [],
        datasets:[],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: semesterGPA.map(semester => semester.semester),
            datasets: [
                {
                    label: "GPA",
                    data: semesterGPA.map(semester => semester.GPA),
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
                    min: 3.0,
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
    }, [])

    return (
        <Line className={ styles.GPAVisualiser } options={chartOptions} data={chartData}></Line>
    );
};

export default GPAVisualiser;