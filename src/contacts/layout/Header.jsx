import { RiContactsFill } from "react-icons/ri";
import { MdSpeakerNotes, MdTask } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

export const Header = () => {

  const contacts = useSelector(status => status.contact?.contacts)
  console.log(contacts[0]?.id)

  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <RiContactsFill size={28} />
              </Link>
            </li>
            <li>
              <Link to={`/contactDetail`}>
                <MdTask size={28} />
              </Link>
            </li>
            <li>
              <Link to={`/contactDetail/${contacts[0]?.id}`}>
                <MdSpeakerNotes size={28} />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
