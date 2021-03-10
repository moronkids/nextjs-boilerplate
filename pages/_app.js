import React, { createContext } from "react";
import App from "next/app";
import "../styles/scss/styles.scss";
import HeadersWeb from "components/layouts/headers/headers";
import HeadersMobile from "components/mobile/layouts/headers";
import Footers from "components/layouts/footers/footer";
import Body from "components/layouts/body";
//redux
import { Provider } from "react-redux";
import { store } from "redux/index";
import { Hooks } from "providers/hooks";
import Head from "next/head";
function MyApp({ Component, pageProps, isMobileView }) {
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
          {isMobileView ? (
            <>
              <HeadersMobile />
              <Body>
                <Component device={isMobileView} {...pageProps} />
              </Body>
              <Footers />
            </>
          ) : (
            <>
              <HeadersWeb />
              <Body>
                <Component device={isMobileView} {...pageProps} />
              </Body>
              <Footers />
            </>
          )}
        </Hooks>
      </Provider>
    </>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   let isMobileView = (appContext.ctx.req
//     ? appContext.ctx.req.headers["user-agent"]
//     : navigator.userAgent
//   ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

//   return { ...appProps };
//   // return { ...appProps, isMobileView: Boolean(isMobileView) };
// };

export default MyApp;
