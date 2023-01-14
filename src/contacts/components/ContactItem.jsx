import { useEffect, useState } from "react";
import { FaTrashAlt, FaCheckCircle, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Remove_Contact,
  SetIdEdit,
  SetInitState,
} from "../../store/slices/contactSlice";

export const ContactItem = () => {
  const [done, setDone] = useState(false);
  const { contacts, search } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const removeProfile = (id) => {
    dispatch(Remove_Contact(id));
    Swal.fire("Contacto Removido!", "You clicked the button!", "success");
  };

  const editProfile = (id) => {
    dispatch(SetIdEdit(id));
    Navigate("/editContact");
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      {contacts
        .filter((value) => {
          if (search === "") {
            return value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map(({ id, cel, name }) => (
          <div className="profile --card --flex-between" key={id}>
            <div className="desc">
              <h4 className="--color-dark">{name}</h4>
              <p className="--color-primary">(+57) {cel}</p>
            </div>
            <div>

            </div>
            <FaEdit
              size={25}
              className={`icon ${done ? "text-success" : " "}`}
              onClick={() => editProfile(id)}
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
            
            <div className="moreInfo">
              <Link to={`/contactDetail/${id}`}>Más..</Link>
            </div>
          </div>
        ))}
    </div>
  );
};
