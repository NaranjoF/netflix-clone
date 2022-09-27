import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export const Shadow = styled.div`
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0,
    transparent 60%,
    rgba(0, 0, 0, 0.8)
  );
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 99vh;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
`;

export const ImageBanner = styled.img`
  transform: none;
  height: 99vh;
  object-fit: cover;
  width: 100%;
  max-width: 100%;
`;

export const ContentUnlimitedContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 99vh;
  text-align: center;
  top: 0;
  z-index: 1;
`;

export const ContentUnlimited = styled.div`
  width: 40%;

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-weight: 400;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.div`
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
