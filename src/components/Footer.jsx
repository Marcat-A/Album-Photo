import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title"><FormattedMessage id="footerFirst.title" defaultMessage="Sources" /></p>
        <a
          href="https://www.youtube.com/watch?v=iY0AY5IckGg&list=PLrTfVsEZNy6gZefi5OElWGObhGDaRIO5l"
          className="sources"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage id="footerFirst.a" defaultMessage="Tuto React.js" />
        </a>
        <a
          href="https://www.youtube.com/watch?v=DMobn0LkSI0"
          className="sources"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage id="footerSecond.a" defaultMessage="Implémentation JsonPlaceHolder" />
        </a>
        <a
          href="https://www.youtube.com/watch?v=hOg-hJDw1NM"
          className="sources"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage id="footerThird.a" defaultMessage="Comprendre React Router V6" />
        </a>
        <a
          href="https://docs.google.com/document/d/1lt_Ni2u3qJRNxA87y24XoWo3-NjZ9xQ6mQ-x5gM25A8/edit?usp=sharing"
          className="sources"
          target="_blank"
          rel="noreferrer"
        >
          <FormattedMessage id="footerForth.a" defaultMessage="Cahier des charges" />
        </a>
      </div>
      <div className="footer-section">
        <p className="title"><FormattedMessage id="footerSecond.title" defaultMessage="Réalisation" /></p>
        <p><FormattedMessage id="footerFirst.p" defaultMessage="Pour Cédric Jimenez" /></p>
        <p>
        <FormattedMessage id="footerSecond.p" defaultMessage="Premier projet en React.js et SASS en incluant des données d'une API. (JsonPlaceHolder)" />
        </p>
        <p className="copyright">- &copy; Anthony Marcato 2022 -</p>
      </div>
      <div className="footer-section">
        <p className="title"><FormattedMessage id="footerThird.title" defaultMessage="Auteur:" /></p>
        <p>
          <a
            href="https://www.linkedin.com/in/anthony-marcato-858107225/"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn :{" "}
            <b>
              <FontAwesomeIcon icon={faLinkedin} />
            </b>
          </a>
          <a
            href="https://github.com/Marcat-A/"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub :{" "}
            <b>
              <FontAwesomeIcon icon={faGithub} />
            </b>
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-marcato-858107225/"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            Facebook :{" "}
            <b>
              <FontAwesomeIcon icon={faFacebook} />
            </b>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
