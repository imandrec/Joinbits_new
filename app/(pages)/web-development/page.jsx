"use client";

import Footer1 from "@/components/footers/FooterPreview";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import Image from "next/image";
import { clients2 } from "@/data/brands";
import { testimonialItems } from "@/data/testimonials";
import React from "react";
import ClientSlider from "@/components/others/ClientSlider";
import { features7 } from "@/data/features";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import { useTranslation } from "react-i18next";

const dark = false;

export default function WebDevelopmentPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>

          <main id="main">
            {/* HERO */}
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.jpg)",
              }}
              id="home"
            >
              {/* Hero1 already has i18n keys (webDevelopment.hero.*) */}
              <Hero1 />
            </ParallaxContainer>

            {/* MAIN SECTIONS (About/Services/Achievements/etc) */}
            {/* Home1 should also be i18n-driven with webDevelopment.* keys */}
            <Home1 />

            {/* DIVIDER */}
            <hr className="mt-0 mb-0" />

            {/* FEATURES (uses features5 keys if you already changed to titleKey/descriptionKey) */}
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row mb-50 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
                    <h2 className="section-title-small mb-20">
                      {t("webDevelopment.featuresweb.title")}
                    </h2>
                    <p className="text-gray mb-0">
                      {t("webDevelopment.featuresweb.description")}
                    </p>
                  </div>
                </div>

                <div className="row mt-n30 wow fadeInUp">
                  {features7.map((elm, i) => (
                    <div
                      key={i}
                      className="col-sm-6 col-xl-3 d-flex align-items-stretch"
                    >
                      <div className="alt-features-item box-shadow text-center mt-30">
                        <div className="alt-features-icon mb-10 ">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d={elm.svgPath} />
                          </svg>
                        </div>

                        {/* If features5 now uses titleKey/descriptionKey: */}
                        <h4 className="alt-features-title">
                          {elm.titleKey ? t(elm.titleKey) : elm.title}
                        </h4>
                        <div className="alt-features-descr">
                          {elm.descriptionKey
                            ? t(elm.descriptionKey)
                            : elm.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DIVIDER */}
            <hr className="mt-0 mb-0" />

            {/* CTA */}
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content z-index-1" : ""
              }`}
            >
              <div className="container position-relative">
                <div
                  className="decoration-21 d-none d-lg-block"
                  data-rellax-y
                  data-rellax-speed="0.7"
                  data-rellax-percentage="0.5"
                >
                  <Image
                    width={148}
                    height={148}
                    className="svg-shape"
                    src="/assets/images/decoration-3.svg"
                    alt=""
                  />
                </div>

                <div className="row text-center wow fadeInUp">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-descr mb-50 mb-sm-30">
                      {t("webDevelopment.cta.description")}
                    </p>
                    <div className="local-scroll">
                      <Link
                        href={`/contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("webDevelopment.achievements.cta")}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer1 />
        </div>
      </div>
    </>
  );
}