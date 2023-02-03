import { useDispatch, useSelector } from "react-redux";
import contactApi from "../../api/ContactApi";
import { Add_Contact, Edit_Contact, Init_Contact, Remove_Contact } from "../../store";

export const useContactStore = () => {
  const dispatch = useDispatch();
  const { contacts, search, idEdit } = useSelector((state) => state.contact);
  const startLoadingContact = async () => {
    try {
      const { data } = await contactApi.get("/contacts");
      const contacts = await data.contact;
      dispatch(Init_Contact(contacts));
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  const startCreatingContact = async (formState) => {
    try {
      const { data } = await contactApi.post("/contacts", formState);
      const contacts = await data.contact;
      dispatch(Add_Contact({...contacts}));
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  const startDeletingContact = async (id) => {
    try {
      await contactApi.delete(`/contacts/${id}`);
      dispatch(Remove_Contact(id));
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  const startUpdateContact = async (formState) => {
    try {
      await contactApi.put(`/contacts/${idEdit.id}`, formState);
      dispatch(Edit_Contact(formState));
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  return {
    //* Propiedades
    contacts,
    search,
    idEdit,

    //* Métodos
    startCreatingContact,
    startLoadingContact,
    startDeletingContact,
    startUpdateContact,
  };
};
