import React from 'react'

// MUI :
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

// Chart.Js : 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ScriptableContext } from 'chart.js';

import { Line } from "react-chartjs-2";

// Assets | ICONS :
// import Pointer from "../../../../../../Assets/Images/pointer.png"

// CSS :
// import "./SalesChart.scss"


// Registring Chart :
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const SalesChart = () => {
    let Theme = useTheme()

    let data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            // {
            //     label: "# of Votes",
            //     data: [0, 320, 600, 720, 850, 690, 805, 1200, 1010, 300, 400, 560,],
            //     borderWidth: 4,
            //     // borderDash: [2, 2],
            //     // pointStyle: Pointer,
            //     // borderColor: "#B5BFCE",
            //     borderColor: "#BE2F5D",
            //     backgroundColor: "transparent",
            //     // pointBorderColor: "transparent",
            //     tension: 0.4,
            // }, 
            {
                label: "Real Values",
                data: [0, 200, 250, 200, 1050, 950, 1100, 900, 1200, 700, 550, 650],
                fill: "start",
                borderColor: Theme.palette.primary.grey,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, Theme.palette.primary.field);
                    gradient.addColorStop(1, Theme.palette.primary.main);
                    return gradient;
                },
                pointBorderColor: "white",
                tension: 0.4,
                borderWidth: 4,
                pointHoverRadius: 6,
                pointBorderWidth: 6,
                pointRadius: 10,
            }]
    }

    let options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        elements: {
            point: {
                // pointStyle: <img src={Pointer} alt="ASD" />,

                // radius: (context) => {
                //     console.log(context);
                //     const index = context.dataIndex;
                //     const value = context.dataset.data[index];
                //     let heighestValue = Math.max(...context.dataset.data)
                //     return value == heighestValue ? 15 : 0
                // },
                // display: true,
                // padding:"10px",
                // backgroundColor:"red",
                // borderWidth:8,

            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12
                    },
                    color: "#2D5F72"
                    // color: "#006400"
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    // display: false,
                    font: {
                        size: 12
                    },
                    color: Theme.palette.primary.field,
                    callback: function callback(value, index, values) {
                        return "$" + value;
                    }
                },
                grid: {
                    color: "#B5BFCE",
                    drawBorder: true
                },
                border: {
                    display: false,
                    dash: [2, 2]
                }
            }
        }
    }

    return (
        <>
            <Box sx={{ height: "100%", boxShadow: (theme) => `0px 0px 5px ${theme.palette.primary.shadow}`, padding: "1rem", borderRadius: ".7em" }}>
                <Line options={options} data={data} />
            </Box>
        </>
    )
}

export default SalesChart