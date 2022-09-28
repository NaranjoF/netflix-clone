/* eslint-disable @next/next/no-img-element */
import {
  AnimationContainer,
  CardContainer,
  ContentContainer,
  TextContainer,
  TvAnimation,
} from "./styledComponents/EnjoyOnYourTv.elements";

export default function EnjoyOnYourTv() {
  return (
    <CardContainer>
      <ContentContainer>
        <TextContainer>
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </TextContainer>
        <AnimationContainer>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="animation"
          />
          <TvAnimation>
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            ></video>
          </TvAnimation>
        </AnimationContainer>
      </ContentContainer>
    </CardContainer>
  );
}
