import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const DatosPersonalesTabla = () => {
  const data = generateData(200);
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const generateData = (count) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: i,
        nombre: `Nombre ${i}`,
        email: `email${i}@example.com`,
        telefono: `123-456-${i}`,
        direccion: `Dirección ${i}`,
      });
    }
    return data;
  };
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{item.nombre}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Nombre:</TableCell>
                      <TableCell>{item.nombre}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Email:</TableCell>
                      <TableCell>{item.email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Teléfono:</TableCell>
                      <TableCell>{item.telefono}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dirección:</TableCell>
                      <TableCell>{item.direccion}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionDetails>
            </Accordion>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DatosPersonalesTabla;
