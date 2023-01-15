import { RiContactsFill } from "react-icons/ri";
import { MdSpeakerNotes, MdTask } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useSelector } from "react-redux";

export const Footer = () => {

  const contacts = useSelector(status => status.contact?.contacts)

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
              <Link to={`/contactDetail/${contacts[0]?.id}`}>
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
