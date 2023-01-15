import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks/useForm";

import Swal from "sweetalert2";
import { Add_Task } from "../../store";
import { BiArrowBack } from "react-icons/bi";

export const AddTask = () => {
  const { currentContactId } = useSelector((state) => state.task);

  const { title, author, deadline, formState, onInputChange, onResetForm } =
    useForm({
      contactId: currentContactId,
      id: new Date().getTime(),
      title: "",
      author: "",
      deadline: "",
      summary: "",
    });

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { tasks } = useSelector((state) => state.task);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(Add_Task(formState));
    Swal.fire("Tarea Agregada!", "You clicked the button!", "success");
    onResetForm();
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <h5>
        <BiArrowBack onClick={() => Navigate(`/contactDetail/${currentContactId}`)} size={20} />
        Agregar Tarea
      </h5>
      <div className="--card-form">
        <form className="--form-control-task">
          <label htmlFor="title">Titulo de la tarea</label>
          <input
            required
            type="text"
            placeholder="Agregar Titulo"
            className="form-control"
            value={title}
            onChange={onInputChange}
            name="title"
            id="title"
          />
          <label htmlFor="author">Persona Responsable</label>
          <input
            required
            type="text"
            placeholder="Seleccionar"
            className="form-control"
            value={author}
            onChange={onInputChange}
            name="author"
            id="author"
          />
          <label htmlFor="deadline">Fecha limite</label>
          <input
            required
            type="date"
            placeholder="Seleccionar"
            className="form-control"
            value={deadline}
            onChange={onInputChange}
            name="deadline"
            id="deadline"
          />
          <label htmlFor="summary">Resumen del estado de las tareas</label>
          <div>
            <input
              type="radio"
              value="Solicitar"
              onChange={onInputChange}
              name="summary"
              id="summary"
            />
            <span>Solicitar un resumen del estado de las tareas</span>
          </div>
        </form>
      </div>
      <div className="--btn-buttoms">
        <button
          className="btn btn-outline-danger mt-2"
          onClick={() => Navigate(`/contactDetail/${currentContactId}`)}
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
