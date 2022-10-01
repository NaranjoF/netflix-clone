import { signInAnonymously, signInWithPopup } from "firebase/auth";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import {
  ButtonLogin,
  Form,
  FormContainer,
  FormGeneralContainer,
} from "./styledComponents/FormLogin.elements";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setInputValue } from "../slices/inputSlice";

interface Inputs {
  email: string;
  password: string;
}

export default function FormLogin() {
  const inputValue: string | number | readonly string[] | undefined =
    useAppSelector((state) => state.input.value);

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

  const dispatch = useAppDispatch();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <FormGeneralContainer>
      <FormContainer>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <h1>{login ? "Sign In" : "Sign Up"}</h1>
          <div>
            <input
              type="email"
              id="username"
              placeholder="Email"
              defaultValue={inputValue}
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
