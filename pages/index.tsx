import Head from "next/head";
import { useState } from "react";
import CreateProfile from "../components/CreateProfile";
import DownloadYourShows from "../components/DownloadYourShows";
import EnjoyOnYourTv from "../components/EnjoyOnYourTv";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { StyledIndex } from "../components/styledComponents/index.elements";
import { UnlimitedMovies } from "../components/UnlimitedMovies";
import WatchEverywhere from "../components/WatchEverywhere";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setNewPage } from "../slices/pageSlice";

export default function Index() {
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login.value);

  useState(() => {
    dispatch(setNewPage("index"));
  });

  return (
    <StyledIndex>
      {!loginState && (
        <>
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

          <Header />
          <UnlimitedMovies />
          <EnjoyOnYourTv />
          <DownloadYourShows />
          <WatchEverywhere />
          <CreateProfile />
          <Faq />
          <Footer />
        </>
      )}
    </StyledIndex>
  );
}
