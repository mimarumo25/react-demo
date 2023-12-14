import React from 'react';
import Box from '@mui/material/Box';

const CenteredBox = () => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="100%"
    height="100vh"
    >
      {/* Contenido del Box */}
      <div>
        <h1>Contenido Centrado</h1>
        <p>Otro contenido aquí...</p>
      </div>
    </Box>
  );
};

export default CenteredBox;
