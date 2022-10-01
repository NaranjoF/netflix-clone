import {
  ImageBanner,
  BannerContainer,
  Shadow,
  ContentUnlimitedContainer,
  ContentUnlimited,
  FormContainer,
  InputEmail,
  ButtonStarted,
  ArrowIcon,
  ErrorForm,
} from "./styledComponents/UnlimitedMovies.elements";
import { useAppDispatch } from "../hooks";
import { setInputValue } from "../slices/inputSlice";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
}

export function UnlimitedMovies() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email }) => {
    dispatchEmail(email);
  };

  const router = useRouter();

  const dispatch = useAppDispatch();

  const dispatchEmail = (email: string) => {
    dispatch(setInputValue(email));
    router.push("/login");
  };

  return (
    <BannerContainer>
      <ImageBanner
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/e01e18e0-779e-4c3e-bfc0-c3b4bd9afc65/AR-en-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="imageBackground"
      />
      <Shadow></Shadow>
      <ContentUnlimitedContainer>
        <ContentUnlimited>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </ContentUnlimited>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputEmail
            placeholder="Email address"
            type="email"
            minLength={5}
            maxLength={50}
            {...register("email", { required: true })}
          />
          <ButtonStarted>
            <span>Get Started</span>
            <ArrowIcon />
          </ButtonStarted>
        </FormContainer>
        {errors.email && <ErrorForm>Please enter a valid email!.</ErrorForm>}
      </ContentUnlimitedContainer>
    </BannerContainer>
  );
}
