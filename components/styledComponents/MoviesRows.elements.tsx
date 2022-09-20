import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export const MoviesRowsGeneralContainer = styled.div`
  width: 100%;
  min-height: 1000px;
  background: transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const ArrowLeft = styled(VscChevronLeft)`
  font-size: 4vw;
`;

export const Arrow = styled.div`
  transition: transform 0.2s ease-in-out;
  align-self: center;
  align-self: center;
  height: auto;

  opacity: 0;
  z-index: 10;
`;

export const ArrowLeftContainer = styled.span`
  /* border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  left: -3px;
  cursor: pointer;
  bottom: 0;
  color: #fff;
  display: flex;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  width: 3.8%;
  z-index: 4;
  opacity: 0;

  &:hover {
    background: hsla(0, 0%, 8%, 0.7);
    div:nth-child(2) {
      transform: scale(1.2);
    }
  } */

  border: none;
  border-radius: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 10;
  margin: 0.25rem 0.25rem 0.25rem 0rem;
  width: 3rem;
  cursor: pointer;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 0;
  transition: background-color 150ms ease-in-out;
  background: hsla(0, 0%, 8%, 0.5);
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  opacity: 0;
  z-index: -1;

  &:hover {
    background: hsla(0, 0%, 8%, 0.7);
    div:nth-child(1) {
      transform: scale(1.2);
    }
  }
`;

export const ShadowLeft = styled.div`
  background: hsla(0, 0%, 8%, 0.5);
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  left: 0;
  cursor: pointer;
  bottom: 0;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
`;

export const ArrowRight = styled(VscChevronRight)`
  font-size: 4vw;
`;

export const ArrowRightContainer = styled.span`
  /* border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  right: 0;
  cursor: pointer;
  bottom: 0;
  color: #fff;
  display: flex;
  position: absolute;
  text-align: center;
  top: 0;
  width: 3.9%;
  z-index: 4;
  transition: background 0.2s ease-in-out;
  opacity: 1;

  &:hover {
    background: hsla(0, 0%, 8%, 0.7);
    div:nth-child(2) {
      transform: scale(1.2);
    }
  } */

  border: none;
  border-radius: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 10;
  margin: 0.25rem 0rem 0.25rem 0.25rem;
  width: 3rem;
  cursor: pointer;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: background-color 150ms ease-in-out;
  background: hsla(0, 0%, 8%, 0.5);

  &:hover {
    background: hsla(0, 0%, 8%, 0.7);
    div:nth-child(1) {
      transform: scale(1.2);
    }
  }

  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

export const ShadowRight = styled.div`
  background: hsla(0, 0%, 8%, 0.5);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  right: 0;
  bottom: 0;
  color: #fff;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 4;
  transition: background 0.2s ease-in-out;
`;

export const MoviesRowsContainerPrincipal = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 3vw 0 3vw 0;
  user-select: none;

  &:hover {
    ul {
      opacity: 1;
    }
  }
`;

export const MoviesRowsContainerPrincipalTop = styled(
  MoviesRowsContainerPrincipal
)`
  margin: 10vw 0 3vw 0;
`;
export const MovieRowBody = styled.div`
  /* position: relative;
  padding: 0 4%;
  cursor: pointer;

 &:hover {
    ul {
      opacity: 1;
    }

    div:nth-child(2) {
      opacity: 1;
    } 
  } */

  display: flex;
  position: relative;
  justify-content: center;
  overflow: hidden;

  &:hover {
    div:nth-child(2) {
      opacity: 1;
    }

    span > div {
      opacity: 1;
    }
  }
`;

export const RowContainer = styled.div`
  --items-per-screen: 5;
  --slider-index: 1;
  display: flex;
  flex-direction: row;
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  flex-grow: 1;
  img {
    flex: 0 0 calc(100% / var(--items-per-screen));
    max-width: calc(100% / var(--items-per-screen));
    aspect-ratio: 16/9;
    padding: 0.25rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 1000px) {
    --items-per-screen: 3;
  }

  @media (max-width: 500px) {
    --items-per-screen: 2;
  }
`;

export const ImageRowContainer = styled.div`
  width: 18vw;
  margin-left: 0.2rem;
  margin-right: 0.2rem;

  @media screen and (max-width: 1250px) {
    width: 17.9vw;
  }

  @media screen and (max-width: 1000px) {
    width: 22.4vw;
  }

  @media screen and (max-width: 800px) {
    width: 22.2vw;
  }

  @media screen and (max-width: 650px) {
    width: 29.7vw;
  }

  @media screen and (max-width: 600px) {
    width: 44.9vw;
  }
`;

export const MovieRowHeader = styled.h2`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    color: #e5e5e5;
    display: inline-block;
    font-size: 1.5vw;
    font-weight: bold;
    margin: 0 3.5rem 0.5em;
    min-width: 6em;
    text-decoration: none;
  }

  @media screen and (max-width: 650px) {
    p {
      font-size: 2.4vw;
    }
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 2.9vw;
    }
  }
`;

export const PaginationIndicator = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-right: 3.5rem;
  top: 0;
  display: block;
  opacity: 0;

  li:first-child {
    background-color: #aaa;
  }
`;

export const Indicator = styled.li`
  background-color: #4d4d4d;
  display: inline-block;
  height: 2px;
  margin-left: 1px;
  width: 12px;
`;
