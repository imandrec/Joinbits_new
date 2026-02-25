"use client";

import { stepsItems2 } from "@/data/steps";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Steps() {
  const { t } = useTranslation();

  return (
    <div className="container position-relative">
      <div className="row mb-80 mb-sm-60">
        <div className="col-md-8 col-lg-6">
          <h2 className="section-title mb-0">
            {t("aboutmain.steps.title")}
          </h2>
        </div>

        <div className="col-lg-6 pt-20 pt-md-30">
          <p className="text-gray mb-0">
            {t("aboutmain.steps.subtitle")}
          </p>
        </div>
      </div>

      {/* Steps Grid */}
      <div className="row mt-n30">
        {/* Gradient Settings for SVG Icons */}
        <svg className="visually-hidden" aria-hidden="true">
          <linearGradient id="gradient-horizontal">
            <stop offset="0%" stopColor="var(--color-primary-4)" />
            <stop offset="33%" stopColor="var(--color-primary-3)" />
            <stop offset="67%" stopColor="var(--color-primary-2)" />
            <stop offset="100%" stopColor="var(--color-primary-1)" />
          </linearGradient>
        </svg>
        {/* End Gradient Settings */}

        {stepsItems2.map((item, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-4 d-flex align-items-stretch mt-30 wow fadeIn"
            data-wow-duration={item.dataWowDuration}
            data-wow-delay={item.dataWowDelay}
          >
            <div className="features-2-item pt-sm-40 pb-sm-40">
              <div className="features-2-label">
                {t(`aboutmain.steps.items.${index}.label`)}
              </div>

              <div className="features-2-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={item.iconPath} />
                </svg>
              </div>

              <h4 className="features-2-title">
                {t(`aboutmain.steps.items.${index}.title`)}
              </h4>

              <div className="features-2-descr">
                {t(`aboutmain.steps.items.${index}.description`)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Steps Grid */}
    </div>
  );
}