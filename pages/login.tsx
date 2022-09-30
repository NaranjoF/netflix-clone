import Head from "next/head";
import { useEffect } from "react";
import BackgroundLogin from "../components/BackgroundLogin";
import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";
import Header from "../components/Header";
import { StyledLogin } from "../components/styledComponents/BackgroundLogin.elements";
import { FormGeneralContainer } from "../components/styledComponents/FormLogin.elements";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setNewPage } from "../slices/pageSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login.value);

  useEffect(() => {
    dispatch(setNewPage("login"));
  });

  return (
    <StyledLogin>
      {!loginState && (
        <>
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
        </>
      )}
    </StyledLogin>
  );
}
