import styled from "styled-components";

export const AnimationContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  height: 100%;
  width: 48%;
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
