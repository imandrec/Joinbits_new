"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Service2() {
  const { t } = useTranslation();

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <div className="row mb-50 mb-sm-30">
            <div className="col-md-10">
              <p className="text-gray">
                {t("consultingPage.service2.intro.p1")}
              </p>

              <p className="text-gray mb-0">
                {t("consultingPage.service2.intro.p2")}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <ul className="nav nav-tabs services-tabs" role="tablist">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <li role="presentation" key={num}>
                <a
                  href={`#services-item-${num}`}
                  className={num === 1 ? "active" : ""}
                  aria-controls={`services-item-${num}`}
                  role="tab"
                  aria-selected={num === 1}
                  data-bs-toggle="tab"
                >
                  {t(`service2.tabs.t${num}`)}
                  <span className="number">
                    {num.toString().padStart(2, "0")}
                  </span>
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
            {[1, 2, 3, 4, 5, 6].map((num) => (
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
                      {t(`consultingPage.service2.content.c${num}.title`)}
                    </h4>
                    <p className="text-gray mb-0">
                      {t(`consultingPage.service2.content.c${num}.text`)}
                    </p>
                  </div>
                </div>

                <Image
                  width={945}
                  height={1016}
                  className="services-image"
                  src={`/assets/images/services/service-${num}.jpg`}
                  alt={t(`consultingPage.service2.content.c${num}.title`)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
