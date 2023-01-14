import { useSelector } from "react-redux";

export const getContactById = (contactId) => {
  const { contacts } = useSelector((state) => state.contact);
  return contacts.find((contact) => contact.id.toString() === contactId);
};
