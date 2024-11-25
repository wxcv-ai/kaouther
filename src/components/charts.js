import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import ApexCharts from 'react-apexcharts';
import { fetch_data } from '../api/fetch';
import { useParams } from 'react-router-dom';
const CandlestickChart = () => {
    const { symbol } = useParams();
    const [seriesData, setSeriesData] = useState([]);
    console.log(symbol , 'symbolsymbolsymbol')
    const options = {
        chart: {
            type: 'candlestick',
            background: '#121212',
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'dd MMM',
                style: {
                    colors: '#ffffff',
                },
            },
        },
        yaxis: {
            labels: {
                formatter: (value) => value.toFixed(2),
                style: {
                    colors: '#ffffff',
                },
            },
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: (value) => value.toFixed(2),
            },
        },
        grid: {
            borderColor: '#333333',
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#00ff00',
                    downward: '#ff0000',
                },
            },
        },
    };

    useEffect(() => {
        const fetchCandlestickData = async () => {
            const data = await fetch_data(symbol.toUpperCase());

            if (data) {
                const formattedData = data.map(item => ({
                    x: item.x,
                    y: [item.y[0], item.y[1], item.y[2], item.y[3]],
                }));
                setSeriesData([{ data: formattedData }]);
            }
        };

        fetchCandlestickData();
    }, [symbol]);
    return (
        <Paper
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                backgroundColor: '#121212',
            }}
        >
            <ApexCharts
                options={options}
                series={seriesData}
                type="candlestick"
                height="100%"
                width="100%"
            />
        </Paper>
    );
};

export default CandlestickChart;
