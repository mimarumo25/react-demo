import React from 'react';
import { ResponsivePie, ResponsivePieCanvas } from '@nivo/pie';
import { useState } from 'react';
import { Alert } from '@mui/material';

const data = [
  { id: 'Casos exitosos', value: 687 },
  { id: 'Casos fallidos', value: 628 },
];

const customColors = ['#B8E986', '#FF445B'];
const customColorsText = ['white'];

const DonutChartNivo = () => {
  const [selectedSlice, setSelectedSlice] = useState(null);

  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  const handleSliceClick = (slice) => {
    // Accede a la información de la sección
    const sliceId = slice.id; // ID de la sección
    const sliceValue = slice.value; // Valor de la sección
    const sliceColor = slice.color; // Color de la sección
  
    // Puedes realizar acciones específicas en función de esta información
    alert(`Se hizo clic en la sección "${sliceId}" con valor ${sliceValue} y color ${sliceColor}.`);
  
    // Puedes establecer el estado para realizar acciones adicionales
    setSelectedSlice(slice);
  };
  
  return (
 <h1>Hola Mundo</h1>
  );
};

export default DonutChartNivo;
