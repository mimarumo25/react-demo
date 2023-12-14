import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';

const ProductFilters = ({ products, onFilterChange, onResetFilters }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  const handleReset = () => {
    onResetFilters();
  };

  return (
    <div style={styles.container}>
      <FormControl fullWidth>
        <InputLabel htmlFor="category">Categoría:</InputLabel>
        <Select
          value={products.filterCategory}
          onChange={handleFilterChange}
          inputProps={{ name: 'category', id: 'category' }}
        >
          <MenuItem value="">Todas las categorías</MenuItem>
          <MenuItem value="Electrónica">Electrónica</MenuItem>
          <MenuItem value="Ropa">Ropa</MenuItem>
          <MenuItem value="Alimentos">Alimentos</MenuItem>
          <MenuItem value="Hogar">Hogar</MenuItem>
          <MenuItem value="Juguetes">Juguetes</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="state">Estado:</InputLabel>
        <Select
          value={products.filterState}
          onChange={handleFilterChange}
          inputProps={{ name: 'state', id: 'state' }}
        >
          <MenuItem value="">Todos los estados</MenuItem>
          <MenuItem value="Bueno">Bueno</MenuItem>
          <MenuItem value="Malo">Malo</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="size">Tamaño:</InputLabel>
        <Select
          value={products.filterSize}
          onChange={handleFilterChange}
          inputProps={{ name: 'size', id: 'size' }}
        >
          <MenuItem value="">Todos los tamaños</MenuItem>
          <MenuItem value="Pequeño">Pequeño</MenuItem>
          <MenuItem value="Mediano">Mediano</MenuItem>
          <MenuItem value="Grande">Grande</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleReset} style={styles.resetButton}>
        Resetear Filtros
      </Button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  formControl: {
    flex: '1',
    marginRight: '10px',
  },
  resetButton: {
    flex: '1',
  },
};

export default ProductFilters;
