import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import jsonData from '../public/somasTotais.json';


export default function Chart() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedMunicipality, setSelectedMunicipality] = useState('Rio De Janeiro');

    const years = Object.keys(jsonData);
    const municipalities = selectedYear ? Object.keys(jsonData[selectedYear] || {}) : [];

    useEffect(() => {
        if (selectedYear && selectedMunicipality) {
            const municipalityData = jsonData[selectedYear]?.[selectedMunicipality];
            if (municipalityData) {
                const transformedData = [];
                // Preenchendo dados no formato correto para os meses
                for (let i = 1; i <= 12; i++) {
                    const month = String(i).padStart(2, '0'); // Adiciona zero à esquerda se necessário
                    let value = municipalityData[month] || "0,00"; // Valor padrão se o mês não estiver presente
                    // Ajustando o formato dos valores para números flutuantes
                    let formattedValue = value
                        .replace(/\.(?=.*\.)/g, '') // Remove pontos se houver mais de um ponto
                        .replace(',', '.'); // Substitui a vírgula por ponto decimal
                    const floatValue = parseFloat(formattedValue);
                    transformedData.push(isNaN(floatValue) ? 0 : floatValue);
                }
                setSeries([{ name: 'Gastos', data: transformedData }]);
            } else {
                setSeries([]); // Limpar série se não houver dados
            }
            setLoading(false);
        }
    }, [selectedYear, selectedMunicipality]);

    const options = {
        chart: {
            type: 'bar',
            height: 500,
            width: '95%',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                distributed: true,
                barHeight: '80%',
            }
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            type: 'category',
            labels: {
                style: {
                    fontSize: '14px',

                }
            }
        },
        yaxis: {
            title: {
                text: 'Gastos',
                style: {
                    fontSize: '16px'
                }
            }
        },
        tooltip: {
            enabled: true,
            formatter: function (val) {
                return val + ' R$';
            }
        },
        dataLabels: {
            formatter: function (val) {
                return val.toFixed(2) + ' R$';
            }
        },
        colors: ['#FFCA00', '#874FD4', '#64BA8B', '#FFCA00', '#874FD4', '#64BA8B', '#FFCA00', '#874FD4', '#64BA8B', '#FFCA00', '#874FD4', '#64BA8B'],
        grid: {
            padding: {
                left: 20,
                right: 20
            }
        },
        
        responsive: [
            {
                breakpoint: 700,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: true, // Alterando para horizontal quando a tela é pequena
                        }
                    },
                    dataLabels: {
                        style: {
                            fontSize: '10px', // Reduzindo o tamanho dos labels
                        },
                        orientation: 'vertical', // Aplica a orientação vertical aos labels
                        textAnchor: 'middle',
                    },
                }
            }
        ]
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title} className='texto1'>
                Quantidade de investimento na área de cultura no estado do Rio de Janeiro
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
                options={options}
                series={series}
                type='bar'
                width='100%'
                height={500}
            />
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
        backgroundColor: '#FFCA00',
        color: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
};
