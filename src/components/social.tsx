import React from "react";
import { useSocial } from "../hooks/gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faGithub,
  faSoundcloud,
  faKeybase,
  faInstagram,
  faAngellist,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";

const icons = {
  twitter: faTwitter,
  github: faGithub,
  soundcloud: faSoundcloud,
  keybase: faKeybase,
  instagram: faInstagram,
  linkedin: faLinkedin,
  angellist: faAngellist,
  facebook: faFacebook
};

const getIcon = (key: string): IconDefinition => {
  if (!icons[key]) {
    throw new TypeError();
  }

  return icons[key];
};

export function SocialList() {
  const links = useSocial();
  return (
    <ul className="mh2 list pa0 flex flex-column">
      {links.map(link => (
        <li className="mb1" key={link.caption}>
          <a
            target="_blank"
            rel="noreferrer"
            className="link dim bv-color flex items-center"
            href={link.link}
          >
            <div className="w3 tc">
              <FontAwesomeIcon
                className="f3"
                icon={getIcon(link.caption.toLowerCase())}
              />
            </div>
            <span className="ttu">{link.caption}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
