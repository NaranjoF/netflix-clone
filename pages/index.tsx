import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MoviesRows from "../components/MoviesRows";
import Footer from "../components/Footer";
import { StyledHome } from "../components/styledComponents/index.elements";
import { Movie } from "../typings";
import requests from "../utils/requests";

interface Props {
  comingSoon: Movie[];
}

const Home = ({ comingSoon }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const setingModal = (state: boolean) => {
    setIsOpenModal(state);
  };

  const homeIndex = useRef<"div" | any | {} | never>(null);

  useEffect(() => {
    const home = homeIndex.current;

    if (isOpenModal) {
      home.style.position = "fixed";
    } else {
      home.removeAttribute("style");
    }
  }, [isOpenModal]);

  return (
    <StyledHome ref={homeIndex}>
      <Head>
        <title>Home - Netflix</title>
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

      <main>
        <Banner setingModal={setingModal} />
        <MoviesRows comingSoon={comingSoon} />
      </main>

      <Footer />
    </StyledHome>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [comingSoon] = await Promise.all([
    fetch(requests.fetchComingSoon).then((res) => res.json()),
  ]);

  return {
    props: {
      comingSoon: comingSoon.results,
    },
  };
};
