import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export const Shadow = styled.div`
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0,
    transparent 60%,
    rgba(0, 0, 0, 0.8)
  );
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 99vh;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
`;

export const ImageBanner = styled.img`
  transform: none;
  height: 99vh;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
`;

export const ContentUnlimitedContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 99vh;
  text-align: center;
  top: 0;
  z-index: 1;
`;

export const ContentUnlimited = styled.div`
  margin: 0 auto;
  max-width: 950px;
  position: relative;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 2.8rem;
    max-width: 640px;
    margin: 0 auto;
  }

  h2 {
    font-weight: 400;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 1rem 0 1rem;
    h1 {
      font-size: 1.7rem;
      max-width: 440px;
    }

    h2 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    padding: 0;
    h1 {
      font-size: 1.7rem;
      max-width: 440px;
    }

    h2 {
      font-size: 1rem;
    }

    h3 {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 670px) and (max-height: 300px) {
    h1 {
      font-size: 1.2rem;
      max-width: 440px;
      margin-top: 4rem;
    }
  }

  @media screen and (max-width: 860px) and (min-height: 320px) {
    h1 {
      font-size: 1.6rem;
      max-width: 440px;
      margin-top: 4rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 920px) and (min-height: 360px) and (max-height: 420px) {
    h1 {
      font-size: 1.7rem;
      max-width: 440px;
      margin-top: 4rem;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 660px) and (min-height: 200px) and (max-height: 290px) {
    h3 {
      font-weight: 400;
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputEmail = styled.input`
  height: 3.75rem;
  width: 35vw;
  font-size: 16px;
  color: #000;
  background-color: white;
  border: 1px solid #8c8c8c;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 10px;

  &:focus {
    outline: none;
    border-color: #0071eb;
  }

  @media screen and (max-width: 900px) {
    width: 70vw;
    height: 3.4rem;
  }

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    width: 50vw;
    height: 3rem !important;
  }

  @media screen and (max-width: 800px) {
    width: 80vw;
    height: 3.4rem;
  }

  @media screen and (min-width: 1024px) {
    width: 30vw;
    height: 3.4rem;
  }

  @media screen and (min-width: 600px) and (max-width: 660px) and (min-height: 200px) and (max-height: 290px) {
    height: 2.8rem;
  }
`;

export const ButtonStarted = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e50914;
  font-size: 1.6rem;
  padding: 0 0.5rem 0 1rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left: 1px solid #333;
  height: 3.75rem;

  @media screen and (max-width: 900px) {
    margin-top: 1rem;
    width: 20vw;
    height: 3.4rem;
    font-size: 1rem;
    padding: 0 0rem 0 1rem;
    height: 2.5rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-left: none;
  }

  @media screen and (max-width: 800px) {
    width: 28vw;
  }

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    width: 50vw;
  }

  @media screen and (min-width: 300px) and (min-height: 560px) and (max-height: 860px) {
    width: 38vw;
  }

  @media screen and (min-width: 385px) and (min-height: 840px) and (max-height: 930px) {
    width: 38vw;
  }

  @media screen and (min-width: 1024px) {
    width: 20vw;
    height: 3.4rem;
  }
`;

export const ArrowIcon = styled(RiArrowRightSLine)`
  width: 2rem;
  height: rem;
`;
