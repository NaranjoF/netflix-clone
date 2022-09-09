import { useEffect, useState } from "react";
import { Movie } from "../typings";
import Image from "next/image";
import { baseUrl } from "../constants/movie";
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
  BackgroundModal,
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
} from "./styledComponents/Banner.elements";
import { useRef } from "react";

interface Props {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: Props) {
  // States

  const [mute, setMute] = useState(false);

  const [trailer, setTrailer] = useState(true);

  const [trailerModal, setTrailerModal] = useState(true);

  const [modal, setModal] = useState(false);

  const [grid, setGrid] = useState(false);

  const [isOpenGrid, SetOpenGrid] = useState(false);

  // Refs

  const movieTrailerBanner = useRef<"video" | any | {} | never>(null);

  const movieTrailerModal = useRef<"video" | any | {} | never>(null);

  const replayButton = useRef<"button" | any | {} | never>(null);

  const muteButton = useRef<"button" | any | {} | never>(null);

  const replayButtonModal = useRef<"button" | any | {} | never>(null);

  const muteButtonModal = useRef<"button" | any | {} | never>(null);

  const titleImage = useRef<"div" | any | {} | never>(null);

  const titleDescription = useRef<"p" | any | {} | never>(null);

  const BgdModal = useRef<"div" | any | {} | never>(null);

  const MoviesGrid = useRef<"div" | any | {} | never>(null);

  // Functions

  const handleModal = () => {
    const Background = BgdModal.current;
    const mute = muteButton.current;
    const replay = replayButton.current;

    if (modal === false) {
      Background.style.position = "fixed";
      Background.style.width = "100%";
      Background.style.height = "100%";
      if (mute.style.opacity !== 0) {
        mute.style.opacity = 0;
      }
      replay.style.opacity = 1;
      setTrailerModal(true);
    } else if (modal === true) {
      Background.removeAttribute("style");
    }
  };

  const handleMoviesGrid = () => {
    const GridM = MoviesGrid.current;

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
    const movie = movieTrailerModal.current;
    if (movie.muted === true) {
      movie.muted = false;
      setMute(true);
    } else if (movie.muted === false) {
      movie.muted = true;
      setMute(false);
    }
  };

  const endedVideo = () => {
    const movieModal = movieTrailerModal.current;
    const muteModal = muteButtonModal.current;
    const replayModal = replayButtonModal.current;

    const endMovie = () => {
      muteModal.style.opacity = 0;
      muteModal.style.zIndex = -1;
      replayModal.style.opacity = 1;
      movieModal.style.opacity = 0;
    };

    movieModal.addEventListener("ended", endMovie);

    return () => {
      movieModal.removeEventListener("ended", endMovie);
    };
  };

  const replayTrailerModal = () => {
    const muteModal = muteButtonModal.current;
    const replayModal = replayButtonModal.current;
    const movieModal = movieTrailerModal.current;

    movieModal.play();
    movieModal.muted = true;
    movieModal.style.opacity = 1;
    muteModal.style.opacity = 1;
    muteModal.style.zIndex = 1;
    replayModal.style.opacity = 0;
    setMute(false);
  };

  const videoModal = () => {
    const bannerTrailer = movieTrailerBanner.current;
    const ModalTrailer = movieTrailerModal.current;
    const replay = replayButton.current;
    const mute = muteButton.current;
    const imageTitle = titleImage.current;
    const descriptionTitle = titleDescription.current;

    const handleTrailerModal = () => {
      setTrailerModal(false);
    };

    setTimeout(() => {
      ModalTrailer.addEventListener("ended", handleTrailerModal);
    }, 2000);

    if (bannerTrailer !== null) {
      const VideoTime = bannerTrailer.currentTime;
      ModalTrailer.currentTime = VideoTime;

      if (trailer === true) {
        setTrailer(false);
        bannerTrailer.pause(true);
        imageTitle.style.transform = "scale(1) translate(0px, 0rem)";
        imageTitle.style.transition = "transform 1.5s ease";
        descriptionTitle.style.transform = "translate(0, 0rem)";
        descriptionTitle.style.opacity = "1";
        descriptionTitle.style.transition =
          "transform 1.5s ease, opacity 2s ease";
      }
    }

    return () => {
      ModalTrailer.removeEventListener("ended", handleTrailerModal);
    };
  };

  useEffect(() => {
    // Function for ended event

    const handleTrailer = () => {
      if (trailer === true) {
        setTrailer(false);
        imageTitle.style.transform = "scale(1) translate(0px, 0rem)";
        imageTitle.style.transition = "transform 1.5s ease";
        mute.style.opacity = 0;
        replay.style.opacity = 1;
        descriptionTitle.style.transform = "translate(0, 0rem)";
        descriptionTitle.style.opacity = "1";
        descriptionTitle.style.transition =
          "transform 1.5s ease, opacity 2s ease";
      }
    };

    // Function for Replay event

    const replayTrailer = () => {
      setTrailer(true);
      movie.muted = true;
      setMute(false);
      movie.play();
      mute.style.opacity = 1;
      replay.style.opacity = 0;

      setTimeout(() => {
        imageTitle.style.transform = "scale(0.7) translate(0, 80%)";
        imageTitle.style.transition = "transform 2s ease";
        imageTitle.style.transformOrigin = "bottom left";
        descriptionTitle.style.transform = "translate(0, 90%)";
        descriptionTitle.style.opacity = "0";
        descriptionTitle.style.transition =
          "transform 2s ease, opacity 0.5s ease";
      }, 3500);
    };

    // Function for mute event

    const handleMute = () => {
      if (movie.muted === true) {
        movie.muted = false;
        setMute(true);
      } else if (movie.muted === false) {
        movie.muted = true;
        setMute(false);
      }
    };

    // Currents

    const movie = movieTrailerBanner.current;
    const replay = replayButton.current;
    const mute = muteButton.current;
    const imageTitle = titleImage.current;
    const descriptionTitle = titleDescription.current;

    // Function start

    setTimeout(() => {
      imageTitle.style.transform = "scale(0.7) translate(0, 80%)";
      imageTitle.style.transition = "transform 2s ease";
      imageTitle.style.transformOrigin = "bottom left";
      descriptionTitle.style.transform = "translate(0, 90%)";
      descriptionTitle.style.opacity = "0";
      descriptionTitle.style.transition =
        "transform 2s ease, opacity 0.5s ease";
    }, 3500);

    // Events

    movie.addEventListener("ended", handleTrailer);
    replay.addEventListener("click", replayTrailer);
    mute.addEventListener("click", handleMute);

    // RemoveEvents

    return () => {
      movie.removeEventListener("ended", handleTrailer);
      replay.removeEventListener("click", replayTrailer);
      mute.removeEventListener("click", handleMute);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BannerContainer>
      {/* Background start */}
      <BackgroundBannerModal ref={BgdModal}>
        <BannerImageContainer>
          <TrailerVideo
            ref={movieTrailerBanner}
            src="/theMummyTrailer.mp4"
            autoPlay={true}
            muted={true}
            controls={false}
            disablePictureInPicture={false}
            controlsList={"nodownload"}
          />
          <ImageMovieBanner
            src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
            width="100%"
            height="57vh"
            layout="responsive"
            alt="Cover"
          />
        </BannerImageContainer>
        {/* Background End */}
        <MovieInfoContainter>
          {/* ImageTitle, Description and Buttons Start */}

          <PrincipalInfoContainer>
            {/* Image title and description Start */}

            <TitleInfo>
              <TitleImageContainer ref={titleImage}>
                <Image
                  src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRV8Rfaw8Jh_5TYMAmVkGaSeswqIbYCQw4z4BOTzlcDlVVNsLC6UBKrljog6M8xuv8zrP2ByzY7cRxHWxLksZP-6ZyYGdXOJKPIxZhpVELUZ.png?r=076"
                  width="30%"
                  height="10rem"
                  layout="responsive"
                  alt="movieTitle"
                />
              </TitleImageContainer>
              <MovieReview ref={titleDescription}>
                A treasure-hunting soldier reawakens an ancient Egyptian
                princess who has waited for centuries to take revenge on a world
                that wronged her.
              </MovieReview>
            </TitleInfo>

            {/* Image title and description End*/}

            {/* Buttons Start */}

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
                    setModal(true), handleModal();
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
                <ActionButtonMute ref={muteButton}>
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

                <ActionButtonReplay ref={replayButton}>
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

            {/* Buttons end */}
          </PrincipalInfoContainer>

          {/* ImageTitle, Description and Buttons End */}

          {/* Info About Movie Start */}

          <MovieAbout>
            <FirstInfo>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V5H23C23.5523 5 24 5.44772 24 6V8C24 10.7614 21.7614 13 19 13H18.3264C17.3395 15.0774 15.3595 16.5916 13 16.9291V20H17V22H7V20H11V16.9291C8.64045 16.5916 6.6605 15.0774 5.67363 13H5C2.23858 13 0 10.7614 0 8V6C0 5.44772 0.447715 5 1 5H5V3ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10V6V4H7V6V10ZM5 7H2V8C2 9.65685 3.34315 11 5 11V10V7ZM19 10V7H22V8C22 9.65685 20.6569 11 19 11V10Z"
                  fill="currentColor"
                ></path>
              </svg>

              <p>HOLLYWOOD MOVIE</p>
            </FirstInfo>

            <SecondInfo>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 9V12H2.99798H2.975H2.95201H2.92903H2.90606H2.88309H2.86012H2.83716H2.8142H2.79124H2.76829H2.74535H2.72241H2.69947H2.67653H2.6536H2.63068H2.60776H2.58484H2.56192H2.53901H2.51611H2.49321H2.47031H2.44742H2.42453H2.40164H2.37876H2.35589H2.33302H2.31015H2.28728H2.26442H2.24157H2.21872H2.19587H2.17303H2.15019H2.12735H2.10452H2.0817H2.05888H2.03606H2.01324H1.99043H1.96763H1.94483H1.92203H1.89924H1.87645H1.85367H1.83089H1.80811H1.78534H1.76257H1.73981H1.71705H1.69429H1.67154H1.6488H1.62606H1.60332H1.58058H1.55786H1.53513H1.51241H1.48969H1.46698H1.44427H1.42157H1.39887H1.37618H1.35349H1.3308H1.30812H1.28544H1.26277H1.2401H1.21743H1.19477H1.17211H1.14946H1.12682H1.10417H1.08153H1.0589H1.03627H1.01364H0.99102H0.968402H0.945789H0.923181H0.900576H0.877976H0.855381H0.832789H0.810202H0.78762H0.765042H0.742468H0.719898H0.697333H0.674773H0.652216H0.629664H0.607117H0.584573H0.562035H0.5395H0.51697H0.494444H0.471923H0.449406H0.426894H0.404386H0.381882H0.359383H0.336889H0.314398H0.291912H0.269431H0.246954H0.224481H0.202013H0.179549H0.15709H0.134635H0.112185H0.089739H0.0672976H0.0448606H0.0224281H0V14H0.0224281H0.0448606H0.0672976H0.089739H0.112185H0.134635H0.15709H0.179549H0.202013H0.224481H0.246954H0.269431H0.291912H0.314398H0.336889H0.359383H0.381882H0.404386H0.426894H0.449406H0.471923H0.494444H0.51697H0.5395H0.562035H0.584573H0.607117H0.629664H0.652216H0.674773H0.697333H0.719898H0.742468H0.765042H0.78762H0.810202H0.832789H0.855381H0.877976H0.900576H0.923181H0.945789H0.968402H0.99102H1.01364H1.03627H1.0589H1.08153H1.10417H1.12682H1.14946H1.17211H1.19477H1.21743H1.2401H1.26277H1.28544H1.30812H1.3308H1.35349H1.37618H1.39887H1.42157H1.44427H1.46698H1.48969H1.51241H1.53513H1.55786H1.58058H1.60332H1.62606H1.6488H1.67154H1.69429H1.71705H1.73981H1.76257H1.78534H1.80811H1.83089H1.85367H1.87645H1.89924H1.92203H1.94483H1.96763H1.99043H2.01324H2.03606H2.05888H2.0817H2.10452H2.12735H2.15019H2.17303H2.19587H2.21872H2.24157H2.26442H2.28728H2.31015H2.33302H2.35589H2.37876H2.40164H2.42453H2.44742H2.47031H2.49321H2.51611H2.53901H2.56192H2.58484H2.60776H2.63068H2.6536H2.67653H2.69947H2.72241H2.74535H2.76829H2.79124H2.8142H2.83716H2.86012H2.88309H2.90606H2.92903H2.95201H2.975H2.99798H3.02098H3.04397H3.06697H3.08997H3.11298H3.13599H3.15901H3.18203H3.20505H3.22808H3.25111H3.27415H3.29719H3.32023H3.34328H3.36633H3.38939H3.41245H3.43551H3.45858H3.48165H3.50473H3.52781H3.55089H3.57398H3.59707H3.62017H3.64327H3.66637H3.68948H3.71259H3.73571H3.75883H3.78195H3.79082L9.50511 16.5L3.59918 19.0838L4.40082 20.9162L12 17.5915L19.5992 20.9162L20.4008 19.0838L14.4949 16.5L20.2092 14H20.218H20.2412H20.2643H20.2874H20.3105H20.3336H20.3567H20.3798H20.4029H20.426H20.4491H20.4722H20.4953H20.5183H20.5414H20.5645H20.5876H20.6106H20.6337H20.6567H20.6798H20.7028H20.7259H20.7489H20.7719H20.7949H20.818H20.841H20.864H20.887H20.91H20.933H20.956H20.979H21.002H21.025H21.048H21.071H21.0939H21.1169H21.1399H21.1628H21.1858H21.2088H21.2317H21.2547H21.2776H21.3005H21.3235H21.3464H21.3693H21.3922H21.4152H21.4381H21.461H21.4839H21.5068H21.5297H21.5526H21.5755H21.5984H21.6212H21.6441H21.667H21.6899H21.7127H21.7356H21.7584H21.7813H21.8041H21.827H21.8498H21.8726H21.8955H21.9183H21.9411H21.9639H21.9868H22.0096H22.0324H22.0552H22.078H22.1008H22.1236H22.1463H22.1691H22.1919H22.2147H22.2374H22.2602H22.283H22.3057H22.3285H22.3512H22.3739H22.3967H22.4194H22.4421H22.4649H22.4876H22.5103H22.533H22.5557H22.5784H22.6011H22.6238H22.6465H22.6692H22.6919H22.7146H22.7372H22.7599H22.7826H22.8052H22.8279H22.8505H22.8732H22.8958H22.9185H22.9411H22.9637H22.9864H23.009H23.0316H23.0542H23.0768H23.0994H23.122H23.1446H23.1672H23.1898H23.2124H23.235H23.2575H23.2801H23.3027H23.3252H23.3478H23.3703H23.3929H23.4154H23.438H23.4605H23.483H23.5056H23.5281H23.5506H23.5731H23.5956H23.6181H23.6406H23.6631H23.6856H23.7081H23.7306H23.753H23.7755H23.798H23.8205H23.8429H23.8654H23.8878H23.9103H23.9327H23.9551H23.9776H24V12H23.9776H23.9551H23.9327H23.9103H23.8878H23.8654H23.8429H23.8205H23.798H23.7755H23.753H23.7306H23.7081H23.6856H23.6631H23.6406H23.6181H23.5956H23.5731H23.5506H23.5281H23.5056H23.483H23.4605H23.438H23.4154H23.3929H23.3703H23.3478H23.3252H23.3027H23.2801H23.2575H23.235H23.2124H23.1898H23.1672H23.1446H23.122H23.0994H23.0768H23.0542H23.0316H23.009H22.9864H22.9637H22.9411H22.9185H22.8958H22.8732H22.8505H22.8279H22.8052H22.7826H22.7599H22.7372H22.7146H22.6919H22.6692H22.6465H22.6238H22.6011H22.5784H22.5557H22.533H22.5103H22.4876H22.4649H22.4421H22.4194H22.3967H22.3739H22.3512H22.3285H22.3057H22.283H22.2602H22.2374H22.2147H22.1919H22.1691H22.1463H22.1236H22.1008H22.078H22.0552H22.0324H22.0096H21.9868H21.9639H21.9411H21.9183H21.8955H21.8726H21.8498H21.827H21.8041H21.7813H21.7584H21.7356H21.7127H21.6899H21.667H21.6441H21.6212H21.5984H21.5755H21.5526H21.5297H21.5068H21.4839H21.461H21.4381H21.4152H21.3922H21.3693H21.3464H21.3235H21.3005H21.2776H21.2547H21.2317H21.2088H21.1858H21.1628H21.1399H21.1169H21.0939H21.071H21.048H21.025H21.002H21V9V5V3H19V4H5V3H3V5V9ZM19 12V10H5V12H5.01313H5.03646H5.0598H5.08314H5.10648H5.12983H5.15319H5.17654H5.1999H5.22327H5.24663H5.27001H5.29338H5.31676H5.34014H5.36353H5.38692H5.41032H5.43371H5.45711H5.48052H5.50393H5.52734H5.55076H5.57418H5.5976H5.62103H5.64446H5.6679H5.69134H5.71478H5.73823H5.76168H5.78513H5.80859H5.83205H5.85552H5.87898H5.90246H5.92593H5.94941H5.9729H5.99638H6.01988H6.04337H6.06687H6.09037H6.11387H6.13738H6.1609H6.18441H6.20793H6.23146H6.25499H6.27852H6.30205H6.32559H6.34913H6.37268H6.39623H6.41978H6.44334H6.4669H6.49046H6.51403H6.5376H6.56117H6.58475H6.60833H6.63192H6.65551H6.6791H6.7027H6.7263H6.7499H6.77351H6.79712H6.82073H6.84435H6.86797H6.8916H6.91522H6.93886H6.96249H6.98613H7.00977H7.03342H7.05707H7.08072H7.10438H7.12804H7.1517H7.17537H7.19904H7.22272H7.24639H7.27008H7.29376H7.31745H7.34114H7.36484H7.38854H7.41224H7.43594H7.45965H7.48337H7.50708H7.5308H7.55453H7.57825H7.60198H7.62572H7.64945H7.6732H7.69694H7.72069H7.74444H7.76819H7.79195H7.81571H7.83948H7.86325H7.88702H7.91079H7.93457H7.95835H7.98214H8.00593H8.02972H8.05352H8.07732H8.10112H8.12493H8.14874H8.17255H8.19636H8.22018H8.24401H8.26783H8.29166H8.3155H8.33933H8.36317H8.38702H8.41086H8.43471H8.45857H8.48242H8.50628H8.53015H8.55401H8.57788H8.60176H8.62564H8.64952H8.6734H8.69729H8.72118H8.74507H8.76897H8.79287H8.81677H8.84068H8.86459H8.8885H8.91242H8.93634H8.96026H8.98419H9.00812H9.03205H9.05599H9.07993H9.10387H9.12782H9.15177H9.17572H9.19968H9.22364H9.2476H9.27157H9.29554H9.31951H9.34348H9.36746H9.39145H9.41543H9.43942H9.46341H9.48741H9.5114H9.53541H9.55941H9.58342H9.60743H9.63145H9.65546H9.67949H9.70351H9.72754H9.75157H9.7756H9.79964H9.82368H9.84772H9.87177H9.89582H9.91987H9.94393H9.96799H9.99205H10.0161H10.0402H10.0643H10.0883H10.1124H10.1365H10.1606H10.1847H10.2088H10.2329H10.2569H10.281H10.3052H10.3293H10.3534H10.3775H10.4016H10.4257H10.4498H10.474H10.4981H10.5222H10.5464H10.5705H10.5946H10.6188H10.6429H10.6671H10.6912H10.7154H10.7395H10.7637H10.7879H10.812H10.8362H10.8604H10.8846H10.9087H10.9329H10.9571H10.9813H11.0055H11.0297H11.0539H11.0781H11.1023H11.1265H11.1507H11.1749H11.1992H11.2234H11.2476H11.2718H11.2961H11.3203H11.3445H11.3688H11.393H11.4172H11.4415H11.4657H11.49H11.5143H11.5385H11.5628H11.587H11.6113H11.6356H11.6599H11.6841H11.7084H11.7327H11.757H11.7813H11.8056H11.8299H11.8542H11.8785H11.9028H11.9271H11.9514H11.9757H12H12.0243H12.0486H12.0729H12.0972H12.1215H12.1458H12.1701H12.1944H12.2187H12.243H12.2673H12.2916H12.3159H12.3401H12.3644H12.3887H12.413H12.4372H12.4615H12.4857H12.51H12.5343H12.5585H12.5828H12.607H12.6312H12.6555H12.6797H12.7039H12.7282H12.7524H12.7766H12.8008H12.8251H12.8493H12.8735H12.8977H12.9219H12.9461H12.9703H12.9945H13.0187H13.0429H13.0671H13.0913H13.1154H13.1396H13.1638H13.188H13.2121H13.2363H13.2605H13.2846H13.3088H13.3329H13.3571H13.3812H13.4054H13.4295H13.4536H13.4778H13.5019H13.526H13.5502H13.5743H13.5984H13.6225H13.6466H13.6707H13.6948H13.719H13.7431H13.7672H13.7912H13.8153H13.8394H13.8635H13.8876H13.9117H13.9357H13.9598H13.9839H14.0079H14.032H14.0561H14.0801H14.1042H14.1282H14.1523H14.1763H14.2004H14.2244H14.2484H14.2725H14.2965H14.3205H14.3445H14.3686H14.3926H14.4166H14.4406H14.4646H14.4886H14.5126H14.5366H14.5606H14.5846H14.6086H14.6325H14.6565H14.6805H14.7045H14.7284H14.7524H14.7764H14.8003H14.8243H14.8482H14.8722H14.8961H14.9201H14.944H14.9679H14.9919H15.0158H15.0397H15.0637H15.0876H15.1115H15.1354H15.1593H15.1832H15.2071H15.231H15.2549H15.2788H15.3027H15.3266H15.3505H15.3744H15.3982H15.4221H15.446H15.4699H15.4937H15.5176H15.5414H15.5653H15.5891H15.613H15.6368H15.6607H15.6845H15.7083H15.7322H15.756H15.7798H15.8036H15.8275H15.8513H15.8751H15.8989H15.9227H15.9465H15.9703H15.9941H16.0179H16.0416H16.0654H16.0892H16.113H16.1368H16.1605H16.1843H16.208H16.2318H16.2556H16.2793H16.3031H16.3268H16.3505H16.3743H16.398H16.4217H16.4455H16.4692H16.4929H16.5166H16.5403H16.5641H16.5878H16.6115H16.6352H16.6589H16.6826H16.7062H16.7299H16.7536H16.7773H16.801H16.8246H16.8483H16.872H16.8956H16.9193H16.9429H16.9666H16.9902H17.0139H17.0375H17.0611H17.0848H17.1084H17.132H17.1557H17.1793H17.2029H17.2265H17.2501H17.2737H17.2973H17.3209H17.3445H17.3681H17.3917H17.4152H17.4388H17.4624H17.486H17.5095H17.5331H17.5567H17.5802H17.6038H17.6273H17.6509H17.6744H17.6979H17.7215H17.745H17.7685H17.7921H17.8156H17.8391H17.8626H17.8861H17.9096H17.9331H17.9566H17.9801H18.0036H18.0271H18.0506H18.0741H18.0975H18.121H18.1445H18.1679H18.1914H18.2149H18.2383H18.2618H18.2852H18.3087H18.3321H18.3555H18.379H18.4024H18.4258H18.4492H18.4727H18.4961H18.5195H18.5429H18.5663H18.5897H18.6131H18.6365H18.6599H18.6832H18.7066H18.73H18.7534H18.7767H18.8001H18.8235H18.8468H18.8702H18.8935H18.9169H18.9402H18.9635H18.9869H19ZM15.2194 14H15.2071H15.1832H15.1593H15.1354H15.1115H15.0876H15.0637H15.0397H15.0158H14.9919H14.9679H14.944H14.9201H14.8961H14.8722H14.8482H14.8243H14.8003H14.7764H14.7524H14.7284H14.7045H14.6805H14.6565H14.6325H14.6086H14.5846H14.5606H14.5366H14.5126H14.4886H14.4646H14.4406H14.4166H14.3926H14.3686H14.3445H14.3205H14.2965H14.2725H14.2484H14.2244H14.2004H14.1763H14.1523H14.1282H14.1042H14.0801H14.0561H14.032H14.0079H13.9839H13.9598H13.9357H13.9117H13.8876H13.8635H13.8394H13.8153H13.7912H13.7672H13.7431H13.719H13.6948H13.6707H13.6466H13.6225H13.5984H13.5743H13.5502H13.526H13.5019H13.4778H13.4536H13.4295H13.4054H13.3812H13.3571H13.3329H13.3088H13.2846H13.2605H13.2363H13.2121H13.188H13.1638H13.1396H13.1154H13.0913H13.0671H13.0429H13.0187H12.9945H12.9703H12.9461H12.9219H12.8977H12.8735H12.8493H12.8251H12.8008H12.7766H12.7524H12.7282H12.7039H12.6797H12.6555H12.6312H12.607H12.5828H12.5585H12.5343H12.51H12.4857H12.4615H12.4372H12.413H12.3887H12.3644H12.3401H12.3159H12.2916H12.2673H12.243H12.2187H12.1944H12.1701H12.1458H12.1215H12.0972H12.0729H12.0486H12.0243H12H11.9757H11.9514H11.9271H11.9028H11.8785H11.8542H11.8299H11.8056H11.7813H11.757H11.7327H11.7084H11.6841H11.6599H11.6356H11.6113H11.587H11.5628H11.5385H11.5143H11.49H11.4657H11.4415H11.4172H11.393H11.3688H11.3445H11.3203H11.2961H11.2718H11.2476H11.2234H11.1992H11.1749H11.1507H11.1265H11.1023H11.0781H11.0539H11.0297H11.0055H10.9813H10.9571H10.9329H10.9087H10.8846H10.8604H10.8362H10.812H10.7879H10.7637H10.7395H10.7154H10.6912H10.6671H10.6429H10.6188H10.5946H10.5705H10.5464H10.5222H10.4981H10.474H10.4498H10.4257H10.4016H10.3775H10.3534H10.3293H10.3052H10.281H10.2569H10.2329H10.2088H10.1847H10.1606H10.1365H10.1124H10.0883H10.0643H10.0402H10.0161H9.99205H9.96799H9.94393H9.91987H9.89582H9.87177H9.84772H9.82368H9.79964H9.7756H9.75157H9.72754H9.70351H9.67949H9.65546H9.63145H9.60743H9.58342H9.55941H9.53541H9.5114H9.48741H9.46341H9.43942H9.41543H9.39145H9.36746H9.34348H9.31951H9.29554H9.27157H9.2476H9.22364H9.19968H9.17572H9.15177H9.12782H9.10387H9.07993H9.05599H9.03205H9.00812H8.98419H8.96026H8.93634H8.91242H8.8885H8.86459H8.84068H8.81677H8.79287H8.78061L12 15.4085L15.2194 14ZM19 6V8H5V6H19Z"
                  fill="currentColor"
                ></path>
              </svg>

              <p>TOM CRUISE · ANNABELLE WALLIS · SOFIA BOUTELLA</p>
            </SecondInfo>

            <ThirdInfo>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 20C0 21.1046 0.895431 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2C0.89543 2 0 2.89543 0 4V20ZM2 20L2 4L22 4V20H2ZM16 12L8 8V16L16 12Z"
                  fill="currentColor"
                ></path>
              </svg>

              <p>{`WE THINK YOU'LL LIKE THIS SUPERNATURAL ADVENTURE MOVIE`}</p>
            </ThirdInfo>
          </MovieAbout>
          {/* Info About Movie End */}
        </MovieInfoContainter>
      </BackgroundBannerModal>

      {modal && (
        <>
          <BackgroundModal></BackgroundModal>
          <ModalWrapper>
            <ModalContainer>
              <CloseModal
                onClick={() => {
                  setModal(false), handleModal();
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
                  src="/theMummyTrailer.mp4"
                  onPlaying={() => endedVideo()}
                  autoPlay={true}
                  muted={true}
                  controls={false}
                  disablePictureInPicture={false}
                  controlsList={"nodownload"}
                  onPlay={() => videoModal()}
                />
                <ImageModal
                  src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWDlosw-gklgL9NYjjjBwqbdyr7RA88QfoiXe2fpKjoWR69TLcV59TOzCbQkmQ_ZD0SZkVdyZavwI8eqFsM-_Vly4Ru2zu9W880f.jpg?r=4a9"
                  width="100%"
                  height="55vh"
                  layout="responsive"
                  alt="Cover"
                />
                <ShadowModal></ShadowModal>
              </ModalImageContainer>

              <ImageAndButtonsContainer>
                <TitleModalContainer>
                  <Image
                    src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRV8Rfaw8Jh_5TYMAmVkGaSeswqIbYCQw4z4BOTzlcDlVVNsLC6UBKrljog6M8xuv8zrP2ByzY7cRxHWxLksZP-6ZyYGdXOJKPIxZhpVELUZ.png?r=076"
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
                      <p>98% Match </p>
                      <div>
                        <div>
                          <span>2017 </span>
                          <span>16+</span>
                        </div>
                        <div>
                          <span>1h 50m</span>
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

                    <p>
                      A treasure-hunting soldier reawakens an ancient Egyptian
                      princess who has waited for centuries to take revenge on a
                      world that wronged her.
                    </p>
                  </InfoLeft>
                  <InfoRight>
                    <div>
                      <span>Cast:</span>
                      <span>Tom Cruise,</span> <span>Anabelle Walls,</span>
                      <span> Sofia Boutella,</span> <span>more</span>
                    </div>

                    <div>
                      <span>Genres:</span>
                      <span>Action & Adventure, </span>
                      <span>Monster Movies</span>
                    </div>

                    <div>
                      <span>The Movie is:</span>
                      <span>Suspenseful, </span>
                      <span>Exciting</span>
                    </div>
                  </InfoRight>
                </DescriptionModal>
                <MoreMoviesContainer>
                  <p>More Like This</p>
                  <GridMovies ref={MoviesGrid}>
                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>

                    <GridCard>
                      <Duration>1h 50m</Duration>
                      <Image
                        src="https://occ-0-5391-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABR1fPJMkxF6boR42dgDVNRsm1stZjoI9ypDduoI_Wn9WquRlzwwG3Vb74kenWtd-FdFXqmpi6SCl1CWO6-QmCYHtDNKqRMtgqv7T.jpg?r=960"
                        width="100%"
                        height="55vh"
                        layout="responsive"
                        alt="Cover"
                        style={{ borderRadius: "4px 4px 0px 0px" }}
                      />
                      <GridCardDescription>
                        <CardTitle>
                          <div>
                            <span>16+</span>
                            <span>2017</span>
                          </div>
                          <div>
                            <ActionButton>
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
                            </ActionButton>
                          </div>
                        </CardTitle>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Obcaecati amet quam laborum! Quae assumenda,
                          explicabo amet aliquid ea placeat corrupti, doloremque
                          porro dolorum hic doloribus repellendus aperiam
                          similique laborum enim?
                        </p>
                      </GridCardDescription>
                    </GridCard>
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
                    About <strong>The Mummy</strong>
                  </h3>
                  <p>
                    <span>Director: </span>
                    <span>Alex Kurtzman</span>
                  </p>
                  <p>
                    <span>Cast: </span>
                    <span>Tom Cruise</span>
                  </p>
                  <p>
                    <span>Writer: </span>
                    <span>Jon Spalhts</span>
                  </p>
                  <p>
                    <span>Genres: </span>
                    <span>Action & Adventure</span>
                  </p>
                  <p>
                    <span>This movie is: </span>
                    <span>Suspenseful</span>
                  </p>
                  <p>
                    <span>Matury Raiting: </span>
                    <span>16+</span>
                    <span>Violence</span>
                  </p>
                </AboutWrapper>
              </InformationModalContainer>
            </ModalContainer>
          </ModalWrapper>
        </>
      )}
    </BannerContainer>
  );
}
