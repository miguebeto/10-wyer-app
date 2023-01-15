import { Route, Routes } from "react-router-dom";
import {
  AddContact,
  Contacts,
  ContactDetail,
  EditContact,
  Tasks,
  AddTask,
} from "../contacts";
import { Footer} from "../contacts/layout";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/editContact" element={<EditContact />} />
        <Route path="/editContact" element={<EditContact />} />
        <Route path="/contactDetail/:contactId" element={<ContactDetail />} />
        <Route path="/addTask" element={<AddTask />} />
      </Routes>
      <Footer/>
    </>
  );
};
