import { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { DoughnutController, CategoryScale, Chart, ArcElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
Chart.register(CategoryScale, LinearScale, DoughnutController, ArcElement, Title, Tooltip, Legend);
import GradeContext from "../../../../context/gradeContext";
import styles from '../../../../styles/components/main/comprehensiveCalculation.module.css';

const GradeVisualisation = ({ courseData }) => {
    const [chartData, setChartData] = useState({labels: [], datasets:[],});
    const [chartOptions, setChartOptions] = useState({});
    const { gradeList } = useContext(GradeContext);

    Chart.overrides.doughnut.plugins.legend.display = false;

    const subGradeMap = new Map;
    gradeList.map(gradeList => subGradeMap.set(gradeList.grade, 0));
    courseData.filter(courseData => courseData.grade !== "").map(courseData => subGradeMap.set(courseData.grade, subGradeMap.get(courseData.grade) + 1));

    console.log(subGradeMap);

    const gradeListArr = Array.from(subGradeMap.values());
    for (let i = 0; i < gradeListArr.length; i++) {
        if (i === 0 ) {
            gradeListArr[1] = gradeListArr[1] + gradeListArr[0];
            gradeListArr[0] = 0;
        }
        if (i === 2 ) {
            gradeListArr[1] = gradeListArr[1] + gradeListArr[2];
            gradeListArr[2] = 0;
        }
        if (i === 3 ) {
            gradeListArr[4] = gradeListArr[4] + gradeListArr[3];
            gradeListArr[3] = 0;
        }
        if (i === 5 ) {
            gradeListArr[4] = gradeListArr[4] + gradeListArr[5];
            gradeListArr[5] = 0;
        }
        if (i === 6 ) {
            gradeListArr[7] = gradeListArr[7] + gradeListArr[6];
            gradeListArr[6] = 0;
        }
        if (i === 8 ) {
            gradeListArr[7] = gradeListArr[7] + gradeListArr[8]
            gradeListArr[8] = 0;
        }
        if (i === 9 ) {
            gradeListArr[10] = gradeListArr[10] + gradeListArr[9];
            gradeListArr[9] = 0;
        }
        if (i === 11 ) {
            gradeListArr[10] = gradeListArr[10] + gradeListArr[11];
            gradeListArr[11] = 0;
        }
    }

    useEffect(() => {
        setChartData({
            labels: gradeList.map(gradeList => gradeList.grade),
            datasets: [
              {
                label: 'Dataset 1',
                data: Array.from(subGradeMap.values()),
                backgroundColor: [
                    "#4B4BC9", "#33338A", "#16163C",
                    "#49B0C9", "#32788A", "#16353D",
                    "#44C96A", "#2F8A49", "#153D20",
                    "#C9C34F", "#8A8636", "#3D3B18",
                    "#C95338"
                ],
              },
              {
                label: 'Dataset 2',
                data: gradeListArr,
                backgroundColor: [
                    "#4B4BC9", "#33338A", "#16163C",
                    "#49B0C9", "#32788A", "#16353D",
                    "#44C96A", "#2F8A49", "#153D20",
                    "#C9C34F", "#8A8636", "#3D3B18",
                    "#C95338"
                ],
              }
            ]
          });
          
        setChartOptions({
            data: chartData,
            options: {
                responsive: true,
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Grade Chart',
                    color: "rgb(22, 22, 60)",
                    font: {
                        family: "Raleway",
                        size: "24"
                    },
                },
                datalabels: {
                    display: function(context) {
                        return (context.dataset.data[context.dataIndex] !== 0)
                    },
                    formatter: function (value, context) {
                        return `${context.chart.data.labels[context.dataIndex]}(${value})`;
                    },
                    color: '#FFFFFF',
                    font: {
                        family: "Raleway",
                        size: "16"
                    },
                    labels: {
                        title: {
                            weight: "bold"
                        }
                    }
                }
            }
          }
        );
    }, [courseData])

    return (
        <div className={ styles.gradeVisualisation }>
            <Doughnut options={ chartOptions } data={ chartData } />
        </div>
    );
}

export default GradeVisualisation;