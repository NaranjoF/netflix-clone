import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #000000;
  height: max-content;
  margin-bottom: 0.6rem;

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    overflow: hidden;
  }
`;

export const CardContainerPadding = styled(CardContainer)`
  padding-top: 4.3rem;

  @media screen and (max-width: 900px) {
    padding-top: 0.5rem;
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  padding-bottom: 2.8rem;

  @media screen and (max-width: 1200px) {
    margin: 0 3rem;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 2.8rem;
  }
`;

export const ContentContainerReverse = styled(ContentContainer)`
  flex-direction: row-reverse;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 2.8rem;
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

export const TextContainerReverse = styled(TextContainer)`
  padding: 0 0 0 3rem;

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

export const AnimationContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 45vw;

  img {
    position: relative;
    border: 0;
    max-width: 100%;
    z-index: 2;
  }

  @media screen and (max-width: 1000px) {
    width: 60vw;
  }

  @media screen and (max-width: 700px) {
    width: 80vw;
  }
`;

export const TvAnimation = styled.div`
  height: 100%;
  left: 50%;
  max-height: 100%;
  max-width: 77%;
  position: absolute;
  top: 46%;
  transform: translate(-48%, -50%);
  width: 100%;

  video {
    height: 100%;
    width: 100%;
    display: inline-block;
    vertical-align: baseline;
  }
`;
