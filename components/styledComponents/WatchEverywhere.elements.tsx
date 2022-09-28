import styled from "styled-components";

export const AnimationContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  height: 100%;
  width: 48%;

  @media screen and (max-width: 1000px) {
    width: 60vw;
  }

  @media screen and (max-width: 700px) {
    width: 80vw;
  }

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    margin-top: 1.5rem;
  }
`;

export const ElementsContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: -5% -10% 0 0;

  img {
    position: relative;
    z-index: 2;
    border: 0;
    height: auto;
    max-width: 100%;
  }

  @media screen and (max-width: 1000px) {
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  flex: 0 1 auto;
  height: 100%;
  padding: 0 3rem 0 0rem;
  width: 52%;
  font-weight: 400;

  h1 {
    font-size: 2.8rem;
    line-height: 1.1;
  }

  h2 {
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
    width: 100%;
    padding: 0;
    h1 {
      font-size: 2.8rem;
      line-height: 1.1;
    }

    h2 {
      margin-top: 1rem;
      font-weight: 400;
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 700px) {
    text-align: center;
    width: 100%;
    padding: 0;

    h1 {
      font-size: 1.8rem;
      line-height: 1.1;
    }

    h2 {
      margin-top: 1rem;
      font-weight: 400;
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    text-align: center;
    width: 100%;
    padding: 0;
    h1 {
      font-size: 1.5rem;
      line-height: 1.1;
    }

    h2 {
      margin-top: 1rem;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`;

export const VideoContainer = styled.div`
  height: 100%;
  left: 50%;
  max-height: 47%;
  max-width: 63%;
  position: absolute;
  top: 34%;
  transform: translate(-50%, -50%);
  width: 100%;

  video {
    height: 100%;
    width: 100%;
    display: inline-block;
    vertical-align: baseline;
  }
`;
