import React, { useEffect, useRef, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const { CanvasJSChart } = CanvasJSReact;

const ParetoChart = () => {
  const chartRef = useRef(null);
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: "Casos fallidos por tipo de prueba"
    },
    axisY: {
      title: "Cantidad de casos fallidos",
      lineColor: "#4F81BC",
      tickColor: "#4F81BC",
      labelFontColor: "#4F81BC"
    },
    axisY2: {
      suffix: "%",
      lineColor: "#C0504E",
      tickColor: "#C0504E",
      labelFontColor: "#C0504E"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Fuerza Bruta", y: 100 },
        { label: "Inyección SQL", y: 80 },
        { label: "Basados por tipo de datos", y: 60},
        { label: "Requeridos", y: 30 },
        { label: "Validacion de Headers", y: 20 }
      ]
    }]
  });

  useEffect(() => {
    createPareto();
  }, []);

  function createPareto() {
    const dps = [];
    let yTotal = 0;
    let yPercent = 0;

    for (let i = 0; i < chartOptions.data[0].dataPoints.length; i++) {
      yTotal += chartOptions.data[0].dataPoints[i].y;
    }

    for (let i = 0; i < chartOptions.data[0].dataPoints.length; i++) {
      const yValue = chartOptions.data[0].dataPoints[i].y;
      yPercent += (yValue / yTotal * 100);
      dps.push({ label: chartOptions.data[0].dataPoints[i].label, y: yPercent });
    }

    setChartOptions(prevOptions => {
      const newOptions = { ...prevOptions };
      newOptions.data.push({ type: "line", yValueFormatString: "0.##\"%\"", dataPoints: dps });

      // Accede al chart mediante la referencia y establece la propiedad axisYType
      if (chartRef.current) {
        newOptions.data[1].axisYType = "secondary";
        chartRef.current.render(); // Asegura que el gráfico se vuelva a renderizar
      }

      newOptions.axisY.maximum = yTotal;
      newOptions.axisY2.maximum = 100;
      return newOptions;
    });
  }

  return (
    <div>
      <CanvasJSChart options={chartOptions} onRef={chart => chartRef.current = chart} />
    </div>
  );
};

export default ParetoChart;
