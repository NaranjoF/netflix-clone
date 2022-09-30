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
