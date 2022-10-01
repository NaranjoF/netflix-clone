import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export const StyledHeaderwob = styled.header`
  width: 100%;
  height: 4.3rem;
  color: white;
  padding: 0rem 1rem;
  position: fixed;
  font-size: 0.9rem;
  font-weight: 400;
  z-index: 6;
  background: transparent;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 5%, transparent);
`;

export const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.3rem;
  color: white;
  padding: 1.8rem 3.5rem 0rem 3.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  z-index: 6;
  background: transparent;
`;

export const StyledHeaderIndex = styled(StyledHeader)`
  @media screen and (max-width: 600px) {
    padding: 1.8rem 2rem 0rem 2rem;
  }
`;

export const StyledHeaderLogin = styled(StyledHeader)`
  padding: 1.8rem 0rem 0rem 2.5rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-bottom: transparent;
  z-index: 20;
`;

export const StyledHeaderwb = styled.header`
  width: 100%;
  color: white;
  padding: 0rem 1rem;
  position: fixed;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0;
  background: #0b0b0b;
  z-index: 5;
  transition: opacity 1s, visibility 0.5s ease-in-out;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1rem;
  user-select: none;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin-left: 3rem;

      li {
        margin: 0rem 0.4rem;
      }
    }

    @media screen and (max-width: 1100px) {
      ul {
        margin-left: 2rem;
      }
    }
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  @media screen and (max-width: 885px) {
    padding: 0.1rem 0.5rem;
  }

  @media screen and (max-width: 930px) and (max-height: 430px) {
    padding: 0.1rem 1rem;
  }

  @media screen and (max-width: 920px) and (max-height: 420px) {
    padding: 0.1rem 1rem;
  }

  @media screen and (min-width: 1000px) and (max-height: 860px) {
    padding: 1.2rem 1.3rem;
  }
`;

export const Search = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;

  @media screen and (max-width: 1100px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 500px) and (min-height: 700px) {
    width: 1rem;
    height: 1rem;
    margin-right: 0.7rem;
  }

  @media screen and (max-width: 384px) {
    width: 1rem;
    height: 1rem;
    margin-right: 0.7rem;
  }

  @media screen and (max-width: 384px) and (min-height: 650px) {
    width: 0.8rem;
    height: 0.8rem;
  }

  @media screen and (max-width: 810px) and (min-height: 1080px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.9rem;
  }

  @media screen and (max-width: 930px) and (max-height: 500px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
  border-radius: 5px;
`;

export const Bell = styled.button`
  background: transparent;
  color: white;
  border: none;
  margin-right: 1rem;
  cursor: pointer;

  @media screen and (max-width: 885px) and (min-height: 700px) {
    margin-right: 0.7rem;
  }

  @media screen and (max-width: 500px) and (min-height: 700px) {
    margin-right: 0.7rem;
  }

  @media screen and (max-width: 384px) {
    margin-right: 0.7rem;
  }

  @media screen and (max-width: 830px) and (min-height: 1080px) {
    margin-right: 0.9rem;
  }
`;

export const Item = styled.li`
  &:hover {
    color: #b3b3b3;
  }

  transition: color 0.1s ease-in-out;

  @media screen and (max-width: 1100px) {
    a {
      font-size: 0.75rem;
    }
  }
`;

export const DropDownMenu = styled.div`
  position: relative;
  flex-direction: column !important;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3rem;
  display: none;

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (max-width: 1099px) {
    display: flex;
    margin-left: 2rem;

    p {
      font-size: 0.6rem;
    }
  }

  @media screen and (max-width: 885px) and (min-height: 700px) {
    margin-left: 1.3rem;
  }

  @media screen and (max-width: 384px) {
    margin-left: 1.3rem;
  }

  @media screen and (max-width: 384px) and (min-height: 650px) {
    margin-left: 1rem;

    p {
      font-size: 0.5rem;
    }
  }
`;

export const DropDownMenuUser = styled.div`
  position: relative;
  flex-direction: column !important;
  justify-content: flex-start;
  align-items: center;
  display: none;

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DownMenu = styled.div`
  width: 17.5rem;
  height: 21.8rem;
  border-left: 1px solid #242323;
  border-bottom: 1px solid #242323;
  border-right: 1px solid #242323;
  border-top: 2px solid gray;
  font-weight: 700;
  background: rgb(0, 0, 0, 70%);
  -webkit-box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.58);

  div {
    position: absolute;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column !important;
  }

  @media screen and (max-width: 300px) and (max-height: 700px) {
    width: 15rem;
  }

  @media screen and (max-width: 700px) and (max-height: 300px) {
    height: 12.5rem;
  }

  @media screen and (min-width: 710px) and (max-height: 400px) {
    height: 18rem;
  }

  @media screen and (min-width: 890px) and (max-width: 915px) and (max-height: 420px) {
    height: 20rem;
  }

  @media screen and (min-width: 830px) and (max-height: 390px) {
    height: 20rem;
  }

  @media screen and (max-width: 899px) and (min-height: 410px) {
    height: 21.9rem;
  }

  @media screen and (min-width: 640px) and (max-width: 690px) and (min-height: 370px) and (max-height: 385px) {
    height: 19rem;
  }
`;

export const DownMenuLogin = styled.div`
  width: auto;
  height: auto;
  border-left: 1px solid #242323;
  border-bottom: 1px solid #242323;
  border-right: 1px solid #242323;
  border-top: 2px solid gray;
  font-weight: 700;
  background: rgb(0, 0, 0, 70%);
  -webkit-box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.58);

  p {
    white-space: nowrap;
    padding: 1rem;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonMenu = styled.button`
  border: none;
  background: transparent;
  padding: 1.3rem;
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  color: #a1a1a1;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: rgb(122, 122, 122, 10%);
  }

  @media screen and (max-width: 900px) and (min-height: 400px) {
    padding: 1.28rem 1.3rem;
  }

  @media screen and (max-width: 700px) and (max-height: 300px) {
    padding: 0.5rem 1.3rem;
  }

  @media screen and (min-width: 710px) and (max-height: 400px) {
    padding: 0.95rem 1.3rem;
  }

  @media screen and (min-width: 910px) and (max-width: 920px) and (max-height: 450px) {
    padding: 1.12rem 1.3rem;
  }

  @media screen and (min-width: 920px) and (max-width: 930px) and (max-height: 440px) {
    padding: 1.28rem 1.3rem;
  }

  @media screen and (min-width: 850px) and (max-height: 390px) {
    padding: 1.12rem 1.3rem;
  }

  @media screen and (min-width: 840px) and (max-height: 395px) {
    padding: 1.12rem 1.3rem;
  }

  @media screen and (min-width: 640px) and (max-width: 690px) and (min-height: 370px) and (max-height: 385px) {
    padding: 1.05rem 1.3rem;
  }
`;

export const NavContentLeft = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ArrowUp = styled(IoMdArrowDropup)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 45%;
  color: gray;
`;

export const ArrowUpLogin = styled(IoMdArrowDropup)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 5%;
  color: gray;
`;

export const DropDownContainer = styled.div`
  margin-top: 0.2rem;
`;

export const ArrowNDDContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column !important;
  margin-top: 3.5rem;

  @media screen and (max-width: 800px) and (min-height: 700px) {
    margin-left: 2.5rem;
  }

  @media screen and (max-width: 400px) and (max-height: 700px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 300px) and (max-height: 700px) {
    margin-left: 1.6rem;
  }

  @media screen and (min-width: 800px) and (max-height: 1180px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 700px) and (max-height: 300px) {
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 950px) and (max-height: 500px) {
    margin-top: 2.5rem;
  }
`;

export const ArrowNDDContainerUser = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column !important;
  margin-top: 2.5rem;
  margin-right: 3rem;

  /* @media screen and (max-width: 800px) and (min-height: 700px) {
    margin-left: 2.5rem;
  }

  @media screen and (max-width: 400px) and (max-height: 700px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 300px) and (max-height: 700px) {
    margin-left: 1.6rem;
  }

  @media screen and (min-width: 800px) and (max-height: 1180px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 700px) and (max-height: 300px) {
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 950px) and (max-height: 500px) {
    margin-top: 2.5rem;
  } */
`;

export const DefaultMenu = styled.div`
  visibility: hidden;
  display: none !important;

  ul > li:first-child {
    &:hover {
      color: white;
    }
  }

  ul > li {
    p {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1100px) {
    visibility: visible;
    display: flex !important;
  }
`;

export const NetflixLogo = styled.svg`
  width: 5.8rem;
  height: 2rem;

  @media screen and (max-width: 1100px) {
    width: 5.5rem;
    height: 2rem;
  }

  @media screen and (max-width: 885px) {
    width: 4rem;
    height: 2rem;
  }

  @media screen and (max-width: 885px) and (min-height: 700px) {
    width: 3rem;
    height: 2rem;
  }

  @media screen and (max-width: 384px) {
    width: 3rem;
    height: 2rem;
  }

  @media screen and (max-width: 384px) and (min-height: 650px) {
    width: 3rem;
    height: 2rem;
  }

  @media screen and (max-width: 810px) and (min-height: 1080px) {
    width: 4rem;
    height: 2rem;
  }

  @media screen and (max-width: 930px) and (max-height: 500px) {
    width: 4rem;
    height: 2rem;
  }

  @media screen and (max-width: 830px) and (max-height: 1230px) {
    width: 4rem;
    height: 2rem;
  }

  @media screen and (min-width: 280px) and (max-width: 290px) and (min-height: 650px) and (max-height: 660px) {
    width: 3.5rem;
    height: 1rem;
  }
`;

export const NetflixLogoIndex = styled.svg`
  width: 8.3rem;
  height: 2.25rem;

  @media screen and (max-width: 600px) {
    width: 6.3rem;
    height: 2.25rem;
  }
`;

export const NetflixLogoLogin = styled.svg`
  width: 10.4rem;
  height: 2.8rem;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 8.3rem;
    height: 2.25rem;
  }
`;

export const NetflixLogoContainer = styled.div``;

export const NavContentRight = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
  height: 2rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  overflow: hidden;
  border: 1px solid white;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  margin-right: 1rem;
  background: rgb(0, 0, 0, 70%);
`;

export const InputSearch = styled.input`
  background: transparent;
  border: none;
  color: #a1a1a1;
  font-size: 1vw;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.8vw;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 2vw;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 885px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 885px) and (min-height: 700px) {
    width: 1.3rem;
    height: 1.3rem;
  }

  @media screen and (max-width: 384px) {
    width: 1.3rem;
    height: 1.3rem;
  }

  @media screen and (max-width: 384px) and (min-height: 650px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media screen and (max-width: 830px) and (min-height: 1000px) {
    width: 1.7rem;
    height: 1.7rem;
  }

  @media screen and (max-width: 930px) and (max-height: 500px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ArrowDownBrowse = styled(IoMdArrowDropdown)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 885px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const BellSvg = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  @media screen and (max-width: 500px) and (min-height: 700px) {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (max-width: 384px) {
    width: 1rem;
    height: 1rem;
  }

  @media screen and (max-width: 384px) and (min-height: 650px) {
    width: 0.8rem;
    height: 0.8rem;
  }

  @media screen and (max-width: 810px) and (min-height: 1080px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 930px) and (max-height: 500px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const SignInButton = styled.div`
  background: #e50914;
  padding: 0.4rem 1rem;
  border-radius: 3px;
  cursor: pointer;

  span {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0.3rem 0.5rem;
    span {
      font-size: 0.9rem;
    }
  }
`;
