import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks/useForm";
import { useContactStore } from "../hooks/useContactStore";

import Swal from "sweetalert2";

export const EditContact = () => {
  const { startUpdateContact, idEdit, contacts } = useContactStore();
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
    id: idEdit.id,
    name: idEdit.name,
    lastName: idEdit.lastName,
    email: idEdit.email,
    cel: idEdit.cel,
    date: "",
    address: idEdit.address,
  });

  const Navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      lastName === "" ||
      cel === "" ||
      date === "" ||
      name === "" ||
      email === "" ||
      address === ""
    )
      return alert("Debe rellenar todos los campos");
    startUpdateContact(formState);
    Swal.fire("Contacto Actualizado!", "You clicked the button!", "success");
    onResetForm();
    Navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h5>Editar Contacto</h5>
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
            required
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
