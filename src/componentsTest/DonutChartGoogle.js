import React from 'react';
import { Chart } from 'react-google-charts';

const DonutChartGoogle = () => {
  return (
    <Chart
      width={'377px'}
      height={'334px'} // Asegúrate de proporcionar la unidad de medida (por ejemplo, 'px') para la altura
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 7],
      ]}
      options={{
        pieHole: 0.5, // Controla el tamaño del agujero en el centro del gráfico (0.5 significa la mitad)
        colors: ['#FF445B', '#B8E986'], // Personaliza los colores de las secciones (en este ejemplo, rojo y verde)
        legend: { position: 'bottom' },
        tooltip: { showColorCode: true }, // Muestra los valores numéricos al pasar el ratón sobre las secciones
        pieSliceTextStyle: {
          color: 'black',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

export default DonutChartGoogle;
