import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background: transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const FooterContainerIndex = styled(FooterContainer)`
  background: #000000;

  span:first-child {
    font-size: 1rem;
    color: grey;
    white-space: nowrap;
  }
`;

export const FooterContainerLogin = styled(FooterContainer)`
  position: absolute;
  bottom: 0;
  background: #000000;
`;

export const ContentFooter = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2vw;
  margin-left: 8vw;
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.8rem;
    color: grey;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 600px) and (max-width: 700px) and (min-height: 250px) and (max-height: 500px) {
    margin-left: 5vw;
  }

  @media screen and (min-width: 200px) and (max-width: 300px) and (min-height: 600px) and (max-height: 660px) {
    margin-left: 4vw;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin-right: 1rem;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    span {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: row;

  span {
    span {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  margin-top: 2rem;
`;

export const QuestionsLogin = styled(Questions)`
  span {
    font-size: 1rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FooterLinksIndex = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  @media screen and (min-width: 600px) and (max-width: 700px) and (min-height: 250px) and (max-height: 500px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  div {
    font-size: 0.8rem;
    color: grey;
    white-space: nowrap;

    p {
      margin-bottom: 0.9rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    margin-right: 10vw;
  }

  div:first-child {
    max-width: 6.5rem;

    @media screen and (max-width: 400px) {
      margin-right: 15vw;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 700px) and (min-height: 250px) and (max-height: 500px) {
    margin: 0;
  }
`;

export const Links2 = styled(Links)`
  @media screen and (max-width: 700px) {
    margin-top: 0;
  }
`;

export const ServiceCode = styled.div`
  font-size: 0.82rem;
  color: grey;
  cursor: pointer;
  margin-bottom: 1.25rem;

  p {
    width: max-content;
    border: 1px solid grey;
    padding: 0.4em 0.5em 0.4em 0.5em;
  }

  &:hover {
    p {
      color: #fff;
    }
  }
`;
