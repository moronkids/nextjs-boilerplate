import React, { createContext, useState } from "react";
import App from "next/app";
import "../styles/scss/styles.scss";
import HeadersWeb from "components/layouts/headers/headers";
import HeadersMobile from "components/mobile/layouts/headers";
import Footers from "components/layouts/footers/footer";
import Body from "components/layouts/body";
//redux
import { Provider, useDispatch } from "react-redux";
import { store } from "redux/index";
import { Hooks } from "providers/hooks";
import Head from "next/head";
import Router from "next/router";


function MyApp({ Component, pageProps, deviceType }) {

  return (
    <>
      <Provider store={store}>
        <Hooks>
          <Head>
            {" "}
            <link rel="manifest" href="/manifest.json" />
          </Head>
          <style jsx global>{`
            body {
              margin: 0px;
              padding: 0px;
            }
          `}</style>
          {deviceType ? (
            <>
              <HeadersMobile />
              <Body>
                <Component
                  device={deviceType}
                  {...pageProps}
                  // loading={loading}
                />
              </Body>
              <Footers />
            </>
          ) : (
            <>
              <HeadersWeb />
              <Body>
                <Component
                  device={deviceType}
                  {...pageProps}
                  // loading={loading}
                />
              </Body>
              <Footers />
            </>
          )}
        </Hooks>
      </Provider>
    </>
  );
}

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
      console.log(isMobile, "ceki2")
  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
}

export default MyApp;
