import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import logo from "./../../assets/Screenshot 2024-12-10 025803.png"
import { TokenContext } from '../../Context/TokenContext';
import { jwtDecode } from 'jwt-decode';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [isAdmin, setisAdmin] = useState(false)

  const menu = useRef(null);
  const links = useRef(null);
  const { Token, setToken } = useContext(TokenContext)


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
    
    if (Token) {
      let decoded = jwtDecode(Token)
      if (decoded.role === "admin") {
        setisAdmin(true)
      } else {
        setisAdmin(false)
      }
      console.log(isAdmin);
      
    }

  }, [isMenuOpen, Token]);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };
  const handleLogout = () => {
    localStorage.removeItem("Token")
    setToken(null)
    setisAdmin(false)
    handleLogin()


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

           { isAdmin?  <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? `${styles.Active}` : ''
                }
              >
                <li>Admin</li>
              </NavLink>:<></>}
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? `${styles.Active}` : ''
                }
              >
                <li>Profile</li>
              </NavLink>
              {Token ?
                <NavLink
                  to="/sell"
                  className={({ isActive }) =>
                    isActive ? `${styles.Active}` : ''
                  }
                >
                  <li>Sell</li>
                </NavLink>

                : <></>}
            </ul>
          </div>
        </div>

        <div className={styles.navbar_btns}>
          {Token ? <button onClick={handleLogout} className="btn-red">Logout</button> : <>
            <button onClick={handleLogin} className="btn-black">Login</button>
            <button onClick={handleRegister} className="btn-green">Register</button>
          </>
          }


        </div>

        {(window.innerWidth < 603) ?
          <div className={styles.toggle_container}>
            <button className={styles.menu_toggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
          </div> : <></>
        }

      </div>
    </nav>
  );
}
