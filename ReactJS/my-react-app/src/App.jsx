import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as Yup from "yup";
import * as rhook from "react-hook-form";

export default function App() {
  /* const formik = Formik.useFormik({
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
        {
          formik.errors.name && 
          <p>
            <b>Error: </b>
            {formik.errors.name}
          </p>
        }
        <label htmlFor="age">Edad</label>
        <input
          name="age"
          type="text"
          value={formik.values.age}
          onChange={formik.handleChange}
        />
        {
          formik.errors.age && 
          <p>
            <b>Error: </b>
            {formik.errors.age}
          </p>
        }
        <label htmlFor="natinonality">Nacionalidad</label>
        <input
          name="natinonality"
          type="text"
          value={formik.values.nationality}
          onChange={formik.handleChange}
        />
        {
          formik.errors.nationality && 
          <p>
            <b>Error: </b>
            {formik.errors.nationality}
          </p>
        }
      </form>
    </div>
  ); */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = rhook.useForm();

  const onSubmit = (data) => {
    alert(`
      NOMBRE : ${values.name}
      EDAD : ${values.age}
      NACIONALIDAD : ${values.nationality}
  `);
  };

  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre</label>
      <input
        name="name"
        type="text"
        defaultValue={'Pablo'}
        {...register("name",{
          required: 'El campo es obligatorio',
        })}
      />  
      {
      errors.name &&
        <p>
          <b>Error: </b>
          {errors.name.message}
        </p>
      }

      <label htmlFor="age">Edad</label>
      <input
        name="age"
        type="text"
        defaultValue={'18'}
        {...register("age",{
          required: 'El campo es obligatorio',
        })}
      />  
      {
      errors.age &&
        <p>
          <b>Error: </b>
          {errors.age.message}
        </p>
      }
      <label htmlFor="nationality">Nacionalidad</label>
      <input
        name="nationality"
        type="text"
        defaultValue={'Español'}
        {...register("nationality",{
          required: 'El campo es obligatorio',
        })}
      />  
      {
      errors.nationality &&
        <p>
          <b>Error: </b>
          {errors.nationality.message}
        </p>
      }
    </form>
  </div>;
}
