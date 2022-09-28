/* eslint-disable react/no-unescaped-entities */
import {
  ArrowIcon,
  ButtonStarted,
  FaqContainer,
  FaqGeneralContainer,
  FaqItemContainer,
  Faqq,
  FormContainerFaq,
  FormFaq,
  InputEmail,
} from "./styledComponents/Faq.elements";

export default function Faq() {
  return (
    <FaqGeneralContainer>
      <FaqContainer>
        <h1>Frequently Asked Questions</h1>
        <Faqq>
          <FaqItemContainer>
            <button>
              What is Netflix?
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div>
              <span>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want without a
                single commercial all for one low monthly price. There's always
                something new to discover and new TV shows and movies are added
                every week!
              </span>
            </div>
          </FaqItemContainer>
          <FaqItemContainer>
            <button>
              How much does Netflix cost?
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div>
              <span>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from $9.99 to $15.49 a month (pre-tax). No extra costs, no
                contracts.
              </span>
            </div>
          </FaqItemContainer>
          <FaqItemContainer>
            <button>
              Where can I watch?
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div>
              <span>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br />
                <br />
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </span>
            </div>
          </FaqItemContainer>
          <FaqItemContainer>
            <button>
              How do I cancel?
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div>
              <span>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees start or stop your
                account anytime.
              </span>
            </div>
          </FaqItemContainer>
          <FaqItemContainer>
            <button>
              What can I watch on Netflix?
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div>
              <span>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </span>
            </div>
          </FaqItemContainer>
          <FaqItemContainer>
            <button>
              Is Netflix good for kids?
              <svg id="thin-x" viewBox="0 0 26 26" focusable="true">
                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
              </svg>
            </button>
            <div>
              <span>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
              </span>
            </div>
          </FaqItemContainer>
        </Faqq>
      </FaqContainer>
      <FormFaq>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <FormContainerFaq>
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
        </FormContainerFaq>
      </FormFaq>
    </FaqGeneralContainer>
  );
}
