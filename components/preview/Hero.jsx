"use client";
import React from "react";
import AnimatedText from "../common/AnimatedText";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      <div className="home-content pb-40">
        <div className="row">
          <div className="col-md-10 offset-md-1">

            <h1 className="hs-title-12 mb-40 mb-sm-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                <AnimatedText text={t("hero.title")} />
              </span>
            </h1>

            <p
              className="hs-paragraph mb-40 wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.2s"
              style={{ maxWidth: 900 }}
            >
              {t("hero.description")}
            </p>

            <div
              className="local-scroll row wow fadeInUp"
              data-wow-delay="0.6s"
              data-wow-duration="1.2s"
            >
              <div className="col-10 offset-1 col-xl-8 offset-xl-2 mb-50 mb-sm-40">
                <div className="row g-2">

                  <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                    <a href="#services" className="btn btn-mod btn-medium btn-round btn-full">
                      {t("hero.buttons.services")}
                    </a>
                  </div>

                  <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                    <a href="#staffing" className="btn btn-mod btn-medium btn-round btn-full">
                      {t("hero.buttons.talent")}
                    </a>
                  </div>

                  <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                    <a href="#contact" className="btn btn-mod btn-border btn-medium btn-round btn-full">
                      {t("hero.buttons.start")}
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <div className="mt-n10 wow fadeInUp" data-wow-delay="0.75s">
              <div className="d-inline-flex mt-10 mx-3">
                <div className="features-list-icon"><i className="mi-check" /></div>
                <div className="features-list-text">{t("hero.features.software")}</div>
              </div>

              <div className="d-inline-flex mt-10 mx-3">
                <div className="features-list-icon"><i className="mi-check" /></div>
                <div className="features-list-text">{t("hero.features.web")}</div>
              </div>

              <div className="d-inline-flex mt-10 mx-3">
                <div className="features-list-icon"><i className="mi-check" /></div>
                <div className="features-list-text">{t("hero.features.cloud")}</div>
              </div>

              <div className="d-inline-flex mt-10 mx-3">
                <div className="features-list-icon"><i className="mi-check" /></div>
                <div className="features-list-text">{t("hero.features.staffing")}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
