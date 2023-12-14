import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ type }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destruye la instancia anterior si existe
    }

    // Definir las cantidades y etiquetas con porcentajes
    const successfulCases = 50;
    const failedCases = 100;
    const totalCases = successfulCases + failedCases;
    const successfulPercentage = ((successfulCases / totalCases) * 100).toFixed(2);
    const failedPercentage = ((failedCases / totalCases) * 100).toFixed(2);

    const data = {
      labels: [`${successfulPercentage}% Casos exitosos`, `${failedPercentage}% Casos fallidos`],
      datasets: [
        {
          label: 'My First Dataset',
          data: [successfulCases, failedCases],
          backgroundColor: ['#B8E986', '#FF445B'],
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type,
      data: data,
      options: {
        responsive: false,
        maintainAspectRatio: false,
        hoverOffset: 20,
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const clickedElement = elements[0];
            const label = data.labels[clickedElement.index];
            const value = data.datasets[0].data[clickedElement.index];
            alert(`Haz hecho clic en "${label}" con un valor de ${value}`);
          }
        },
      },
    };

    chartInstance.current = new Chart(ctx, config);
  }, []);

  return (
    <div>
      <h2>Pie Chart</h2>
      <div style={{ position: 'relative' }}>
        <canvas ref={chartRef} width="400" height="400" />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '22%',
            
            zIndex: 2,
          }}
        >
          <p>Texto en el centro</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
