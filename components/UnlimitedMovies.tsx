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
} from "./styledComponents/UnlimitedMovies.elements";

export function UnlimitedMovies() {
  return (
    <BannerContainer>
      <ImageBanner
        src="https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/3e35f791-04e3-4db3-b963-f69e0e1d6af6/AR-en-20220919-popsignuptwoweeks-perspective_alpha_website_small.jpg"
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
        <FormContainer>
          <InputEmail
            placeholder="Email address"
            type="text"
            minLength={5}
            maxLength={50}
            autoComplete="email"
          />
          <ButtonStarted>
            <span>Get Started</span>
            <ArrowIcon />
          </ButtonStarted>
        </FormContainer>
      </ContentUnlimitedContainer>
    </BannerContainer>
  );
}
