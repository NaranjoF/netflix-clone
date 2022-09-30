import { signInAnonymously, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import {
  ButtonLogin,
  Form,
  FormContainer,
  FormGeneralContainer,
} from "./styledComponents/FormLogin.elements";

interface Inputs {
  email: string;
  password: string;
}

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { signIn, signUp } = useAuth();

  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    if (login) {
      setLogin(!login);
    } else if (!login) {
      setLogin(true);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <FormGeneralContainer>
      {/* <FormContainer>
        <Form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <ButtonLogin>Sign In</ButtonLogin>
          <p>
            New to Netflix? <span>Sign up now.</span>
          </p>
        </Form>
      </FormContainer> */}
      <FormContainer>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <h1>{login ? "Sign In" : "Sign Up"}</h1>
          <div>
            <input
              type="email"
              id="username"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Please enter a valid email.</span>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 60,
              })}
            />
            {errors.password && (
              <span className="text-sm  text-orange-500">
                Your password must contain between 6 and 60 characters.
              </span>
            )}
          </div>
          <button type="submit">{login ? "Sign In" : "Sign Up"}</button>

          <p>
            New to Netflix? <span onClick={handleLogin}>Sign up now.</span>
          </p>
        </form>
      </FormContainer>
    </FormGeneralContainer>
  );
}
