import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function SkillsChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext("2d");

        const getResponsiveOptions = () => {
            const isSmallScreen = window.innerWidth < 768;
            return {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        display: !isSmallScreen, // Hide legend on small screens
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label; // Show only the label
                            }
                        }
                    }
                }
            };
        };

        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: ['HTML', 'CSS', 'JS', 'React', 'C++', 'C', 'Node.js'],
                datasets: [{
                    data: [70, 70, 50, 70, 80, 50, 30],
                    backgroundColor: ['#6acde5', '#0085bd', '#2a4e87', '#443866', '#c679b4', '#c0bbde', '#c1e9fc'],
                    hoverOffset: 20 // Distance the arc moves outward on hover
                }],
            },
            options: getResponsiveOptions(),
        });

        const resizeListener = () => {
            chartInstance.current.options = getResponsiveOptions();
            chartInstance.current.update();
        };

        window.addEventListener('resize', resizeListener);

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return (
        <canvas 
            ref={chartRef}
            style={{ 
                width: '70vw',    // Specific width for the canvas
                height: '25vw',   // Specific height for the canvas
                maxWidth: '40vw',  // Maximum width to make it responsive up to 40% of the viewport width
                maxHeight: '30vw', // Maximum height to maintain aspect ratio responsiveness
                paddingTop: "3vw" 
            }}
        />
    );
}
