"use client";

import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Service() {
  const { t } = useTranslation();

  // You only have 3 items in consultingservice.content (c1..c3)
  const items = [1, 2, 3];

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          {/* Optional: keep these as-is or move them to i18n too */}
          <h2 className="section-caption mb-xs-10">{t("consultingservice.subtitle")}</h2>

          <h3 className="section-title mb-30">
            <AnimatedText text={t("consultingservice.title")} />
          </h3>

          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {t("consultingservice.intro.p1")}
              </p>
            </div>
          </div>

          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            {items.map((num) => (
              <li role="presentation" key={num}>
                <a
                  href={`#services-item-${num}`}
                  className={num === 1 ? "active" : ""}
                  aria-controls={`services-item-${num}`}
                  role="tab"
                  aria-selected={num === 1}
                  data-bs-toggle="tab"
                >
                  {t(`consultingservice.tabs.t${num}`)}{" "}
                  <span className="number">{num.toString().padStart(2, "0")}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {items.map((num) => (
              <div
                key={num}
                className={`tab-pane services-content-item fade ${
                  num === 1 ? "show active" : ""
                }`}
                id={`services-item-${num}`}
                role="tabpanel"
              >
                <div className="services-text">
                  <div className="services-text-container">
                    <h4 className="services-title">
                      {t(`consultingservice.content.c${num}.title`)}
                    </h4>
                    <p className="text-gray mb-0">
                      {t(`consultingservice.content.c${num}.text`)}
                    </p>
                  </div>
                </div>

                <Image
                  width={945}
                  height={1016}
                  className="services-image"
                  src={`/assets/images/services/service-${num}.jpg`}
                  alt={t(`consultingservice.content.c${num}.title`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
