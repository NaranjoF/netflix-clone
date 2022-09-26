import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MoviesRows from "../components/MoviesRows";
import Footer from "../components/Footer";
import { StyledHome } from "../components/styledComponents/home.elements";
import { Movie } from "../typings";
import requests from "../utils/requests";
import Search from "../components/Search";

interface Props {
  comingSoon: Movie[];
}

const Home = ({ comingSoon }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [finishedTitle, setFinishedTitle] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const setingModal = (state: boolean) => {
    setIsOpenModal(state);
  };

  const finishedTitleSet = (state: boolean) => {
    setFinishedTitle(state);
  };

  const setingSearch = (state: boolean, search: string) => {
    setInputSearch(search);
    setSearchOn(state);
  };

  const setingSearchBar = (state: boolean) => {
    setSearchBar(state);
  };

  const closeSearchBar = () => {
    if (searchBar) {
      setSearchBar(false);
    }
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

      <Header
        setingSearch={setingSearch}
        inputSearch={inputSearch}
        searchBar={searchBar}
        setSearchBar={setingSearchBar}
      />

      <main onClick={closeSearchBar}>
        {searchOn && finishedTitle ? (
          <Search searchInfo={inputSearch} />
        ) : (
          <>
            <Banner
              setingModal={setingModal}
              finishedTitle={finishedTitleSet}
            />
            <MoviesRows comingSoon={comingSoon} />
          </>
        )}
      </main>

      <Footer closeSearchBar={closeSearchBar} />
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
