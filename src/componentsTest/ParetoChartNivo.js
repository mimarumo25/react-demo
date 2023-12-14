import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const ParetoChartNivo = () => {
  const [chartData, setChartData] = useState([
    { tipo: "Fuerza Bruta", fallos: 104853 },
    { tipo: "Injección SQL", fallos: 36525 },
    { tipo: "Basados por tipo de datos", fallos: 23768 },
    { tipo: "Requeridos", fallos: 19420 },
    { tipo: "Validacion de Headers", fallos: 13528 },
  ]);

  useEffect(() => {
    createPareto();
  }, []);

  const createPareto = () => {
    const totalFallos = chartData.reduce((sum, data) => sum + data.fallos, 0);
    let porcentajeAcumulado = 0;

    const paretoData = chartData.map((data) => {
      const porcentaje = (data.fallos / totalFallos) * 100;
      porcentajeAcumulado += porcentaje;

      return {
        tipo: data.tipo,
        fallos: data.fallos,
        porcentajeAcumulado,
      };
    });

    setChartData(paretoData);
  };

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveBar
        data={chartData}
        keys={['fallos']}
        indexBy="tipo"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Tipo',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Cantidad de fallos',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Pareto chart demo"
        barAriaLabel={(e) =>
          `${e.id}: ${e.formattedValue} en tipo: ${e.indexValue}`
        }
        animate={false}
      />
    </div>
  );
};

export default ParetoChartNivo;
