import { MdPhone } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';
import classes from './Header.module.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className={classes.header_body}>
      <div className="container">
        <div className={classes.header_high}>
          <p className={`${classes.logoText} ${classes.logoTextHidden}`}>
            Phisio an der Enz
          </p>
          <img src={logo} alt="Logo" className={classes.logo} />
          <div className={classes.header_phone}>
            <a
              className={classes.text}
              href="tel:+49 7233 942 6463"
              target="_blank"
              rel="noreferrer"
            >
              <MdPhone className={`${classes.icon} ${classes.iconHidden}`} />
              07233 942 6463
            </a>
          </div>
          <a
            href="https://wa.me/+491729480898"
            className={`${classes.text} ${classes.hidden}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp className={classes.icon} />
          </a>

          <a href="mailto:phisio-an-der-enz@gmail.com" className={classes.text}>
            <MdAlternateEmail
              className={`${classes.icon} ${classes.iconHidden}`}
            />
            phisio-an-der-enz@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
