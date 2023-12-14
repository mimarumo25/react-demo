import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './style.css';

const CustomTablePagination = ({ page, totalPages, onPageChange, onChangeRowsPerPage }) => {
  const isFirstPage = page === 0;
  const isLastPage = page >= totalPages - 1;

  const [rowsPerPage, setRowsPerPage] = useState(12); // Estado para el número de casos por página

  const handleRowsPerPageChange = (event) => {
    const newRowsPerPage = event.target.value;
    setRowsPerPage(newRowsPerPage);
    onChangeRowsPerPage(newRowsPerPage);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      color="white"
      bgcolor="black"
      p={1}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
        <Typography>Casos por página:</Typography>
        <Select
          value={rowsPerPage} // Usa el estado rowsPerPage como valor seleccionado
          onChange={handleRowsPerPageChange} // Conecta el controlador de eventos
          className="select-pagination"
        >
          <MenuItem defaultValue={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={3}>
        <Typography>
          <span
            className="pagination-text"
            onClick={() => !isFirstPage && onPageChange(page - 1)}
          >
            &lt; Página Anterior
          </span>
        </Typography>
        <Typography>{`Página ${page + 1} de ${totalPages}`}</Typography>
        <Typography>
          <span
            className="pagination-text"
            onClick={() => !isLastPage && onPageChange(page + 1)}
          >
            Página Siguiente &gt;
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomTablePagination;
