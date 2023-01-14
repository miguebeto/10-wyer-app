import { HiOutlineUserAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetSearch } from "../../store";
import { ContactList } from "../components";

import "./Contacts.css";

export const Contacts = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.contact);
  const Navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(SetSearch(e.target.value));
  };

  return (
    <section className="profile-sec rounded-3">
      <div className="container">
        <div className="--form-control">
          <div className="search">
            <input
              type="text"
              placeholder="Buscar"
              style={{ width: "94%", background: "#f6f6f6" }}
              onChange={handleSearch}
              value={search}
            />
          </div>
          <h5>Lista de contactos</h5>
        </div>
        <ContactList />
        <div className="--btn-buttoms">
          <button
            className="btn btn-outline-primary"
            onClick={() => Navigate("/addContact")}
          >
            Agregar  
            <HiOutlineUserAdd />
          </button>
        </div>
      </div>
    </section>
  );
};
