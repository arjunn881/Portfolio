import "./topbar.scss";
import { Person, Mail } from '@mui/icons-material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';





export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio..
          </a>
         <div className="itemContainer">
            <Person className="icon" />
            <span>+917978647324</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>arjunn881@gmail.com</span>
          </div>

          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>arjunn881</span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <span>arjunn881</span>
          </div>
  </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}