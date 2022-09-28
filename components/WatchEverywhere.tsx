/* eslint-disable @next/next/no-img-element */
import {
  ContentContainer,
  CardContainerPadding,
} from "./styledComponents/EnjoyOnYourTv.elements";

import {
  AnimationContainer,
  ElementsContainer,
  VideoContainer,
  TextContainer,
} from "./styledComponents/WatchEverywhere.elements";

export default function WatchEverywhere() {
  return (
    <CardContainerPadding>
      <ContentContainer>
        <TextContainer>
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </TextContainer>

        <AnimationContainer>
          <ElementsContainer>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="animationImage"
            />
            <VideoContainer>
              <video
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                autoPlay={true}
                loop={true}
                muted={true}
              />
            </VideoContainer>
          </ElementsContainer>
        </AnimationContainer>
      </ContentContainer>
    </CardContainerPadding>
  );
}
