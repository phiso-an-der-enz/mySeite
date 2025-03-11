import classes from './Footer.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { MdPhone } from 'react-icons/md';
import { MdAlternateEmail } from 'react-icons/md';
import { MdOutlineTimer } from 'react-icons/md';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { MdOutlineLocalPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <div style={{ background: '#a5e08d' }}>
      <div className="container">
        <div className={classes.footer_wrap}>
          <div className={classes.footer_contact}>
            <div className={classes.links_wrap}>
              <div className={classes.adress}>
                <div className={classes.img}>
                  <SlLocationPin className={classes.icon} />
                </div>
                <div className={classes.info}>
                  <h3>Adresse</h3>
                  <p>An de Enz 3</p>
                  <p>75223 Niefern-Öschelbronn</p>
                </div>
              </div>

              <div className={classes.adress}>
                <div className={classes.img}>
                  <MdOutlineLocalPhone className={classes.icon} />
                </div>
                <div className={classes.info}>
                  <h3>TELEFON</h3>
                  <p>07233 942 6463</p>
                </div>
              </div>

              <div className={classes.adress}>
                <div className={classes.img}>
                  <MdAlternateEmail className={classes.icon} />
                </div>
                <div className={classes.info}>
                  <h3>EMAIL</h3>
                  <p>info@padenz.de</p>
                </div>
              </div>
            </div>

            <div className={classes.right_wrap}>
              <div className={classes.adress}>
                <div className={classes.img}>
                  <MdOutlineTimer className={classes.icon} />
                </div>
                <div className={classes.info}>
                  <h3>ÖFFNUNGSZEITEN</h3>
                  <p>Montag - Donnerstag:</p>
                  <p>07:00 - 17:00</p>
                  <p>(Sowie nach Vereinbarug)</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <GoogleMap />
          </div>
          <div className={classes.footImpressum}>
            <Link to={ROUTES.IMPRESSUM} className={classes.linkImpressum}>
              Impressum
            </Link>
            <Link to={ROUTES.DATENSCHUTZ} className={classes.linkImpressum}>
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
