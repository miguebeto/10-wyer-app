import { RiContactsFill } from "react-icons/ri";
import { MdSpeakerNotes, MdTask } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
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
              <Link to="/contactDetail/1673648222149">
                <MdTask size={28} />
              </Link>
            </li>
            <li>
              <Link to="/contactDetail/1673648375462">
                <MdSpeakerNotes size={28} />
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
