import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import React, { useEffect, useRef, useState } from 'react';
import logo from "./../../assets/Screenshot 2024-12-10 025803.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = useRef(null);
  const links = useRef(null);

  useEffect(() => {
    if (menu.current && links.current) {
      if (isMenuOpen) {
        menu.current.style.left = '0px';
        links.current.style.left = '0px';
      } else {
        menu.current.style.left = '100%';
        links.current.style.left = '100%';
      }
    }
  }, [isMenuOpen]);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <img src={logo} alt="LamaEstate Logo" />
          <span>RealEstate</span>
        </div>

        <div ref={menu} className={styles.menu}>
          <div className={styles.ul_container}>
            <ul ref={links} className={`${styles.navbar_links}`}>
              <NavLink 
                to="/home" 
                className={({ isActive }) => 
                  isActive ? `${styles.Active}` : ''
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? `${styles.Active}` : ''
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? `${styles.Active}` : ''
                }
              >
                <li>Contact</li>
              </NavLink>
              <NavLink 
                to="/agents" 
                className={({ isActive }) => 
                  isActive ? `${styles.Active}` : ''
                }
              >
                <li>Agents</li>
              </NavLink>
            </ul>
          </div>
        </div>

        <div className={styles.navbar_btns}>
          <button onClick={handleLogin} className="btn-black">Login</button>
          <button onClick={handleRegister} className="btn-green">Register</button>
        </div>

        {window.innerWidth < 603 && (
          <div className={styles.toggle_container}>
            <button 
              className={styles.menu_toggle} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
