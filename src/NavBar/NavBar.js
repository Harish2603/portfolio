// Navbar.jsx
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file for styling
import logo from '../images/download2.png';
import Switch from 'react-switch';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prevClicked) => !prevClicked);
      };

      const navbarClass = isClicked ? '#navbar active' : '#navbar';

      const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    // Toggle the theme state
    setIsDarkTheme((prevTheme) => !prevTheme);

    // Update the body background color based on the theme
    document.body.style.backgroundColor = isDarkTheme ? '#bfc4ca' : '#6e727a';
  };


  return (
    <div className='Headnavbar' >
    <nav>
    <Link to="/home"> 
    <img src={logo} alt="Logo" className='logo' />
    </Link>
    <div>
    <ul id="navbar" className={navbarClass}>
            <li><Link to="/home">Home</Link></li> 
            <li><Link to="/About">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="https://drive.google.com/file/d/1_mBEuKMJh_32pinJ9EvkFQHhimgRUQIr/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <label>
        <Switch
          onChange={toggleTheme}
          checked={isDarkTheme}
          offColor="#bfc4ca"
          onColor="#000333"
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </label>
    </ul>
    </div>
    <div id="mobile">
    <i id="bar" className={isClicked ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
       
    </div>
    </nav>
     </div>
  );
};

export default Navbar;
