import React, { ReactChild } from "react";

import "tachyons";
import Helmet from "react-helmet";

import "./page.css";

interface Props {
  children: React.ReactChild | ReactChild[];
}

export function Page(props: Props) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
          class: "bv-color bv-bg-color sans-serif"
        }}
      />
      {props.children}
    </>
  );
}
