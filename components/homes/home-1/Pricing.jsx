"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { cloudCards } from "@/data/cloudCards";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div className="tab-content tpl-minimal-tabs-cont position-relative">
      {/* Decorative Waves */}
      <div
        className="decoration-10 d-none d-sm-block z-index-n1"
        data-rellax-y=""
        data-rellax-speed="-0.7"
        data-rellax-percentage="0.37"
      >
        <Image
          src="/assets/images/decoration-3.svg"
          className="svg-shape"
          width={148}
          height={148}
          alt=""
        />
      </div>

      <div className="tab-pane show active" role="tabpanel">
        <div className="row mt-n30">
          {cloudCards.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mt-30 d-flex align-items-stretch"
            >
              <div className={`pricing-item cloud-card ${elm.highlight ? "cloud-card--highlight" : ""}`}>
                <div className="pricing-item-inner round">
                  <div className="pricing-wrap">
                    {/* Icon */}
                    <div className="pricing-icon mb-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={elm.width}
                        height={elm.height}
                        viewBox={`0 0 ${elm.width} ${elm.height}`}
                        aria-hidden="true"
                      >
                        <path d={elm.svgPath} />
                      </svg>
                    </div>

                    {/* Badge */}
                    <div className="cloud-card-badge">
                      {t(elm.tagKey)}
                    </div>

                    {/* Title */}
                    <h4 className="pricing-title mt-10 mb-10">
                      {t(elm.titleKey)}
                    </h4>

                    {/* Short summary (new) */}
                    <p className="cloud-card-summary">
                      {t(elm.summaryKey)}
                    </p>

                    {/* Feature list */}
                    <div className="pricing-features mt-20">
                      <ul className="pr-list">
                        {elm.featuresKeys?.map((key, idx) => (
                          <li key={idx}>
                            <i className="mi-check" /> {t(key)}
                          </li>
                        ))}
                        {elm.disabledKeys?.map((key, idx) => (
                          <li key={idx} className="opacity-055">
                            <i className="mi-close" /> {t(key)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}