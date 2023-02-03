import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks/useForm";

import Swal from "sweetalert2";
import { BiArrowBack } from "react-icons/bi";
import { useContactStore } from "../hooks/useContactStore";

export const AddContact = () => {
  const {
    name,
    lastName,
    email,
    cel,
    date,
    address,
    formState,
    onInputChange,
    onResetForm,
  } = useForm({
    name: "",
    lastName: "",
    email: "",
    cel: "",
    date: "",
    address: "",
  });

  const Navigate = useNavigate();
  const { startCreatingContact, startLoadingContact } = useContactStore();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (lastName === "" || cel === "")
      return alert("Debe rellenar todos los campos");
    startLoadingContact();
    startCreatingContact(formState);
    Swal.fire("Contacto Agregado!", "You clicked the button!", "success");
    onResetForm();
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("contacts"));
  }, []);

  return (
    <>
      <h5>
        <BiArrowBack onClick={() => Navigate("/")} size={20} />
        Agregar Contacto
      </h5>
      <div className="--card-form">
        <form className="--form-control">
          <input
            required
            type="text"
            placeholder="Nombres"
            className="form-control"
            value={name}
            onChange={onInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Apellidos"
            className="form-control"
            value={lastName}
            onChange={onInputChange}
            name="lastName"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="form-control"
            value={email}
            onChange={onInputChange}
            name="email"
          />
          <input
            required={true}
            type="text"
            placeholder="cel/tel  "
            className="form-control"
            value={cel}
            onChange={onInputChange}
            name="cel"
          />
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            className="form-control"
            value={date}
            onChange={onInputChange}
            name="date"
          />
          <input
            type="text"
            placeholder="Direccion"
            className="form-control"
            value={address}
            onChange={onInputChange}
            name="address"
          />
        </form>
      </div>
      <div className="--btn-buttoms">
        <button
          className="btn btn-outline-danger mt-2"
          onClick={() => Navigate("/")}
        >
          cancelar
        </button>
        <button
          type="submit"
          className="btn btn-outline-success mt-2"
          onClick={onFormSubmit}
        >
          Agregar
        </button>
      </div>
    </>
  );
};
