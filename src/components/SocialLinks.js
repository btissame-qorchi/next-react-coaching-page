import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = {
  facebook: faFacebook,
  instagram: faInstagram,
  linkedin: faLinkedin,
};

function SocialLinks({ social }) {
  return (
    <ul className="social-links flex justify-center">
      {Object.entries(social).map(([key, value]) => (
        <li key={key} className="mx-3">
          <a href={value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-white text-sm"
              icon={socialIcons[key.toLowerCase()]}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
