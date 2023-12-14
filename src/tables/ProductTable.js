import React, { useState, useMemo } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import ProductFilters from './ProductFilters';

const ProductTable = () => {
  const generateRandomProduct = (id) => {
    const categories = ['Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Juguetes'];
    const sizes = ['Pequeño', 'Mediano', 'Grande'];
    const states = ['Bueno', 'Malo'];

    return {
      id,
      nombre: `Producto ${id}`,
      categoria: categories[Math.floor(Math.random() * categories.length)],
      precio: parseFloat((Math.random() * 100).toFixed(2)),
      descripcion: `Descripción del Producto ${id}`,
      peso: `${(Math.random() * 5 + 1).toFixed(2)}kg`,
      tamano: sizes[Math.floor(Math.random() * sizes.length)],
      estado: states[Math.floor(Math.random() * states.length)],
    };
  };

  const generateProducts = () => {
    const products = [];
    for (let i = 1; i <= 30; i++) {
      products.push(generateRandomProduct(i));
    }
    return products;
  };

  const [filteredProducts, setFilteredProducts] = useState(() => generateProducts());
  const [filterCategory, setFilterCategory] = useState('');
  const [filterState, setFilterState] = useState('');
  const [filterSize, setFilterSize] = useState('');

  const products = useMemo(() => generateProducts(), []);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'category':
        setFilterCategory(value);
        break;
      case 'state':
        setFilterState(value);
        break;
      case 'size':
        setFilterSize(value);
        break;
      default:
        break;
    }
  };

  const handleResetFilters = () => {
    setFilterCategory('');
    setFilterState('');
    setFilterSize('');
  };

  const filtered = useMemo(() => {
    let result = products;

    if (filterCategory) {
      result = result.filter((product) => product.categoria === filterCategory);
    }

    if (filterState) {
      result = result.filter((product) => product.estado === filterState);
    }

    if (filterSize) {
      result = result.filter((product) => product.tamano === filterSize);
    }

    return result;
  }, [products, filterCategory, filterState, filterSize]);

  return (
    <div>
      <ProductFilters
        products={{ filterCategory, filterState, filterSize }}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />

      <TableContainer component={Paper}>
        <Table aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Categoría</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Descripción</TableCell>
              <TableCell align="center">Peso</TableCell>
              <TableCell align="center">Tamaño</TableCell>
              <TableCell align="center">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <TableRow key={product.id}>
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="center">{product.nombre}</TableCell>
                  <TableCell align="center">{product.categoria}</TableCell>
                  <TableCell align="center">{product.precio}</TableCell>
                  <TableCell align="center">{product.descripcion}</TableCell>
                  <TableCell align="center">{product.peso}</TableCell>
                  <TableCell align="center">{product.tamano}</TableCell>
                  <TableCell align="center">{product.estado}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No hay productos filtrados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductTable;
