/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { FaqItemContainer } from "./styledComponents/Faq.elements";

interface Props {
  title: string;
  info: string;
  info2?: string;
}

export default function FaqItem({ title, info, info2 }: Props) {
  const itemBody = useRef<HTMLDivElement>(null);

  const iconBody = useRef<SVGSVGElement>(null);

  const [isToggle, setToggle] = useState(false);

  const toggleItem = () => {
    const body = itemBody.current;
    const icon = iconBody.current;

    if (!isToggle) {
      if (body !== null && icon !== null) {
        body.style.maxHeight = "1200px";
        icon.style.transform = "translateY(-50%)";
      }
      setToggle(true);
    } else {
      if (body !== null && icon !== null) {
        body.style.maxHeight = "0px";
        icon.style.transform = "translateY(-50%) rotate(-45deg)";
      }
      setToggle(false);
    }
  };

  return (
    <FaqItemContainer onClick={toggleItem}>
      <button>
        {title}
        <svg id="thin-x" viewBox="0 0 26 26" focusable="true" ref={iconBody}>
          <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
        </svg>
      </button>
      <div ref={itemBody}>
        <span>
          {info}

          {info2 && (
            <>
              <br />
              <br />
              {info2}
            </>
          )}
        </span>
      </div>
    </FaqItemContainer>
  );
}
