import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Yup from 'yup';
import * as Formik from "formik"

export default function App() {
  const formik = Formik.useFormik({
    initialValues: {
      name: 'Pablo',
      age: '',
      nationality: 'Español',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      age: Yup.number().min(18, 'La edad minima es 18').required(),
      nationality: Yup.string().required(),
    }),
    onSubmit: (values) => {
      alert(`
      NOMBRE : ${values.name}
      EDAD : ${values.age}
      NACIONALIDAD : ${values.nationality}
      `);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label htmlFor="age">Edad</label>
        <input
          name="age"
          type="text"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        <label htmlFor="natinonality">Nacionalidad</label>
        <input
          name="natinonality"
          type="text"
          value={formik.values.nationality}
          onChange={formik.handleChange}
        />
      </form>
    </div>
  );
}
