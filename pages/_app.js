import "../styles/scss/styles.scss";
import Headers from "components/layouts/headers/headers";
import Footers from "components/layouts/footers/footer";
import Body from "components/layouts/body";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Body>
        <Component {...pageProps} />
      </Body>
      <Footers />
    </>
  );
}