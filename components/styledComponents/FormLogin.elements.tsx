import styled from "styled-components";

export const FormGeneralContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  top: 0;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  padding: 60px 68px 40px;
  margin-bottom: 90px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: auto;

  input {
    background: #333;
    border: 0;
    border-radius: 4px;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 1rem;
    width: 19rem;
    margin-top: 1.3rem;
  }

  p {
    color: #737373;

    span {
      color: white;
    }
  }
`;

export const ButtonLogin = styled.button`
  border: 0;
  padding: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 2.5rem;
  width: 100%;
  height: 3rem;
  background: #e50914;
  display: inline-block;
  min-height: 37px;
  min-width: 98px;
  color: white;
  margin-bottom: 4.5rem;
`;
