import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MoviesRows from "../components/MoviesRows";
import { StyledHome } from "../components/styledComponents/index.elements";
import { Movie } from "../typings";
import requests from "../utils/requests";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) => {
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
        <MoviesRows />
      </main>
    </StyledHome>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
