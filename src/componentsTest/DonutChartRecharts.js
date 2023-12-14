import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Casos fallidos', value: 11 },
  { name: 'Casos exitosos', value: 7 },
];

const COLORS = ['#FF445B', '#B8E986'];

const DonutChartRecharts = () => {
  const legendItems = data.map((entry, index) => (
    <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <span style={{ backgroundColor: COLORS[index % COLORS.length], width: '20px', height: '20px', marginRight: '8px', borderRadius: '50%' }}></span>
      <span>{entry.name}</span>
    </div>
  ));

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="legend" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {legendItems}
      </div>
    </div>
  );
};

export default DonutChartRecharts;
