import React, { useContext, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//import { useNavigate } from 'react-router';
//import { RequestContext } from '../../../AppRouter';

const { CanvasJSChart } = CanvasJSReact;

const customColors = ['#B8E986', '#FF445B'];

const GraphPie = () => {
  const  responseTest  = []
  const [data, setData] = useState([
    { label: 'exitosos', y: 24 },
    { label: 'fallidos', y: 10 },
  ]);
  //const navigate = useNavigate();

  useEffect(() => {
    if (responseTest?.caseList && Array.isArray(responseTest.caseList)) {
      const { successfulCases, failedCases } = responseTest.caseList.reduce(
        (counts, item) => {
          if (item?.value?.testCaseResults?.caseResult === true) {
            counts.successfulCases += 1;
          } else if (
            item?.value?.testCaseResults?.caseResult === null ||
            item?.value?.testCaseResults?.caseResult === false
          ) {
            counts.failedCases += 1;
          }
          return counts;
        },
        { successfulCases: 0, failedCases: 0 }
      );

      setData([
        { label: 'exitosos', y: successfulCases },
        { label: 'fallidos', y: failedCases },
      ]);
    }
  }, [responseTest]);

  const handleSliceClick = (e) => {
    const { dataPoint } = e;
    //navigate('/detailReport', { state: { resultCase: dataPoint.label } });
  };

  return (
    <div className="container-chart" style={{ margin: '20px' }}>
    <div className="chart-container">
      <h1 className="chart-title">Casos ejecutados</h1>
      <CanvasJSChart
        options={{
          data: [
            {
              type: 'pie',
              showInLegend: true,
              dataPoints: data,
            },
          ],
        }}
        onPlotClick={handleSliceClick}
      />
      <div className="centered-content">
        <span className="chart-title">{data.reduce((acc, entry) => acc + entry.y, 0)}</span>
      </div>
    </div>
    <div className="legend-container">
      {data.map((entry, index) => (
        <div key={`legend-${index}`} className="legend-item">
          <div
            className="color-box"
            style={{ backgroundColor: customColors[index] }}
          ></div>
          {entry.label === 'exitosos' ? (
            <span>Casos exitosos</span>
          ) : (
            <span>Casos fallidos</span>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default GraphPie;
