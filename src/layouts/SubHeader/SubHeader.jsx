import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import classes from './SubHeader.module.css';
import { ROUTES } from './../../utils/routes';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className={classes.subWrapper}>
      <div className="container">
        <div className={classes.subHeader_container}>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Logo" className={classes.logo} />
          </Link>

          <nav className={`${classes.nav} ${isOpen ? classes.active : ''}`}>
            <MdClose
              className={classes.close}
              onClick={() => setIsOpen(!isOpen)}
              style={{ display: isOpen ? 'block' : 'none' }}
            />
            <ul className={classes.navigation}>
              <li>
                <Link to={ROUTES.HOME} className={classes.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className={classes.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.GALEREA} className={classes.link}>
                  Galerea
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PRAXIS} className={classes.link}>
                  Praxis
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className={classes.menu_button}
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdMenu />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
