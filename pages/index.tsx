import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import { StyledIndex } from "../components/styledComponents/index.elements";
import { UnlimitedMovies } from "../components/UnlimitedMovies";

export default function Index() {
  const [login, setLogin] = useState(false);

  return (
    <StyledIndex>
      <Head>
        <title>Netflix - Watch Tv Shows Online, Watch Movies Online</title>
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

      <Header login={login} />
      <UnlimitedMovies />
    </StyledIndex>
  );
}
