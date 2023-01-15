import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "../hooks";
import { getContactById } from "../../helpers";
import { Add_Todo, Delete_Todo, Toggle_Todo } from "../../store";

import { BiArrowBack } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { Tasks } from "./Tasks";

export const ContactDetail = () => {
  const Navigate = useNavigate();
  const { contactId } = useParams();
  const contact = getContactById(contactId);

  const dispatch = useDispatch();
  const { todos, done } = useSelector((state) => state.todo);
  const { tasks } = useSelector((state) => state.task);

  const { description, formState, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (formState.description.length <= 1) return; //verificar si el input no tiene valor no envia el todo
    const newTodo = {
      contactId,
      id: new Date().getTime(),
      description,
      done: false,
    };
    dispatch(Add_Todo(newTodo));
    onResetForm();
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h5>
        <BiArrowBack onClick={() => Navigate("/")} size={20} /> 
        Datos de Contacto
      </h5>
      <div className="profile --card --flex-between">
        <div className="desc">
          <h4 className="--color-primary">{contact?.name}</h4>
          <h4 className="--color-primary">{contact?.lastName}</h4>
          <p>(+57) {contact?.cel}</p>
          <p>{contact?.email}</p>
          <p>{contact?.address}</p>
          <p>{contact?.date}</p>
        </div>
      </div>
      <div className="profile --card --flex-between">
        <form className="--form-control">
          <input
            type="text"
            placeholder="Agregar un comentario..."
            className="form-control"
            value={description}
            onChange={onInputChange}
            name="description"
          />
          <button
            onClick={handleAddTodo}
            className="btn btn-outline-primary mt-2"
          >
            Agregar
          </button>
        </form>
      </div>
      {todos.map((todo) => {
        if (todo.contactId === contactId) {
          return (
            <div className="profile --card --flex-between" key={todo.id}>
              <span>
                {todo.description}
                <FaCheckCircle
                  size={18}
                  className={`icon ${done ? "text-success" : " "}`}
                  onClick={() => dispatch(Toggle_Todo())}
                />
              </span>
              <button
                onClick={() => dispatch(Delete_Todo(todo.id))}
                className="btn btn-danger"
              >
                Borrar
              </button>
            </div>
          );
        }
      })}
      <Tasks contactId={contactId} />
    </div>
  );
};
