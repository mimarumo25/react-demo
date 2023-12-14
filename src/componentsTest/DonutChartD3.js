import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const DonutChartD3 = () => {
  const chartRef = useRef(null);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (!hasRendered) {
    

      // Datos de ejemplo
      const data = [
        { label: 'Casos fallidos', value: 11 },
        { label: 'Casos exitosos', value: 7 },
      ];

      const width = 400;
      const height = 400;
      const radius = Math.min(width, height) / 2;

      const svg = d3.select(chartRef.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const g = svg.append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const color = d3.scaleOrdinal()
        .range(['#FF445B', '#B8E986']);

      const pie = d3.pie()
        .value(d => d.value);

      const path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius / 2);

      const label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

      const arc = g.selectAll('.arc')
        .data(pie(data))
        .enter().append('g')
        .attr('class', 'arc');

      arc.append('path')
        .attr('d', path)
        .attr('fill', d => color(d.data.label));

      arc.append('text')
        .attr('transform', d => `translate(${label.centroid(d)})`)
        .text(d => `${d.data.value} %`);

      // Agrega el total en el centro
      svg.append('text')
        .attr('x', width / 2)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .text(d3.sum(data, d => d.value));

      // Agrega la leyenda
      const legend = svg.append('g')
        .attr('transform', `translate(0, ${height + 20})`);

      const legendRectSize = 18;
      const legendSpacing = 4;

      // Calcula el ancho total de la leyenda en función de las etiquetas reales
      const legendWidth = data.reduce((total, d) => total + d.label.length * 8 + legendRectSize + legendSpacing, 0);

      // Calcula la posición x de la leyenda para centrarla
      const legendX = (width - legendWidth) / 2;

      const legendItems = legend.selectAll('.legend')
        .data(data)
        .enter().append('g')
        .attr('class', 'legend')
        .attr('transform', (d, i) => `translate(${legendX + i * 120}, 0)`);

      legendItems.append('rect')
        .attr('width', legendRectSize)
        .attr('height', legendRectSize)
        .style('fill', d => color(d.label));

      legendItems.append('text')
        .attr('x', legendRectSize + legendSpacing)
        .attr('y', legendRectSize - legendSpacing)
        .text(d => d.label);

      return () => {
        d3.select(chartRef.current).selectAll('*').remove();
      };
    }
    setHasRendered(true);
  }, [hasRendered]);

  return (
    <div>
      <h2>Donut Chart (D3.js)</h2>
      <div ref={chartRef}></div>
    </div>
  );
};

export default DonutChartD3;
