import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background: transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const ContentFooter = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  margin-left: 8rem;
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.8rem;
    color: grey;
    margin-bottom: 1rem;
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
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  div {
    font-size: 0.8rem;
    color: grey;

    p {
      margin-bottom: 0.9rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    margin-right: 10rem;
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
