import { useEffect, useState } from "react";
import { moviesArray } from "../utils/movies";
import { recommended } from "../utils/movies";
import Image from "next/image";
import { baseUrl } from "../constants/movie";
import { v4 as uuid } from "uuid";
import {
  BannerImageContainer,
  BannerContainer,
  MovieInfoContainter,
  MovieReview,
  MovieControls,
  PlayButton,
  InfoButton,
  ContentButton,
  Buttons,
  ReplayAndPegi,
  ActionButton,
  ActionContent,
  Pegi,
  MovieAbout,
  FirstInfo,
  SecondInfo,
  ThirdInfo,
  PrincipalInfoContainer,
  TrailerVideo,
  TitleInfo,
  TitleImageContainer,
  ModalContainer,
  ModalWrapper,
  ModalImageContainer,
  ImageModal,
  InformationModalContainer,
  TitleModalContainer,
  ImageTitle,
  ButtonsModal,
  PlayButtonModal,
  ContentButtonModal,
  PlayAndActionButtons,
  DescriptionModal,
  InfoRight,
  InfoLeft,
  MoreMoviesContainer,
  GridMovies,
  GridCard,
  GridCardDescription,
  CardTitle,
  SeparatorAndActionButton,
  ButtonsMoreMovies,
  Duration,
  AboutWrapper,
  TrailerModal,
  ShadowModal,
  CloseModal,
  BackgroundBannerModal,
  ActionContentModal,
  DataAboutMovie,
  ImageAndButtonsContainer,
  ActionButtonMute,
  ActionButtonReplay,
  ActionButtonReplayModal,
  ActionButtonMuteModal,
  ImageMovieBanner,
  ImageBannerContainer,
  ActionButtonGridCard,
  PlayButtonMoviesModal,
  ActionContentModalMM,
  ActionButtonMM,
  ModalAndBackgroundContainer,
  BackgroundModal,
  ShadowBanner,
} from "./styledComponents/Banner.elements";
import { useRef } from "react";

interface Props {
  setingModal: (state: boolean) => void;
  finishedTitle: (state: boolean) => void;
}

export default function Banner({ setingModal, finishedTitle }: Props) {
  // States

  const [mute, setMute] = useState(false);

  const [actualMovie, setActualMovie] = useState(0);

  const [endVideoModal, setEndVideoModal] = useState(false);

  const [modal, setModal] = useState(false);

  const [grid, setGrid] = useState(false);

  const [isOpenGrid, SetOpenGrid] = useState(false);

  const [dropDownTitle, setDropDownTitle] = useState(false);

  const [endVideoBanner, setEndVideoBanner] = useState(false);

  const [replayVideoModal, setReplayVideoModal] = useState(false);

  const [transitionModal, setTransitionModal] = useState(false);

  // Refs

  const movieTrailerBanner = useRef<"video" | any | {} | never>(null);

  const movieTrailerModal = useRef<"video" | any | {} | never>(null);

  const replayButton = useRef<"button" | any | {} | never>(null);

  const muteButton = useRef<"button" | any | {} | never>(null);

  const replayButtonModal = useRef<"button" | any | {} | never>(null);

  const muteButtonModal = useRef<"button" | any | {} | never>(null);

  const titleImage = useRef<"div" | any | {} | never>(null);

  const titleDescription = useRef<"p" | any | {} | never>(null);

  const bgdModal = useRef<"div" | any | {} | never>(null);

  const moviesGrid = useRef<"div" | any | {} | never>(null);

  const imageBanner = useRef<"div" | any | {} | never>(null);

  const modalCont = useRef<"div" | any | {} | never>(null);

  const BackModal = useRef<"div" | any | {} | never>(null);

  // General Functions

  const shrinkTitle = () => {
    const imageTitle = titleImage.current;
    const descriptionTitle = titleDescription.current;
    imageTitle.style.transform = "scale(0.7) translate(0, 80%)";
    imageTitle.style.transition = "transform 2s ease";
    imageTitle.style.transformOrigin = "bottom left";
    descriptionTitle.style.transform = "translate(0, 90%)";
    descriptionTitle.style.opacity = "0";
    descriptionTitle.style.transition = "transform 2s ease, opacity 0.5s ease";
    setDropDownTitle(true);
    finishedTitle(true);
  };

  const expandTitle = () => {
    const imageTitle = titleImage.current;
    const descriptionTitle = titleDescription.current;

    imageTitle.style.transform = "scale(1) translate(0px, 0rem)";
    imageTitle.style.transition = "transform 1.5s ease";
    descriptionTitle.style.transform = "translate(0, 0rem)";
    descriptionTitle.style.opacity = "1";
    descriptionTitle.style.transition = "transform 1.5s ease, opacity 2s ease";
    setDropDownTitle(false);
  };

  //  Functions For Modal

  const handleModal = () => {
    const Background = bgdModal.current;
    const movieBanner = movieTrailerBanner.current;
    const muteBanner = muteButton.current;
    const replayBanner = replayButton.current;
    const movieModal = movieTrailerModal.current;
    const backgroundModal = BackModal.current;
    const modalContainer = modalCont.current;

    if (modal === false) {
      // Background.style.position = "fixed";
      Background.style.width = "100%";
      Background.style.height = "100%";
      movieBanner.style.opacity = 0;
      setingModal(true);
      setModal(true);

      if (dropDownTitle === false) {
        shrinkTitle();
      }
    } else if (modal === true) {
      Background.removeAttribute("style");

      if (transitionModal === true) {
        movieModal.style.opacity = 0;

        setTimeout(() => {
          movieModal.style.zIndex = -1;
          backgroundModal.style.opacity = 0;
          modalContainer.style.transform = "scale(0.8)";
          modalContainer.style.opacity = 0.3;
          setTransitionModal(false);
        }, 300);
      }

      setTimeout(() => {
        setingModal(false);
        setModal(false);
        if (endVideoModal !== true) {
          if (endVideoBanner === true) {
            setEndVideoBanner(false);
          }

          if (replayVideoModal === true) {
            setReplayVideoModal(false);
          }

          movieBanner.style.opacity = 1;
          muteBanner.style.zIndex = 2;
          replayBanner.style.zIndex = 1;
          muteBanner.style.opacity = 1;
          replayBanner.style.opacity = 0;
          const videoTime = movieModal.currentTime;
          movieBanner.currentTime = videoTime;
          movieBanner.play();

          if (mute === true) {
            movieBanner.muted = false;
          } else if (mute === false) {
            movieBanner.muted = true;
          }
        }

        if (isOpenGrid === true && grid === true) {
          SetOpenGrid(false);
          setGrid(false);
        }
      }, 600);
    }
  };

  const handleMoviesGrid = () => {
    const GridM = moviesGrid.current;

    if (grid === false) {
      GridM.style.maxHeight = "5000px";
      GridM.style.marginBottom = "3rem";
      setGrid(true);
      SetOpenGrid(true);
    } else if (grid === true) {
      GridM.style.maxHeight = "63rem";
      GridM.style.marginBottom = "0rem";
      setGrid(false);
      SetOpenGrid(false);
    }
  };

  const handleMuteModal = () => {
    const movieModal = movieTrailerModal.current;
    if (movieModal.muted === true) {
      movieModal.muted = false;
      setMute(true);
    } else if (movieModal.muted === false) {
      movieModal.muted = true;
      setMute(false);
    }
  };

  const replayTrailerModal = () => {
    const muteModal = muteButtonModal.current;
    const replayModal = replayButtonModal.current;
    const movieModal = movieTrailerModal.current;
    const muteBanner = muteButton.current;
    const replayBanner = replayButton.current;

    muteBanner.style.opacity = 1;
    muteBanner.style.zIndex = 2;
    muteModal.style.opacity = 1;
    muteModal.style.zIndex = 1;
    replayBanner.style.zIndex = 0;
    replayBanner.style.opacity = 0;
    replayModal.style.opacity = 0;
    movieModal.style.opacity = 1;
    movieModal.muted = true;
    movieModal.currentTime = 0;
    movieModal.play();
    setMute(false);
    setEndVideoModal(false);
    setReplayVideoModal(true);

    shrinkTitle();
  };

  const animationModal = () => {
    const backgroundModal = BackModal.current;
    const modalContainer = modalCont.current;
    const movieModal = movieTrailerModal.current;

    if (!transitionModal) {
      backgroundModal.style.opacity = 0.7;
      modalContainer.style.transform = "scale(1)";
      modalContainer.style.opacity = 1;
      setTransitionModal(true);

      setTimeout(() => {
        movieModal.style.zIndex = 1;
      }, 300);

      setTimeout(() => {
        movieModal.style.opacity = 1;
        movieModal.play();
      }, 500);
    }
  };

  const videoModal = () => {
    const movieBanner = movieTrailerBanner.current;
    const movieModal = movieTrailerModal.current;
    const muteModal = muteButtonModal.current;
    const replayModal = replayButtonModal.current;
    const muteBanner = muteButton.current;
    const replayBanner = replayButton.current;

    if (mute === true) {
      movieModal.muted = false;
    } else if (mute === false) {
      movieModal.muted = true;
    }

    const handleTrailerModal = () => {
      setEndVideoModal(true);
      muteModal.style.opacity = 0;
      muteModal.style.zIndex = -1;
      replayModal.style.opacity = 1;
      movieModal.style.opacity = 0;
      muteBanner.style.opacity = 0;
      muteBanner.style.zIndex = 1;
      replayBanner.style.zIndex = 2;
      replayBanner.style.opacity = 1;
      expandTitle();
    };

    movieModal.addEventListener("ended", handleTrailerModal);

    if (
      endVideoModal === false &&
      endVideoBanner === false &&
      replayVideoModal === false
    ) {
      const VideoTime = movieBanner.currentTime;
      movieModal.currentTime = VideoTime;
      movieBanner.pause(true);
    } else if (endVideoModal === true) {
      setEndVideoModal(false);
    }

    if (endVideoModal === false && endVideoBanner === true) {
      movieModal.currentTime = 0;
      muteBanner.style.opacity = 1;
      muteBanner.style.zIndex = 2;
      replayBanner.style.zIndex = 1;
      replayBanner.style.opacity = 0;

      if (dropDownTitle === false) {
        shrinkTitle();
      }
    }

    return () => {
      movieModal.removeEventListener("ended", handleTrailerModal);
    };
  };

  // Functions for videoBanner

  const replayTrailerBanner = () => {
    const movie = movieTrailerBanner.current;
    const replay = replayButton.current;
    const mute = muteButton.current;

    movie.muted = true;
    mute.style.zIndex = 2;
    replay.style.zIndex = 1;
    movie.style.opacity = 1;
    setMute(false);
    movie.currentTime = 0;
    movie.play();
    mute.style.opacity = 1;
    replay.style.opacity = 0;
    setEndVideoBanner(false);

    setTimeout(() => {
      shrinkTitle();
    }, 3500);
  };

  const handleMuteBanner = () => {
    const movie = movieTrailerBanner.current;
    if (movie.muted === true) {
      movie.muted = false;
      setMute(true);
    } else if (movie.muted === false) {
      movie.muted = true;
      setMute(false);
    }
  };

  const handleTrailer = () => {
    const movie = movieTrailerBanner.current;
    const replay = replayButton.current;
    const mute = muteButton.current;
    expandTitle();
    movie.style.opacity = 0;
    mute.style.opacity = 0;
    mute.style.zIndex = 1;
    replay.style.zIndex = 2;
    replay.style.opacity = 1;
    setEndVideoBanner(true);
    console.log("termino");
  };

  const videoBanner = () => {
    // const movie = movieTrailerBanner.current;
    // const replay = replayButton.current;
    // const mute = muteButton.current;
    finishedTitle(false);

    setTimeout(() => {
      shrinkTitle();
    }, 3500);

    // movie.addEventListener("ended", handleTrailer);

    // return () => {
    //   movie.removeEventListener("ended", handleTrailer);
    // };
  };

  useEffect(() => {
    const randomMovie = (max: number) => {
      const number = Math.floor(Math.random() * max);
      setActualMovie(number);
    };

    randomMovie(5);
  }, []);

  return (
    <BannerContainer>
      <BackgroundBannerModal ref={bgdModal}>
        <BannerImageContainer>
          <TrailerVideo
            ref={movieTrailerBanner}
            src={moviesArray[actualMovie].trailer}
            autoPlay={true}
            muted={true}
            controls={false}
            onPlay={() => videoBanner()}
            onEnded={() => handleTrailer()}
          />
          <ImageBannerContainer ref={imageBanner}>
            <ImageMovieBanner
              src={moviesArray[actualMovie].backgroundImageMovie}
              width="100%"
              height="57vh"
              layout="responsive"
              alt="Cover"
            />
            <ShadowBanner></ShadowBanner>
          </ImageBannerContainer>
        </BannerImageContainer>

        <MovieInfoContainter>
          <PrincipalInfoContainer>
            <TitleInfo>
              <TitleImageContainer ref={titleImage}>
                <Image
                  src={moviesArray[actualMovie].titleImage}
                  width="30%"
                  height="10rem"
                  layout="responsive"
                  alt="movieTitle"
                />
              </TitleImageContainer>
              <MovieReview ref={titleDescription}>
                {moviesArray[actualMovie].aboutMovie}
              </MovieReview>
            </TitleInfo>

            <MovieControls>
              <Buttons>
                <PlayButton>
                  <ContentButton>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      color="black"
                    >
                      <path
                        d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span>Play</span>
                  </ContentButton>
                </PlayButton>
                <InfoButton
                  onClick={() => {
                    handleModal();
                  }}
                >
                  <ContentButton>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span>More Info</span>
                  </ContentButton>
                </InfoButton>
              </Buttons>

              <ReplayAndPegi>
                <ActionButtonMute onClick={handleMuteBanner} ref={muteButton}>
                  <ActionContent>
                    {mute ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    )}
                  </ActionContent>
                </ActionButtonMute>

                <ActionButtonReplay
                  onClick={replayTrailerBanner}
                  ref={replayButton}
                >
                  <ActionContent>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </ActionContent>
                </ActionButtonReplay>
                <Pegi>
                  <p>16+</p>
                </Pegi>
              </ReplayAndPegi>
            </MovieControls>
          </PrincipalInfoContainer>
        </MovieInfoContainter>
      </BackgroundBannerModal>

      {modal && (
        <>
          <ModalWrapper onMouseEnter={() => animationModal()}>
            <ModalAndBackgroundContainer>
              <BackgroundModal
                onClick={() => {
                  handleModal();
                }}
                ref={BackModal}
              ></BackgroundModal>
              <ModalContainer ref={modalCont}>
                <CloseModal
                  onClick={() => {
                    handleModal();
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-uia="previewModal-closebtn"
                    role="button"
                    aria-label="close"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </CloseModal>
                <ModalImageContainer>
                  <TrailerModal
                    ref={movieTrailerModal}
                    src={moviesArray[actualMovie].trailer}
                    autoPlay={false}
                    muted={true}
                    controls={false}
                    disablePictureInPicture={true}
                    controlsList={"nodownload"}
                    onPlay={() => videoModal()}
                  />

                  <ImageModal
                    src={moviesArray[actualMovie].modalImageMovie}
                    width="100%"
                    height="56vh"
                    layout="responsive"
                    alt="Cover"
                  ></ImageModal>
                  <ShadowModal></ShadowModal>
                </ModalImageContainer>

                <ImageAndButtonsContainer>
                  <TitleModalContainer>
                    <Image
                      src={moviesArray[actualMovie].titleImage}
                      width="50rem"
                      height="20%"
                      layout="responsive"
                      alt="movieTitle"
                    />
                  </TitleModalContainer>
                  <ButtonsModal>
                    <PlayAndActionButtons>
                      <PlayButtonModal>
                        <ContentButtonModal>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="black"
                          >
                            <path
                              d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                              fill="currentColor"
                            ></path>
                          </svg>

                          <span>Play</span>
                        </ContentButtonModal>
                      </PlayButtonModal>

                      <ActionButton>
                        <ActionContentModal>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </ActionContentModal>
                      </ActionButton>

                      <ActionButton>
                        <ActionContentModal>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </ActionContentModal>
                      </ActionButton>
                    </PlayAndActionButtons>

                    <ReplayAndPegi>
                      <ActionButtonMuteModal
                        ref={muteButtonModal}
                        onClick={() => handleMuteModal()}
                      >
                        <ActionContentModal>
                          {mute ? (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          )}
                        </ActionContentModal>
                      </ActionButtonMuteModal>

                      <ActionButtonReplayModal
                        ref={replayButtonModal}
                        onClick={() => replayTrailerModal()}
                      >
                        <ActionContentModal>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </ActionContentModal>
                      </ActionButtonReplayModal>
                    </ReplayAndPegi>
                  </ButtonsModal>
                </ImageAndButtonsContainer>

                <InformationModalContainer>
                  <DescriptionModal>
                    <InfoLeft>
                      <DataAboutMovie>
                        <p>{moviesArray[actualMovie].match}</p>
                        <div>
                          <div>
                            <span>{moviesArray[actualMovie].releaseYear}</span>
                            <span>
                              {moviesArray[actualMovie].maturyRaiting}
                            </span>
                          </div>
                          <div>
                            <span>{moviesArray[actualMovie].duration}</span>
                            <span>HD</span>
                          </div>
                        </div>
                        <div>
                          <span>
                            <svg id="audio-description" viewBox="0 0 58.07 24">
                              <path
                                fill="currentColor"
                                d="M18.34,10.7v7.62l-4.73,0ZM.5,26.6h8l2.17-3,7.49,0s0,2.08,0,3.06h5.7V2.77H17C16.3,3.79.5,26.6.5,26.6Z"
                                transform="translate(-0.5 -2.62)"
                              ></path>
                              <path
                                fill="currentColor"
                                d="M30.63,8.91c3.6-.13,6.1,1.8,6.48,4.9.5,4.15-2.43,6.85-6.66,6.56V9.19A.26.26,0,0,1,30.63,8.91ZM25,3V26.56c5.78.11,10.22.32,13.49-1.85a12.2,12.2,0,0,0,5.14-11.36A11.52,11.52,0,0,0,33.38,2.72c-2.76-.23-8.25,0-8.25,0A.66.66,0,0,0,25,3Z"
                                transform="translate(-0.5 -2.62)"
                              ></path>
                              <path
                                fill="currentColor"
                                d="M43.72,3.43c1.45-.4,1.88,1.2,2.51,2.31a18.73,18.73,0,0,1-1.42,20.6h-.92a1.86,1.86,0,0,1,.42-1.11,21.39,21.39,0,0,0,2.76-10.16A22.54,22.54,0,0,0,43.72,3.43Z"
                                transform="translate(-0.5 -2.62)"
                              ></path>
                              <path
                                fill="currentColor"
                                d="M48.66,3.43c1.43-.4,1.87,1.2,2.5,2.31a18.83,18.83,0,0,1-1.42,20.6h-.91c-.07-.42.24-.79.41-1.11A21.39,21.39,0,0,0,52,15.07,22.63,22.63,0,0,0,48.66,3.43Z"
                                transform="translate(-0.5 -2.62)"
                              ></path>
                              <path
                                fill="currentColor"
                                d="M53.57,3.43c1.46-.4,1.9,1.2,2.54,2.31a18.58,18.58,0,0,1-1.44,20.6h-.93c-.07-.42.24-.79.42-1.11A21,21,0,0,0,57,15.07,22.26,22.26,0,0,0,53.57,3.43Z"
                                transform="translate(-0.5 -2.62)"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </DataAboutMovie>

                      <p>{moviesArray[actualMovie].aboutMovie}</p>
                    </InfoLeft>
                    <InfoRight>
                      <div>
                        <span>Cast:</span>
                        {moviesArray[actualMovie].cast.map((actor) => (
                          <span key={uuid()}>{actor}</span>
                        ))}
                      </div>

                      <div>
                        <span>Genres:</span>
                        {moviesArray[actualMovie].Genres.map((genre) => (
                          <span key={uuid()}>{genre}</span>
                        ))}
                      </div>

                      <div>
                        <span>The Movie is:</span>
                        {moviesArray[actualMovie].thisMovieIs.map((is) => (
                          <span key={uuid()}>{is}</span>
                        ))}
                      </div>
                    </InfoRight>
                  </DescriptionModal>
                  <MoreMoviesContainer>
                    <p>More Like This</p>
                    <GridMovies ref={moviesGrid}>
                      {recommended[actualMovie].map((movie) => (
                        <GridCard key={uuid()}>
                          <Duration>{movie.duration}</Duration>
                          <section
                            style={{
                              position: "relative",
                              width: "100%",
                              height: "max-content",
                            }}
                          >
                            <PlayButtonMoviesModal>
                              <ActionButtonMM>
                                <ActionContentModalMM>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                      fill="#FFFFFF"
                                    ></path>
                                  </svg>
                                </ActionContentModalMM>
                              </ActionButtonMM>
                            </PlayButtonMoviesModal>
                            <Image
                              src={movie.modalImageMovie}
                              width="100%"
                              height="55vh"
                              layout="responsive"
                              alt="Cover"
                              style={{
                                borderRadius: "4px 4px 0px 0px",
                                zIndex: "1",
                              }}
                            />
                          </section>
                          <GridCardDescription>
                            <CardTitle>
                              <div>
                                <span>{movie.maturyRaiting}</span>
                                <span>{movie.releaseYear}</span>
                              </div>
                              <div>
                                <ActionButtonGridCard>
                                  <ActionContent>
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </ActionContent>
                                </ActionButtonGridCard>
                              </div>
                            </CardTitle>
                            <p>{movie.aboutMovie}</p>
                          </GridCardDescription>
                        </GridCard>
                      ))}
                    </GridMovies>
                    <SeparatorAndActionButton>
                      <ButtonsMoreMovies onClick={() => handleMoviesGrid()}>
                        <ActionButton>
                          <ActionContentModal>
                            {isOpenGrid ? (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19.293 16.7071L12.0001 9.41421L4.70718 16.7071L3.29297 15.2929L11.293 7.29289C11.4805 7.10536 11.7349 7 12.0001 7C12.2653 7 12.5196 7.10536 12.7072 7.29289L20.7072 15.2929L19.293 16.7071Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            )}
                          </ActionContentModal>
                        </ActionButton>
                      </ButtonsMoreMovies>
                    </SeparatorAndActionButton>
                  </MoreMoviesContainer>
                  <AboutWrapper>
                    <h3>
                      About <strong>{moviesArray[actualMovie].name}</strong>
                    </h3>
                    <p>
                      <span>Director: </span>
                      <span>{moviesArray[actualMovie].Director}</span>
                    </p>
                    <p>
                      <span>Cast: </span>
                      {moviesArray[actualMovie].cast.map((actor) => (
                        <span key={actor}>{actor}</span>
                      ))}
                    </p>
                    <p>
                      <span>Writer: </span>
                      {moviesArray[actualMovie].writer.map((writer) => (
                        <span key={writer}>{writer}</span>
                      ))}
                    </p>
                    <p>
                      <span>Genres: </span>
                      {moviesArray[actualMovie].Genres.map((genres) => (
                        <span key={genres}>{genres}</span>
                      ))}
                    </p>
                    <p>
                      <span>This movie is: </span>
                      {moviesArray[actualMovie].thisMovieIs.map((is) => (
                        <span key={is}>{is}</span>
                      ))}
                    </p>
                    <p>
                      <span>Matury Raiting: </span>
                      <span>{moviesArray[actualMovie].maturyRaiting}</span>
                    </p>
                  </AboutWrapper>
                </InformationModalContainer>
              </ModalContainer>
            </ModalAndBackgroundContainer>
          </ModalWrapper>
        </>
      )}
    </BannerContainer>
  );
}
