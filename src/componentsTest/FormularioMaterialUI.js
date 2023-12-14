import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormularioMaterialUI = () => {
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
    telefono: Yup.string().required('El teléfono es obligatorio'),
    direccion: Yup.string().required('La dirección es obligatoria'),
  });

  // Inicializa el formulario con Formik
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      direccion: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Esta función se ejecutará cuando se envíe el formulario
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        label="Nombre"
        name="nombre"
        variant="outlined"
        margin="normal"
        {...formik.getFieldProps('nombre')}
        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
        helperText={formik.touched.nombre && formik.errors.nombre}
      />

      <TextField
        fullWidth
        label="Correo Electrónico"
        name="email"
        variant="outlined"
        margin="normal"
        {...formik.getFieldProps('email')}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        label="Teléfono"
        name="telefono"
        variant="outlined"
        margin="normal"
        {...formik.getFieldProps('telefono')}
        error={formik.touched.telefono && Boolean(formik.errors.telefono)}
        helperText={formik.touched.telefono && formik.errors.telefono}
      />

      <TextField
        fullWidth
        label="Dirección"
        name="direccion"
        variant="outlined"
        margin="normal"
        {...formik.getFieldProps('direccion')}
        error={formik.touched.direccion && Boolean(formik.errors.direccion)}
        helperText={formik.touched.direccion && formik.errors.direccion}
      />

      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default FormularioMaterialUI;
