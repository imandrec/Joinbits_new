"use client";

import FooterPreview from "@/components/footers/FooterPreview";
import dynamic from "next/dynamic";
const onePage = false;
const dark = false;

import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Benefits1 from "@/components/homes/home-1/Benefits1";
import Pricing from "@/components/homes/home-1/Pricing";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import { featuresCloud } from "@/data/features";
import { useTranslation } from "react-i18next";

export default function CloudIntegration() {
  const { t } = useTranslation();

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>

          <main id="main">

            {/* HERO */}
            <ParallaxContainer
              className="page-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-11.jpg)",
              }}
            >
              <div className="container position-relative pt-50 pb-100 pb-sm-20">
                <div className="text-center">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      <h1 className="hs-title-1 mb-30">
                        <span className="wow charsAnimIn" data-splitting="chars">
                          <AnimatedText text={t("cloudintegration.hero.title")} />
                        </span>
                      </h1>

                      <p className="section-descr mb-0 wow fadeInUp">
                        {t("cloudintegration.hero.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxContainer>

            {/* PRICING */}
            <section className="page-section pt-0 bg-gradient-gray-light-1 bg-scroll">
              <div className="container">
                <div className="row wow fadeInUp">
                  <div className="col-xl-10 offset-xl-1">
                    <Pricing />
                  </div>
                </div>
              </div>
            </section>

            {/* MISSION */}
            <section className="page-section pt-0">
              <div className="container">
                <hr className="mt-0 mb-80 mb-sm-40" />
                <div className="row">
                  <div className="col-lg-4 mb-md-50 mb-xs-30">
                    <div className="lead-alt wow linesAnimIn">
                      {t("cloudintegration.mission.title")}
                    </div>
                  </div>

                  <div className="col-lg-8 wow linesAnimIn">
                    <p className="mb-0">
                      {t("cloudintegration.mission.description")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* BENEFITS */}
            <section className="page-section">
              <Benefits1 />
            </section>

            {/* JUMPSTART SECTION */}
            <section
              className="page-section bg-scroll light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-gradient/section-bg-3.jpg)",
              }}
            >
              <div className="bg-overlay bg-gradient-dark-alpha-2 d-none d-md-block" />
              <div className="bg-overlay bg-dark-1 opacity-09 d-md-none" />

              <div className="container position-relative">
                <div className="row wow fadeInUp">
                  <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                    <h2 className="section-title mb-40 mb-sm-30">
                      {t("cloudintegration.jumpstart.title")}
                    </h2>

                    <p className="mb-50 mb-sm-40">
                      {t("cloudintegration.jumpstart.description")}
                    </p>

                    <div className="local-scroll mb-70 mb-sm-50">
                      <Link
                        href={`/contact`}
                        className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("cloudintegration.jumpstart.cta")}</span>
                      </Link>
                    </div>

                    <div className="row mt-n10">
                      {featuresCloud.map((elm, i) => (
                        <div key={i} className="col-lg-6 d-flex mt-10">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            {t(elm.textKey)}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </section>

          </main>

          <footer className="page-section footer bg-gray-light-1 pb-30">
            <FooterPreview />
          </footer>

        </div>
      </div>
    </>
  );
}