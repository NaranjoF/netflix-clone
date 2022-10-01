/* eslint-disable react/no-unescaped-entities */
import { useAppDispatch } from "../hooks";
import { setInputValue } from "../slices/inputSlice";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import FaqItem from "./FaqItem";
import {
  ArrowIcon,
  ButtonStarted,
  ErrorForm,
  FaqContainer,
  FaqGeneralContainer,
  FaqItemContainer,
  Faqq,
  FormContainerFaq,
  FormFaq,
  InputEmail,
} from "./styledComponents/Faq.elements";

interface Inputs {
  email: string;
}

export default function Faq() {
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
    <FaqGeneralContainer>
      <FaqContainer>
        <h1>Frequently Asked Questions</h1>
        <Faqq>
          <FaqItem
            title="What is Netflix?"
            info="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
            info2="You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are addedevery week!"
          />
          <FaqItem
            title="How much does Netflix cost?"
            info="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $15.49 a month (pre-tax). No extra costs, no contracts."
          />
          <FaqItem
            title="Where can I watch?"
            info="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            info2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          />
          <FaqItem
            title="How do I cancel?"
            info="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          />
          <FaqItem
            title="What can I watch on Netflix?"
            info="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          />
          <FaqItem
            title="Is Netflix good for kids?"
            info="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
            info2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          />
        </Faqq>
      </FaqContainer>
      <FormFaq onSubmit={handleSubmit(onSubmit)}>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <FormContainerFaq>
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
        </FormContainerFaq>
        {errors.email && <ErrorForm>Please enter a valid email!.</ErrorForm>}
      </FormFaq>
    </FaqGeneralContainer>
  );
}
