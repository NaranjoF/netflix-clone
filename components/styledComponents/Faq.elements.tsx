import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export const FaqGeneralContainer = styled.div`
  text-align: center;
  padding: 4.3rem 2.8rem;
  background: transparent;
  border-bottom: 8px solid #222;
  color: #fff;
  margin-bottom: 0;
  position: relative;
  background: #000000;
`;

export const FaqContainer = styled.div`
  font-weight: 400;

  h1 {
    margin-bottom: 0.5rem;
  }
`;

export const Faqq = styled.ul`
  margin: 2em auto;
  width: 75%;
  max-width: 815px;
  padding: 0;
`;

export const FaqItemContainer = styled.li`
  list-style-type: none;
  margin: 0 0 8px;

  button {
    color: #fff;
    border: 0;
    font-weight: 400;
    margin-bottom: 1px;
    padding: 0.8em 2.2em 0.8em 1.2em;
    position: relative;
    width: 100%;
    background: #303030;
    display: block;
    text-align: left;
    cursor: pointer;
    overflow: visible;
    font-size: 1.6rem;

    svg {
      transform: translateY(-50%) rotate(-45deg);
      fill: #fff;
      height: 1em;
      position: absolute;
      right: 1em;
      top: 50%;
      width: 1em;
      overflow: hidden;
    }
  }

  div {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    background: #303030;
    display: block;
    text-align: left;
    font-size: 1.6rem;

    span {
      display: inline-block;
      padding: 1.2em;
    }
  }
`;

export const FormFaq = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  top: 0;
  z-index: 1;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const FormContainerFaq = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const ArrowIcon = styled(RiArrowRightSLine)`
  width: 2rem;
  height: rem;
`;
