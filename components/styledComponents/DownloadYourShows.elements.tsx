import styled from "styled-components";

export const AnimationContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 1 auto;
  height: 100%;
  width: 48%;
  position: relative;
  margin: 0 0 0 -10%;

  img {
    border: 0;
    height: auto;
    max-width: 100%;
  }

  @media screen and (max-width: 1000px) {
    margin: 0;
    width: 100%;

    img {
      border: 0;
      height: auto;
      max-width: 100%;
    }
  }

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    margin: 0;
    width: 180%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
`;

export const AnimationContainerKids = styled(AnimationContainer)`
  margin: 3rem 0 0 0;
`;

export const ModalAnimationContainer = styled.div`
  padding: 0.5em 0.75em;
  align-items: center;
  background: #000;
  border: 2px solid hsla(0, 0%, 100%, 0.25);
  border-radius: 0.75em;
  bottom: 8%;
  box-shadow: 0 0 2em 0 #000;
  display: flex;
  left: 50%;
  margin: 0 auto;
  min-width: 15em;
  position: absolute;
  transform: translateX(-50%);
  width: 60%;

  @media screen and (max-width: 1000px) {
    padding: 0.35em 0.75em;
    width: 50%;
  }

  @media screen and (max-width: 900px) {
    padding: 0.35em 0.75em;
    width: 60%;
  }
`;

export const ModalImageContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 1em 0 0;

  img {
    border: 0;
    max-width: 100%;
    height: 4.5em;
  }

  @media screen and (max-width: 600px) {
    img {
      height: 3.5em;
    }
  }

  @media screen and (max-width: 430px) and (min-height: 560px) and (max-height: 670px) {
    img {
      height: 3em;
    }
  }
`;

export const TextContainerModal = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0.3em 0;

  div:first-child {
    font-size: 1em;
    color: #fff;
    font-weight: 600;
  }

  div:last-child {
    color: #0071eb;
    font-weight: 400;
  }

  @media screen and (max-width: 600px) {
    div:first-child {
      font-size: 0.8em;
      color: #fff;
      font-weight: 600;
    }

    div:last-child {
      font-size: 0.7em;
      color: #0071eb;
      font-weight: 400;
    }
  }
`;

export const GifModalContainer = styled.div`
  height: 3.75em;
  background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)
    50% no-repeat;
  background-size: 100%;
  content: "";
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  outline: 2px solid #000;
  outline-offset: -2px;
  width: 3em;

  @media screen and (max-width: 430px) and (min-height: 560px) and (max-height: 670px) {
    height: 3em;
  }
`;
