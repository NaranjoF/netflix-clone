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
  min-height: 660px;

  form {
    position: relative;
    display: block;
    width: 450px;
    margin: 50px auto;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.75);
    color: #ffffff;
    border-radius: 4px;
    padding: 60px 68px 40px;

    h1 {
      font-size: 2em;
      font-weight: 700;
      margin-bottom: 28px;
    }

    div {
      position: relative;
      margin: 0 auto;
      padding-bottom: 16px;

      input {
        box-sizing: border-box;
        width: 100%;
        font-family: inherit;
        padding: 0px 20px 0 20px;
        height: 50px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        outline: none;
        background: #333;
        color: #ffffff;
      }

      /* label {
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        top: 20%;
        left: 20px;
        font-size: 18px;
        cursor: text;
        color: #8c8c8c;
        transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
      } */

      span {
        color: #ffa00a;
        font-size: 0.8rem;
      }
    }

    button {
      width: 100%;
      height: 50px;
      margin-top: 24px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      border-radius: 5px;
      border: none;
      color: #ffffff;
      background-color: #e50914;
    }

    p {
      margin-top: 4rem;

      color: #737373;

      span {
        color: white;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    @media screen and (max-width: 450px) and (min-height: 700px) {
      width: 350px;
      padding: 60px 35px 40px;
    }

    @media screen and (max-width: 330px) {
      width: 250px;
      padding: 35px 15px 40px;
    }

    @media screen and (max-width: 380px) and (min-height: 660px) {
      width: 350px;
      padding: 35px 15px 40px;
    }

    @media screen and (min-width: 300px) and (max-width: 390px) and (min-height: 500px) {
      width: 350px;
      padding: 35px 15px 40px;
    }

    @media screen and (max-width: 900px) and (min-height: 1000px) {
      margin-bottom: 12rem;
    }
  }
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
