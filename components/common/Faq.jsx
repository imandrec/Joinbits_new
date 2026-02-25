"use client";

import { faqDataMain } from "@/data/faqs";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Faq({ faqData = faqDataMain }) {
  const { t } = useTranslation();

  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    questionRefs.current.forEach((el) => {
      el?.classList.remove("active");
    });

    answerRefs.current.forEach((el) => {
      if (!el) return;
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginBottom = "0px";
    });

    if (currentIndex !== -1) {
      questionRefs.current[currentIndex]?.classList.add("active");
      const element = answerRefs.current[currentIndex];
      if (element) {
        element.style.height = element.scrollHeight + "px";
        element.style.overflow = "hidden";
        element.style.transition = "all 0.5s ease-in-out";
        element.style.marginBottom = "1.55em";
      }
    }
  }, [currentIndex]);

  return (
    <dl className="toggle">
      {faqData.map((item, index) => (
        <React.Fragment key={index}>
          <dt
            onClick={() =>
              setCurrentIndex((pre) => (pre == index ? -1 : index))
            }
          >
            <a ref={(el) => (questionRefs.current[index] = el)}>
              {item.questionKey ? t(item.questionKey) : item.question}
            </a>
          </dt>

          <dd
            ref={(el) => (answerRefs.current[index] = el)}
            className="black faqAnswer"
          >
            {item.answerKey ? t(item.answerKey) : item.answer}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}