import '../styles/css/Footer.css';
const Footer = () => {
return (


<footer className="footer">
<nav className="footer-nav">
  <ul className="footer-nav__link-list">
    <li className="footer-nav__link-item">
      <a href="https://github.com/Jofran8" className="footer-nav__link">
        <img src="https://i.postimg.cc/cHyqdTzy/github-icon-13-256.png" alt="GitHub"
          className="footer-nav__link-image" />
      </a>
    </li>
    <li className="footer-nav__link-item">
      <a href="https://github.com/Jofran8" className="footer-nav__link">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="YouTube"
          className="footer-nav__link-image" />
      </a>
    </li>
    <li className="footer-nav__link-item">
      <a href="https://github.com/Jofran8" className="footer-nav__link">
        <img src="https://i.postimg.cc/65TVxg9t/world-globe.png" alt="Página Personal"
          className="footer-nav__link-image" />
      </a>
    </li>
  </ul>
  <h2 className="footer-nav__credits">
    Copyright &copy; 2022.
    <a href="#perfil" className="footer-nav__credits-author"> 🐸Jofran🐸
    </a>
    Todos los derechos reservados.
  </h2>
</nav>
</footer>
  );
}

export default Footer;