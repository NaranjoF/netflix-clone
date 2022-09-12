import Image from "next/image";
import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  height: max-content;
  width: 100%;
  height: 100vh;
`;

export const ImageMovieBanner = styled(Image)``;

export const ImageBannerContainer = styled.div`
  opacity: 0;
`;

export const BackgroundBannerModal = styled.div``;

export const BannerImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
`;

export const MovieInfoContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 2.7rem;
  position: absolute;
  top: 0;
  width: 38%;
  margin-top: 8rem;

  @media screen and (max-width: 1300px) {
    margin-top: 8rem;
    margin-left: 2.3rem;
  }

  @media screen and (max-width: 999px) {
    margin-top: 5rem;
    margin-left: 1.9rem;
  }

  @media screen and (max-width: 885px) {
    margin-top: 3rem;
    margin-left: 1.5rem;
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    margin-top: 1.6rem;
  }

  @media screen and (min-width: 295px) and (max-width: 390px) and (min-height: 760px) and (max-height: 854px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 910px) and (max-width: 926px) and (min-height: 400px) and (max-height: 428px) {
    margin-top: 3.5rem;
  }

  @media screen and (min-width: 400px) and (max-width: 415px) and (min-height: 880px) and (max-height: 920px) {
    margin-top: 2.5rem;
  }

  @media screen and (min-width: 700px) and (max-width: 770px) and (min-height: 300px) and (max-height: 370px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 1000px) and (max-width: 1080px) and (min-height: 760px) and (max-height: 810px) {
    margin-top: 5rem;
  }

  @media screen and (min-width: 1100px) and (max-width: 1180px) and (min-height: 800px) and (max-height: 820px) {
    margin-top: 5rem;
  }

  @media screen and (min-width: 880px) and (max-width: 896px) and (min-height: 400px) and (max-height: 415px) {
    margin-top: 3rem;
  }

  @media screen and (min-width: 370px) and (max-width: 375px) and (min-height: 650px) and (max-height: 670px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 350px) and (max-width: 385px) and (min-height: 560px) and (max-height: 660px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 400px) and (max-width: 420px) and (min-height: 700px) and (max-height: 740px) {
    margin-top: 2rem;
  }
`;

export const MovieReview = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.2vw;
  cursor: default;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 800px) {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }

  @media screen and (min-width: 280px) and (max-width: 360px) and (min-height: 650px) and (max-height: 800px) {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }

  @media screen and (min-width: 300px) and (max-width: 390px) and (min-height: 800px) and (max-height: 850px) {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }
`;

export const Buttons = styled.div`
  z-index: 1;

  button:first-child {
    margin-right: 0.5rem;
    background-color: white;
    color: black;
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }

  button:last-child {
    background-color: rgba(109, 109, 110, 0.7);
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }

  button {
    font-weight: 500;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.55rem 1.55rem 0.55rem 1.3rem;
  }

  @media screen and (max-width: 900px) {
    button {
      padding: 0.4rem 1.3rem 0.4rem 1rem;
    }
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    button {
      padding: 0.3rem 0.5rem 0.3rem 0.4rem;
    }

    button:first-child {
      margin-right: 0.3rem;
    }
  }

  @media screen and (min-width: 295px) and (max-width: 360px) and (min-height: 760px) and (max-height: 840px) {
    button {
      padding: 0.3rem 1rem 0.3rem 0.8rem;
    }

    button:first-child {
      margin-right: 0.3rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 390px) and (min-height: 800px) and (max-height: 844px) {
    button {
      padding: 0.3rem 0.65rem 0.3rem 0.6rem;
    }

    button:first-child {
      margin-right: 0.3rem;
    }
  }

  @media screen and (min-width: 650px) and (max-width: 760px) and (min-height: 275px) and (max-height: 360px) {
    button {
      padding: 0.5rem 1.9rem 0.5rem 1.7rem;
    }
  }

  @media screen and (min-width: 660px) and (max-width: 670px) and (min-height: 360px) and (max-height: 375px) {
    button {
      padding: 0.5rem 1.95rem 0.5rem 1.85rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 415px) and (min-height: 880px) and (max-height: 915px) {
    button {
      padding: 0.35rem 0.9rem 0.35rem 0.7rem;
    }

    button:first-child {
      margin-right: 0.4rem;
    }
  }

  @media screen and (min-width: 900px) and (max-width: 920px) and (min-height: 400px) and (max-height: 415px) {
    button {
      padding: 0.45rem 2.75rem 0.45rem 2.55rem;
    }
  }

  @media screen and (min-width: 920px) and (max-width: 930px) and (min-height: 420px) and (max-height: 430px) {
    button {
      padding: 0.45rem 2.85rem 0.45rem 2.65rem;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 385px) and (min-height: 850px) and (max-height: 855px) {
    button {
      padding: 0.3rem 0.7rem 0.3rem 0.5rem;
    }
  }

  @media screen and (min-width: 840px) and (max-width: 883px) and (min-height: 380px) and (max-height: 412px) {
    button {
      padding: 0.45rem 2.55rem 0.45rem 2.35rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 810px) and (min-height: 350px) and (max-height: 360px) {
    button {
      padding: 0.45rem 2.5rem 0.45rem 2.3rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 810px) and (min-height: 1000px) and (max-height: 1080px) {
    button {
      padding: 0.45rem 2.05rem 0.45rem 1.85rem;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1080px) and (min-height: 800px) and (max-height: 810px) {
    button {
      padding: 0.45rem 3.55rem 0.45rem 3.35rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 820px) and (min-height: 1000px) and (max-height: 1180px) {
    button {
      padding: 0.45rem 2.1rem 0.45rem 2rem;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1180px) and (min-height: 800px) and (max-height: 820px) {
    button {
      padding: 0.45rem 4.2rem 0.45rem 4rem;
    }
  }

  @media screen and (min-width: 750px) and (max-width: 770px) and (min-height: 1000px) and (max-height: 1030px) {
    button {
      padding: 0.45rem 1.85rem 0.45rem 1.65rem;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1024px) and (min-height: 750px) and (max-height: 770px) {
    button {
      padding: 0.45rem 3.35rem 0.45rem 3.15rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 815px) and (min-height: 350px) and (max-height: 380px) {
    button {
      padding: 0.45rem 2.35rem 0.45rem 2.15rem;
    }
  }

  @media screen and (min-width: 880px) and (max-width: 896px) and (min-height: 400px) and (max-height: 415px) {
    button {
      padding: 0.45rem 2.75rem 0.45rem 2.55rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 900px) and (max-height: 930px) {
    button {
      padding: 0.4rem 0.7rem 0.4rem 0.5rem;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 375px) and (min-height: 650px) and (max-height: 670px) {
    button {
      padding: 0.4rem 0.65rem 0.4rem 0.45rem;
    }
  }

  @media screen and (min-width: 790px) and (max-width: 800px) and (min-height: 1150px) and (max-height: 1280px) {
    button {
      padding: 0.4rem 2rem 0.4rem 1.8rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 385px) and (min-height: 560px) and (max-height: 660px) {
    button {
      padding: 0.4rem 0.9rem 0.4rem 0.7rem;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 645px) and (min-height: 370px) and (max-height: 390px) {
    button {
      padding: 0.45rem 1.85rem 0.45rem 1.65rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 420px) and (min-height: 700px) and (max-height: 740px) {
    button {
      padding: 0.45rem 0.9rem 0.45rem 0.7rem;
    }
  }
`;

export const MovieControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97vw;
`;

export const PlayButton = styled.button``;

export const InfoButton = styled.button`
  color: white;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }

  @media screen and (max-width: 700px) {
    svg {
      width: 1rem;
      height: 1rem;
    }

    span {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    span {
      font-size: 0.4rem;
    }

    svg {
      width: 0.5rem;
      height: 0.5rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 390px) and (min-height: 800px) and (max-height: 844px) {
    span {
      font-size: 0.6rem;
    }

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 295px) and (max-width: 370px) and (min-height: 760px) and (max-height: 830px) {
    span {
      font-size: 0.4rem;
    }

    svg {
      width: 0.5rem;
      height: 0.5rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 415px) and (min-height: 880px) and (max-height: 915px) {
    span {
      font-size: 0.6rem;
    }

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 840px) and (max-width: 920px) and (min-height: 384px) and (max-height: 415px) {
    span {
      font-size: 1rem;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  @media screen and (min-width: 750px) and (max-width: 760px) and (min-height: 300px) and (max-height: 360px) {
    span {
      font-size: 1rem;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 385px) and (min-height: 850px) and (max-height: 855px) {
    span {
      font-size: 0.6rem;
    }

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 810px) and (min-height: 350px) and (max-height: 360px) {
    span {
      font-size: 0.9rem;
    }

    svg {
      width: 0.9rem;
      height: 0.9rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 815px) and (min-height: 350px) and (max-height: 380px) {
    span {
      font-size: 1rem;
    }

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 900px) and (max-height: 930px) {
    span {
      font-size: 0.7rem;
    }

    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  @media screen and (min-width: 920px) and (max-width: 926px) and (min-height: 420px) and (max-height: 428px) {
    span {
      font-size: 1rem;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 375px) and (min-height: 650px) and (max-height: 670px) {
    span {
      font-size: 0.6rem;
    }

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 385px) and (min-height: 560px) and (max-height: 660px) {
    span {
      font-size: 0.5rem;
    }

    svg {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 420px) and (min-height: 700px) and (max-height: 740px) {
    span {
      font-size: 0.6rem;
    }

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
`;

export const ReplayAndPegi = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;

  button {
    margin-right: 1rem;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 100%;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:focus::before {
    border-radius: 100%;
    box-sizing: content-box;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    padding: 2px;
    position: absolute;
    left: -4px;
    top: -4px;
    border: 2px solid white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ActionContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: white;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  @media screen and (max-width: 700px) {
    padding: 0.3rem;

    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    padding: 0.2rem;

    svg {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  @media screen and (min-width: 295px) and (max-width: 370px) and (min-height: 760px) and (max-height: 800px) {
    padding: 0.2rem;

    svg {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 390px) and (min-height: 840px) and (max-width: 855px) {
    padding: 0.3rem;

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    padding: 0.3rem;

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
`;

export const Pegi = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.6);
  border: 3px #dcdcdc;
  width: 5rem;
  height: 2rem;
  border-left-style: solid;
  box-sizing: border-box;
  cursor: default;

  p {
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 700px) {
    height: 1.5rem;

    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    height: 1.1rem;
    width: 3.5rem;

    p {
      font-size: 0.55rem;
    }
  }

  @media screen and (min-width: 295px) and (max-width: 390px) and (min-height: 760px) and (max-height: 854px) {
    height: 1.1rem;
    width: 3rem;

    p {
      font-size: 0.55rem;
    }
  }
`;

export const MovieAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  position: absolute;
  cursor: default;
  width: 100%;
  left: 72%;
  top: 110%;
  z-index: 2;

  @media screen and (max-width: 600px) {
    left: 70%;
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    left: 60%;
  }

  @media screen and (min-width: 370px) and (max-width: 385px) and (min-height: 630px) and (max-height: 640px) {
    left: 68%;
  }
`;

export const FirstInfo = styled.div`
  grid-area: 1/1/2/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  width: 17.8rem;

  svg {
    margin-bottom: 1rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  p {
    font-weight: bold;
    font-size: 1vw;
  }

  @media screen and (max-width: 1000px) {
    width: 12rem;

    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  @media screen and (max-width: 900px) {
    width: 10rem;

    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  @media screen and (max-width: 700px) {
    width: 8rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  @media screen and (max-width: 415px) and (max-height: 920px) {
    width: 5rem;

    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    width: 4rem;

    svg {
      width: 0.5rem;
      height: 0.5rem;
    }
  }

  @media screen and (min-width: 295px) and (max-width: 370px) and (min-height: 760px) and (max-height: 770px) {
    width: 5rem;

    svg {
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    svg {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 900px) and (max-height: 930px) {
    width: 5rem;

    svg {
      margin-bottom: 0.5rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 375px) and (min-height: 650px) and (max-height: 670px) {
    width: 4rem;

    svg {
      margin-bottom: 0.5rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 370px) and (max-width: 415px) and (min-height: 800px) and (max-height: 899px) {
    width: 4rem;

    svg {
      margin-bottom: 0.5rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 385px) and (min-height: 560px) and (max-height: 660px) {
    width: 4rem;

    svg {
      margin-bottom: 0.5rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1030px) and (min-height: 1250px) and (max-height: 1370px) {
    width: 13rem;

    svg {
      margin-bottom: 0.5rem;
      width: 2rem;
      height: 2rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 420px) and (min-height: 700px) and (max-height: 740px) {
    width: 5rem;

    svg {
      margin-bottom: 0.5rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }
`;

export const SecondInfo = styled(FirstInfo)`
  grid-area: 1/2/2/3;
  padding: 0 1vw;

  @media screen and (max-width: 290px) and (max-height: 660px) {
    padding: 0 2vw;
  }
`;

export const ThirdInfo = styled(FirstInfo)`
  grid-area: 1/3/2/4;
  border: 0;

  @media screen and (max-width: 290px) and (max-height: 660px) {
    padding: 0 2vw;
  }
`;

export const PrincipalInfoContainer = styled.div`
  @media screen and (min-width: 880px) and (max-width: 920px) and (min-height: 400px) and (max-height: 415px) {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 650px) and (max-width: 655px) and (min-height: 275px) and (max-height: 285px) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 290px) and (max-height: 660px) {
    margin-bottom: 0.3rem;
  }

  @media screen and (min-width: 400px) and (max-width: 415px) and (min-height: 880px) and (max-height: 920px) {
    margin-bottom: 0.3rem;
  }

  @media screen and (min-width: 350px) and (max-width: 390px) and (min-height: 700px) and (max-height: 854px) {
    margin-bottom: 0.2rem;
  }

  @media screen and (min-width: 700px) and (max-width: 770px) and (min-height: 300px) and (max-height: 370px) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 800px) and (max-width: 810px) and (min-height: 1000px) and (max-height: 1080px) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 1000px) and (max-width: 1080px) and (min-height: 800px) and (max-height: 810px) {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 1000px) and (max-width: 1024px) and (min-height: 700px) and (max-height: 770px) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 800px) and (max-width: 820px) and (min-height: 1000px) and (max-height: 1280px) {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 1100px) and (max-width: 1180px) and (min-height: 800px) and (max-height: 820px) {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 750px) and (max-width: 770px) and (min-height: 1000px) and (max-height: 1030px) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 800px) and (max-width: 815px) and (min-height: 350px) and (max-height: 380px) {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 840px) and (max-width: 845px) and (min-height: 380px) and (max-height: 390px) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 900px) and (max-height: 930px) {
    margin-bottom: 0.3rem;
  }

  @media screen and (min-width: 920px) and (max-width: 926px) and (min-height: 420px) and (max-height: 428px) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 370px) and (max-width: 375px) and (min-height: 650px) and (max-height: 670px) {
    margin-bottom: 0.2rem;
  }

  @media screen and (min-width: 660px) and (max-width: 670px) and (min-height: 360px) and (max-height: 380px) {
    margin-bottom: 0.7rem;
  }

  @media screen and (min-width: 370px) and (max-width: 385px) and (min-height: 630px) and (max-height: 640px) {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 600px) and (max-width: 645px) and (min-height: 370px) and (max-height: 390px) {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 400px) and (max-width: 420px) and (min-height: 700px) and (max-height: 740px) {
    margin-bottom: 0.3rem;
  }
`;

export const TrailerVideo = styled.video`
  width: 101%;
  position: absolute;
  z-index: 1;
`;

export const TitleInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TitleImageContainer = styled.div`
  z-index: 2;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ModalContainer = styled.div`
  z-index: 10;
  top: 2em;
  background-color: #181818;
  overflow: hidden;
  height: max-content;
  width: 850px;
  box-sizing: border-box;
  border-radius: 6px;
  position: relative;

  @media screen and (max-width: 900px) {
    margin-right: 2rem;
    margin-left: 2rem;
  }

  @media screen and (max-width: 630px) {
    margin-right: 0.2rem;
    margin-left: 0.2rem;
  }
`;

export const ModalImageContainer = styled.div`
  width: 100%;
  height: auto;
  z-index: -1;
  position: relative;
  overflow: hidden;
`;

export const ImageModal = styled(Image)`
  position: absolute;
  z-index: -1;
  border-radius: 6px 6px 0px 0px;
`;

export const InformationModalContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0 2rem 0 2rem;
`;

export const TitleModalContainer = styled.div`
  height: 10rem;
  width: 22rem;
  margin-top: 13rem;
  top: 0;

  @media screen and (max-width: 870px) {
    margin-top: 10rem;
  }

  @media screen and (max-width: 800px) {
    margin-top: 8rem;
  }

  @media screen and (max-width: 720px) {
    margin-top: 6rem;
  }

  @media screen and (max-width: 640px) {
    height: 7rem;
    width: 15rem;
  }

  @media screen and (max-width: 500px) {
    margin-top: 4rem;
  }

  @media screen and (min-width: 400px) and (max-width: 415px) and (min-height: 880px) and (max-height: 915px) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 320px) and (max-width: 385px) and (min-height: 700px) and (max-height: 855px) {
    margin-top: 3rem;
    height: 4.5rem;
    width: 10rem;
  }

  @media screen and (min-width: 388px) and (max-width: 390px) and (min-height: 840px) and (max-height: 845px) {
    margin-top: 4rem;
    height: 4.5rem;
    width: 10rem;
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 880px) and (max-height: 930px) {
    margin-top: 5rem;
    height: 4.5rem;
    width: 10rem;
  }

  @media screen and (min-width: 300px) and (max-width: 380px) and (min-height: 600px) and (max-height: 670px) {
    margin-top: 3rem;
    height: 4.5rem;
    width: 10rem;
  }

  /* J7 */

  @media screen and (min-width: 350px) and (max-width: 370px) and (min-height: 560px) and (max-height: 620px) {
    margin-top: 3rem;
    height: 4.5rem;
    width: 10rem;
  }

  /* End J7 */

  @media screen and (min-width: 375px) and (max-width: 385px) and (min-height: 625px) and (max-height: 640px) {
    margin-top: 4rem;
    height: 4.5rem;
    width: 10rem;
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    margin-top: 3rem;
    height: 3rem;
    width: 7rem;
  }
`;

export const ImageTitle = styled.div`
  margin: 0;
`;

export const ButtonsModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div:nth-child(2) {
    button {
      margin: 0;
    }
  }
`;

export const PlayButtonModal = styled.button`
  width: 7rem;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    transition: background-color 0.2s ease-in-out;
  }

  @media screen and (min-width: 320px) and (max-width: 390px) and (min-height: 700px) and (max-height: 855px) {
    width: 5rem;
    height: 2rem;
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 880px) and (max-height: 930px) {
    width: 5rem;
    height: 2rem;
  }

  @media screen and (min-width: 300px) and (max-width: 380px) and (min-height: 600px) and (max-height: 670px) {
    width: 5rem;
    height: 2rem;
  }

  @media screen and (min-width: 350px) and (max-width: 385px) and (min-height: 560px) and (max-height: 640px) {
    width: 5rem;
    height: 2rem;
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    width: 4rem;
    height: 1.5rem;
  }
`;

export const ContentButtonModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1rem;
    font-weight: bold;
    color: black;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 320px) and (max-width: 390px) and (min-height: 700px) and (max-height: 855px) {
    span {
      font-size: 0.8rem;
      font-weight: bold;
      color: black;
    }

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 880px) and (max-height: 930px) {
    span {
      font-size: 0.8rem;
      font-weight: bold;
      color: black;
    }

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 380px) and (min-height: 600px) and (max-height: 670px) {
    span {
      font-size: 0.8rem;
      font-weight: bold;
      color: black;
    }

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 385px) and (min-height: 560px) and (max-height: 640px) {
    span {
      font-size: 0.8rem;
      font-weight: bold;
      color: black;
    }

    svg {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    span {
      font-size: 0.7rem;
      font-weight: bold;
      color: black;
    }

    svg {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.5rem;
    }
  }
`;

export const PlayAndActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  button:nth-child(2) {
    margin-left: 0.5rem;
  }

  button:nth-child(3) {
    margin-left: 0.5rem;
  }
`;

export const DescriptionModal = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
`;

export const InfoLeft = styled.div`
  margin-right: 2rem;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    margin-top: 2rem;
    font-size: 0.85rem;
    line-height: 23px;
    text-align: left;
  }

  @media screen and (min-width: 320px) and (max-width: 360px) and (min-height: 700px) and (max-height: 800px) {
    margin-right: 1rem;
  }

  @media screen and (min-width: 350px) and (max-width: 370px) and (min-height: 560px) and (max-height: 620px) {
    margin-right: 1rem;
  }
`;

export const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;

  div {
    font-size: 0.8rem;

    span:first-child {
      color: #777;
      /* cursor: default; */
    }

    span:nth-child(2) {
      margin-left: 0.3rem;
      /* cursor: pointer; */
    }
  }

  div:nth-child(1) {
    margin-bottom: 1rem;
    span:nth-child(2) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
    span:nth-child(3) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
    span:nth-child(4) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
    span:nth-child(5) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
  }

  div:nth-child(2) {
    margin-bottom: 1rem;

    span:nth-child(2) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
    span:nth-child(3) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
  }

  div:nth-child(3) {
    margin-bottom: 1rem;

    span:nth-child(2) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
    span:nth-child(3) {
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
  }
`;

export const MoreMoviesContainer = styled.div`
  p:first-child {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
  }
`;

export const GridMovies = styled.div`
  margin-top: 0.5rem;
  max-height: 63rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  grid-column-gap: 1.3rem;
  grid-row-gap: 1rem;
  justify-items: center;
  width: 100%;
  transition: max-height 0.5s ease-in-out, margin-bottom 0.5s ease-in-out;

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
    grid-row-gap: 1rem;
  }
`;

export const GridCard = styled.div`
  width: auto;
  height: auto;
  background-color: #2f2f2f;
  border-radius: 4px;
  position: relative;
`;

export const GridCardDescription = styled.div`
  margin: 1rem;
  /* padding-bottom: 1rem; */

  p {
    margin-top: 1rem;
    font-size: 0.7rem;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  span:nth-child(1) {
    margin-right: 0.5rem;
    padding: 0.2rem 0.4rem;
    border: 1px solid white;
  }

  @media screen and (min-width: 320px) and (max-width: 375px) and (min-height: 700px) and (max-height: 812px) {
    span:nth-child(1) {
      margin-right: 0.5rem;
      padding: 0.2rem 0.4rem;
      font-size: 0.8rem;
      border: 1px solid white;
    }

    span:nth-child(2) {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 380px) and (min-height: 600px) and (max-height: 670px) {
    span:nth-child(1) {
      margin-right: 0.5rem;
      padding: 0.2rem 0.4rem;
      font-size: 0.8rem;
      border: 1px solid white;
    }

    span:nth-child(2) {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 370px) and (min-height: 560px) and (max-height: 620px) {
    span:nth-child(1) {
      margin-right: 0.5rem;
      padding: 0.2rem 0.4rem;
      font-size: 0.8rem;
      border: 1px solid white;
    }

    span:nth-child(2) {
      font-size: 0.8rem;
    }
  }
`;

export const BackgroundModal = styled.div`
  background-color: #000;
  opacity: 0.7;
  width: 100vw;
  height: 100%;
  z-index: 1;
  position: fixed;
`;

export const SeparatorAndActionButton = styled.div`
  background-image: linear-gradient(
    0deg,
    #181818 0,
    hsla(0, 0%, 9%, 0.7) 20%,
    hsla(0, 0%, 9%, 0.4) 30%,
    transparent 50%
  );
  border-bottom: 2px solid #404040;
  box-shadow: none;
  display: flex;
  height: 6em;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: -6em;
`;

export const ButtonsMoreMovies = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
`;

export const Duration = styled.span`
  position: absolute;
  z-index: 1;
  right: 0;
  color: #fff;
  margin-top: 0.3rem;
  margin-right: 0.5rem;
  font-size: 0.9rem;
`;

export const AboutWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;

    span:first-child {
      color: #777;

      &:hover {
        border-bottom: 0;
        cursor: default;
      }
    }

    span {
      color: #fff;

      &:hover {
        border-bottom: 1px solid #fff;
        cursor: pointer;
      }
    }
  }

  p:nth-child(-n + 6) {
    margin-bottom: 0.5rem;
  }

  p:last-child {
    span:nth-child(2) {
      border: 1px solid #fff;
      padding: 0.2rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const TrailerModal = styled.video`
  position: absolute;
  opacity: 1;
  width: 100%;
  border-radius: 6px 6px 0px 0px;
`;

export const ShadowModal = styled.div`
  background: rgb(24, 24, 24);
  background: linear-gradient(
    0deg,
    rgba(24, 24, 24, 1) 2%,
    rgba(24, 24, 24, 0) 100%
  );
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

export const CloseModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 2rem;
  height: 2rem;
  margin-right: 1em;
  margin-top: 1em;
  background-color: #181818;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    width: 1.7rem;
    height: 1.7rem;

    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;

export const ActionContentModal = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: white;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }

  @media screen and (min-width: 320px) and (max-width: 390px) and (min-height: 700px) and (max-height: 855px) {
    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 430px) and (min-height: 880px) and (max-height: 930px) {
    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  @media screen and (min-width: 300px) and (max-width: 380px) and (min-height: 600px) and (max-height: 670px) {
    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  @media screen and (min-width: 350px) and (max-width: 385px) and (min-height: 560px) and (max-height: 640px) {
    svg {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    padding: 0.4rem;

    svg {
      width: 0.65rem;
      height: 0.65rem;
    }
  }
`;

export const DataAboutMovie = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-right: 0.5em;
    }

    span:nth-child(2) {
      border: 1px solid white;
      padding: 0.1rem 0.5rem;
      display: flex;
      align-items: center;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    div:nth-child(2) {
      span:nth-child(1) {
        white-space: nowrap;
      }

      span:nth-child(2) {
        font-size: 0.6rem;
        padding: 0.1rem 0.5rem 0rem 0.5rem;
        border: 1px solid white;
        border-radius: 4px;
      }
    }
  }

  p:first-child {
    color: #44cd66;
    font-weight: bold;
    margin-top: 0;
    margin-right: 0.5rem;
    font-size: 1rem;
    line-height: 23px;
    text-align: left;
  }

  div:nth-child(3) {
    display: flex;
    align-items: center;
    svg {
      width: 2rem;
      height: 2em;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    p:first-child {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 290px) and (min-height: 550px) and (max-height: 660px) {
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      text-align: left;

      span {
        margin-right: 0em;
      }

      span:nth-child(2) {
        border: 1px solid white;
        padding: 0.1rem 0.5rem;
        display: flex;
        align-items: center;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }

      div:nth-child(1) {
        display: flex;
        margin: 0;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.5em;

        span:nth-child(2) {
          font-size: 0.9rem;
          margin-left: 0.5em;
          margin-right: 0.5em;
        }
      }

      div:nth-child(2) {
        span:nth-child(1) {
          white-space: nowrap;
        }

        span:nth-child(2) {
          font-size: 0.6rem;
          padding: 0.1rem 0.5rem 0rem 0.5rem;
          border: 1px solid white;
          border-radius: 4px;
          margin-left: 0.5em;
        }
      }
    }

    p:first-child {
      color: #44cd66;
      font-weight: bold;
      margin-top: 0;
      margin-right: 0.5rem;
      font-size: 1rem;
      line-height: 23px;
      text-align: left;
      white-space: nowrap;
    }

    div:nth-child(3) {
      display: flex;
      align-items: center;
      svg {
        width: 2rem;
        height: 2em;
      }
    }
  }
`;

export const ImageAndButtonsContainer = styled.div`
  width: 100%;
  height: max-content;
  position: absolute;
  top: 0;
  padding: 0 2rem 0 2rem;
`;

export const ActionButtonMute = styled.button`
  display: flex;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 100%;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  z-index: 2;

  &:focus::before {
    border-radius: 100%;
    box-sizing: content-box;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    padding: 2px;
    position: absolute;
    left: -4px;
    top: -4px;
    border: 2px solid white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ActionButtonReplay = styled(ActionButton)`
  opacity: 0;
  z-index: 1;
`;

export const ActionButtonReplayModal = styled(ActionButton)`
  position: absolute;
  opacity: 0;
`;

export const ActionButtonMuteModal = styled(ActionButton)`
  z-index: 1;
`;
