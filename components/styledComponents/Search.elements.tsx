import styled from "styled-components";

export const SearchContainer = styled.div`
  text-align: center;
  margin-top: 10vw;
  min-height: 1000px;

  img {
    width: 15.5rem;
    height: 8.6rem;
    border-radius: 4px;
    margin-right: 0.5rem;
    cursor: pointer;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(0.95);
    }
  }

  img:nth-child(1n) {
    margin-bottom: 3.5rem;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 14.5rem;
      height: 8.6rem;
    }
  }
`;

export const NoMatches = styled.div`
  display: inline-block;
  text-align: left;
  font-size: 0.8rem;

  p {
    margin-bottom: 0.5rem;
  }

  ul {
    margin-left: 4rem;
  }
`;
