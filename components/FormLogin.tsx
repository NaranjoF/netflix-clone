import {
  ButtonLogin,
  Form,
  FormContainer,
  FormGeneralContainer,
} from "./styledComponents/FormLogin.elements";

export default function FormLogin() {
  return (
    <FormGeneralContainer>
      <FormContainer>
        <Form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <ButtonLogin>Sign In</ButtonLogin>
          <p>
            New to Netflix? <span>Sign up now.</span>
          </p>
        </Form>
      </FormContainer>
    </FormGeneralContainer>
  );
}
