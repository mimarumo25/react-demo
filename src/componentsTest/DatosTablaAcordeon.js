import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CustomTablePagination from './CustomTablePagination';


const DatosTablaAcordeon = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Vuelve a la primera página al cambiar el número de filas por página
  };


  return (
    <TableContainer component={Paper}> 
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
            <React.Fragment key={row.id}>
              <TableRow>
                <TableCell>
                  <IconButton size="small">
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.telefono}</TableCell>
                <TableCell>{row.direccion}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>

      </Table>
      <CustomTablePagination
        page={page}
        totalPages={Math.ceil(data.length / rowsPerPage)}
        onPageChange={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
      />
    </TableContainer>
  );
};

export default DatosTablaAcordeon;
