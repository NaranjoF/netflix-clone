/* eslint-disable @next/next/no-img-element */
import {
  CardContainer,
  ContentContainerReverse,
  TextContainerReverse,
  TvAnimation,
} from "./styledComponents/EnjoyOnYourTv.elements";

import {
  AnimationContainer,
  ModalAnimationContainer,
  ModalImageContainer,
  TextContainerModal,
  GifModalContainer,
} from "./styledComponents/DownloadYourShows.elements";

export default function DownloadYourShows() {
  return (
    <CardContainer>
      <ContentContainerReverse>
        <TextContainerReverse>
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </TextContainerReverse>
        <AnimationContainer>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="animationPhoto"
          />
          <ModalAnimationContainer>
            <ModalImageContainer>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt="imageModal"
              />
            </ModalImageContainer>
            <TextContainerModal>
              <div>Stranger Things</div>
              <div>Downloading...</div>
            </TextContainerModal>
            <GifModalContainer />
          </ModalAnimationContainer>
        </AnimationContainer>
      </ContentContainerReverse>
    </CardContainer>
  );
}
