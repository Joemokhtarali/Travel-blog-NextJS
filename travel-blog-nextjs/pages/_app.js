import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/layout/layout";


function MyApp({ Component, pageProps }) {  

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
