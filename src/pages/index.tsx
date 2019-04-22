import React from "react";
import { Head } from "../components/head";
import { SocialList } from "../components/social";
import { useSiteMetadata } from "../hooks/gatsby";
import Helmet from "react-helmet";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Page } from "../components/page";

export default () => {
  const { siteUrl, email, keywords } = useSiteMetadata();
  return (
    <Page>
      <div
        className="flex flex-row justify-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div
          className="flex flex-column"
          style={{
            maxWidth: "1024px"
          }}
        >
          <Head />
          <Helmet>
            <meta name="keywords" content={keywords.join(", ")} />
            <link rel="canonical" href={siteUrl} />
          </Helmet>
          <Header />
          <main className="flex-grow-1">
            <SocialList />
            <section>
              <p className="mh3 mv4 lh-title">
                Looking to collaborate on open-source projects or music? Have a
                professional opportunity you feel I may be interested in? Email
                me at{" "}
                <a className="link bv-color underline" href={`mailto:${email}`}>
                  bvalosek@gmail.com
                </a>{" "}
                or reach out on any of my social networks.
              </p>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </Page>
  );
};
