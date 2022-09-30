import Head from "next/head";
import BackgroundLogin from "../components/BackgroundLogin";
import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";
import Header from "../components/Header";
import { StyledLogin } from "../components/styledComponents/BackgroundLogin.elements";
import { FormGeneralContainer } from "../components/styledComponents/FormLogin.elements";

export default function login() {
  return (
    <StyledLogin>
      <Head>
        <title>Netflix</title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"
        ></link>
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        ></link>
      </Head>

      <Header />
      <BackgroundLogin />
      <FormLogin />
      <Footer />
    </StyledLogin>
  );
}
