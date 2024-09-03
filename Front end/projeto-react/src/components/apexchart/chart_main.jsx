import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import jsonData from '../public/somasTotais (2).json';

export default function CombinedChart() {
    const [seriesBar, setSeriesBar] = useState([]);
    const [ranking, setRanking] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedMunicipality, setSelectedMunicipality] = useState('Rio De Janeiro');
    const [pieSeries, setPieSeries] = useState([]);

    const years = Object.keys(jsonData);
    const municipalities = selectedYear ? Object.keys(jsonData[selectedYear] || {}) : [];

    useEffect(() => {
        if (selectedYear && selectedMunicipality) {
            const municipalityData = jsonData[selectedYear]?.[selectedMunicipality];
            if (municipalityData) {
                const culturaData = [];
                const totalData = [];
                let rankingData = [];

                let culturaTotal = 0;
                let totalGeral = 0;

                for (let i = 1; i <= 12; i++) {
                    const month = String(i).padStart(2, '0');
                    const valueCultura = parseFloat(municipalityData[month]?.cultura.replace(/\.(?=.*\.)/g, '').replace(',', '.')) || 0;
                    const valueTotal = parseFloat(municipalityData[month]?.total.replace(/\.(?=.*\.)/g, '').replace(',', '.')) || 0;

                    const formattedValueCultura = valueCultura / 1000000; // Converter para milhões
                    const formattedValueTotal = valueTotal / 1000000; // Converter para milhões

                    culturaData.push(formattedValueCultura);
                    totalData.push(formattedValueTotal);

                    culturaTotal += valueCultura;
                    totalGeral += valueTotal;
                }

                // Calcular o ranking de municípios com base nos dados de cultura
                rankingData = municipalities.map(municipality => {
                    const culturaMunicipioTotal = Object.values(jsonData[selectedYear]?.[municipality] || {}).reduce((acc, val) => acc + parseFloat(val.cultura.replace(/\.(?=.*\.)/g, '').replace(',', '.')), 0);
                    const totalMunicipioGeral = Object.values(jsonData[selectedYear]?.[municipality] || {}).reduce((acc, val) => acc + parseFloat(val.total.replace(/\.(?=.*\.)/g, '').replace(',', '.')), 0);
                    const percentage = (culturaMunicipioTotal / totalMunicipioGeral) * 100 || 0;
                    return {
                        municipality,
                        culturaTotal: culturaMunicipioTotal / 1000000, // Converter para milhões
                        percentage: percentage.toFixed(2), // Arredondar para 2 casas decimais
                    };
                });

                // Ordenar o ranking por gastos com cultura em ordem decrescente
                rankingData.sort((a, b) => b.culturaTotal - a.culturaTotal);

                // Atualizar os dados do gráfico de pizza
                const culturaPercent = (culturaTotal / totalGeral) * 100;
                setPieSeries([culturaPercent, 100 - culturaPercent]);

                setSeriesBar([{ name: 'Gastos em Cultura', data: culturaData }]);
                setRanking(rankingData);
            } else {
                setSeriesBar([]);
                setRanking([]);
                setPieSeries([]);
            }
            setLoading(false);
        }
    }, [selectedYear, selectedMunicipality]);

    const barOptions = {
        chart: {
            type: 'bar',
            height: 500,
            width: '95%',
            toolbar: { show: false }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                distributed: true,
                barHeight: '80%',
                colors: {
                    backgroundBarColors: [],
                    backgroundBarOpacity: 0
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            type: 'category',
            labels: {
                style: {
                    fontSize: '14px',
                    colors: Array(12).fill('#fff'),
                }
            },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            title: {
                text: 'Gastos em Milhões de R$',
                style: {
                    fontSize: '16px',
                    color: '#fff',
                }
            },
            labels: {
                formatter: (value) => `${value.toFixed(2)} M`,
                style: {
                    colors: ['#fff'],
                }
            },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        tooltip: {
            enabled: true,
            formatter: function (val) {
                return `${val.toFixed(2)} M R$`;
            }
        },
        dataLabels: {
            formatter: function (val) {
                return `${val.toFixed(2)} M R$`;
            }
        },
        colors: ['#FFCA00', '#874FD4', '#64BA8B', '#FFCA00', '#874FD4', '#64BA8B', '#FFCA00', '#874FD4', '#64BA8B', '#FFCA00', '#874FD4', '#64BA8B'],
        grid: {
            padding: { left: 20, right: 20 }
        },
        legend: {
            labels: {
                colors: '#fff'
            }
        },
        responsive: [
            {
                breakpoint: 700,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        }
                    },
                    dataLabels: {
                        style: { fontSize: '10px' },
                        orientation: 'vertical',
                        textAnchor: 'middle',
                    },
                }
            }
        ]
    };

    const pieOptions = {
        chart: {
            type: 'pie',
            width: 380,
        },
        labels: ['Cultura', 'Outros'],
        colors: ['#FFCA00', '#874FD4'],
        legend: {
            position: 'bottom',
            labels: {
                colors: '#fff'
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return `${val.toFixed(2)}%`;
            }
        },
        tooltip: {
            enabled: true,
            formatter: function (val) {
                return `${val.toFixed(2)}%`;
            }
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title} className='texto1'>
                Quantidade de investimento em cultura no estado do Rio de Janeiro
            </h2>
            <div style={styles.buttonContainer}>
                <select
                    style={styles.button}
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <select
                    style={styles.button}
                    value={selectedMunicipality}
                    onChange={(e) => setSelectedMunicipality(e.target.value)}
                >
                    {municipalities.map(municipality => (
                        <option key={municipality} value={municipality}>
                            {municipality}
                        </option>
                    ))}
                </select>
            </div>
            <ApexCharts
                options={barOptions}
                series={seriesBar}
                type='bar'
                width='100%'
                height={500}
            />
            <div style={styles.pieChartContainer}>
                <h3 style={styles.pieChartTitle}>
                    Percentual de Gastos em Cultura vs Total de {selectedMunicipality} em {selectedYear}
                </h3>
                <ApexCharts
                    options={pieOptions}
                    series={pieSeries}
                    type='pie'
                    width={380}
                />
            </div>
            <div style={styles.rankingContainer}>
                <h2 style={styles.legend}>
                    Ranking dos Municípios que mais investiram em cultura em {selectedYear}
                </h2>
                <ul style={styles.rankingList}>
                    {ranking.map((item, index) => (
                        <li key={index} style={styles.rankingItem}>
                            <strong>{index + 1}. {item.municipality}</strong> - R$ {item.culturaTotal.toFixed(2)}M  - {item.percentage}% do valor total das licitações
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#fff'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    },
    button: {
        margin: '0 10px',
        padding: '12px 24px',
        fontSize: '18px',
        borderRadius: '25px',
        border: 'none',
        backgroundColor: '#874FD4',
        color: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    pieChartContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px',
        marginBottom: '60px',  // Aumenta a distância entre o gráfico de pizza e o ranking
    },
    pieChartTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#fff',
        marginBottom: '10px',
    },
    rankingContainer: {
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '800px',
    },
    legend: {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#fff'
    },
    rankingList: {
        listStyleType: 'none',
        padding: 0,
    },
    rankingItem: {
        fontSize: '16px',
        fontFamily: 'Poppins',
        color: '#fff',
        marginBottom: '10px',
    },
};
