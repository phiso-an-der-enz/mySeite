import classes from './GoogleMap.module.css';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.878577250915!2d8.777368475965297!3d48.9177055965311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479770f068dce1df%3A0x4ff5aa2650d26b4!2sAn%20d.%20Enz%203%2C%2075223%20Niefern-%C3%96schelbronn!5e0!3m2!1sde!2sde!4v1740339548635!5m2!1sde!2sde"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
export default GoogleMap;
