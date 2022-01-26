import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function QuoteSection() {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        voluptatum esse quidem, excepturi ipsum voluptate atque corporis enim
        autem ipsam dolorum quam aut neque asperiores nemo laborum soluta dolor
        eligendi assumenda. Provident inventore sit alias quasi, saepe quae
        ducimus perferendis culpa excepturi, sequi incidunt illum corporis quod
        natus rerum impedit?
      </p>
      <p className="quote-author">- Lorem ipsum dolor sit.</p>
    </div>
  );
}

export default QuoteSection;
