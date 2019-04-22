import React from "react";
import { useSiteMetadata } from "../hooks/gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faKey } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const { location, gpgFingerprint } = useSiteMetadata();
  return (
    <footer className="mv2 tc f7 o-70">
      <div>
        <FontAwesomeIcon className="ph2" icon={faMapMarkerAlt} />
        {location}
      </div>
      <div className="mv2">
        <FontAwesomeIcon className="ph2" icon={faKey} />
        {gpgFingerprint}
      </div>
    </footer>
  );
}
