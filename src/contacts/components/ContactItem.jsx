import { useEffect, useState } from "react";
import { FaTrashAlt, FaCheckCircle, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { SetIdEdit } from "../../store/slices/contactSlice";
import { useContactStore } from "../hooks/useContactStore";

import Swal from "sweetalert2";

export const ContactItem = () => {
  const [done, setDone] = useState(false);
  const { startDeletingContact, contacts, search } = useContactStore();

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const removeProfile = (id) => {
    startDeletingContact(id);
    Swal.fire("Contacto Removido!", "You clicked the button!", "success");
  };

  const editProfile = (id, name, lastName, email, cel, date, address) => {
    dispatch(SetIdEdit({ id, name, lastName, email, cel, date, address }));
    Navigate("/editContact");
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      {contacts.length === 0 ? (
        <section className="--flex-center">
          <h5>No se han resgitrado contactos...</h5>
        </section>
      ) : (
        <h5>Lista de contactos</h5>
      )}
      {contacts
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map(({ id, cel, name, lastName, email, date, address }) => (
          <div className="profile --card --flex-between" key={id}>
            <div className="desc">
              <h4 className="--color-dark">{name}</h4>
              <p className="--color-primary">(+57) {cel}</p>
            </div>
            <div></div>
            <FaEdit
              size={25}
              className={`icon ${done ? "text-success" : " "}`}
              onClick={() =>
                editProfile(id, name, lastName, email, cel, date, address)
              }
            />
            <FaCheckCircle
              size={25}
              className={`icon ${done ? "text-success" : " "}`}
              onClick={() => setDone(!done)}
            />
            <FaTrashAlt
              size={25}
              className={`icon ${done ? "text-success" : " "}`}
              onClick={() => removeProfile(id)}
            />

            <div className="--more-info">
              <Link to={`/contactDetail/${id}`}>Más..</Link>
            </div>
          </div>
        ))}
    </div>
  );
};
