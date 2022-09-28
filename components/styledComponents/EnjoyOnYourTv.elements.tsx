import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #000000;
  height: max-content;
  margin-bottom: 0.6rem;
`;

export const CardContainerPadding = styled(CardContainer)`
  padding-top: 4.3rem;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  padding-bottom: 2.8rem;
`;

export const ContentContainerReverse = styled(ContentContainer)`
  flex-direction: row-reverse;
`;

export const TextContainer = styled.div`
  flex: 0 1 auto;
  height: 100%;
  padding: 0 3rem 0 0;
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
`;

export const TextContainerReverse = styled(TextContainer)`
  padding: 0 0 0 3rem;
`;

export const AnimationContainer = styled.div`
  position: relative;
  overflow: hidden;

  img {
    position: relative;
    border: 0;
    max-width: 100%;
    z-index: 2;
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
