"use client";

// AboutMainPage1.tsx (About Us for JoinBits)
// i18n keys prefix: aboutmain.*

import FooterPreview from "@/components/footers/FooterPreview";

import dynamic from "next/dynamic";
const onePage = false;
const dark = false;

import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import Service from "@/components/homes/home-10/Service";
import Steps from "@/components/homes/home-7/Steps";
import { menuItems } from "@/data/menu";

import { useTranslation } from "react-i18next";

export default function AboutMainPage1() {
  const { t } = useTranslation();

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>

          <main id="main">
            <ParallaxContainer
              className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-10.jpg)",
              }}
            >
              <div className="container position-relative pt-50 pb-100 pb-sm-20">
                <div className="text-center">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      <h1 className="hs-title-1 mb-30">
                        <span className="wow charsAnimIn" data-splitting="chars">
                          <AnimatedText text={t("aboutmain.hero.title")} />
                        </span>
                      </h1>

                      <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                          <p
                            className="section-descr mb-0 wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1.2s"
                          >
                            {t("aboutmain.hero.subtitle")}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Page Title */}
                  </div>
                </div>
              </div>
            </ParallaxContainer>

            {/* Capabilities */}
            <section
              className={`page-section pt-0 px-2 px-lg-0 scrollSpysection ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="capabilities"
            >
              <div className="container position-relative pt-30 bg-white round mt-n120 mt-sm-n60">
                <Service />
              </div>
            </section>

            <hr className="mt-0 mb-0" />

            {/* Why JoinBits */}
            <section className="page-section">
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-5 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
                    <div className="w-100">
                      <h2 className="section-caption mb-30 mb-xs-10">
                        {t("aboutmain.why.caption")}
                      </h2>

                      <h3 className="section-title mb-30">
                        {t("aboutmain.why.title")}
                      </h3>

                      <p className="section-descr mb-50 mb-sm-30">
                        {t("aboutmain.why.description")}
                      </p>

                      <div className="row mt-sm-n10">
                        <div className="col-md-6 mt-sm-10">
                          <div className="number-3-title black">
                            {t("aboutmain.why.stats.projects.value")}
                          </div>
                          <div className="number-3-descr">
                            {t("aboutmain.why.stats.projects.label")}
                          </div>
                        </div>

                        <div className="col-md-6 mt-sm-10">
                          <div className="number-3-title black">
                            {t("aboutmain.why.stats.response.value")}
                          </div>
                          <div className="number-3-descr">
                            {t("aboutmain.why.stats.response.label")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="col-lg-7 col-xl-6 offset-xl-1 d-flex align-items-center">
                    <div className="position-relative">
                      <div className="position-relative overflow-hidden">
                        <Image
                          src="/assets/images/services-image.jpg"
                          className="image-fullwidth relative"
                          width={960}
                          height={700}
                          alt={t("aboutmain.images.teamAlt")}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Image */}
                </div>
              </div>
            </section>

            {/* Values */}
            <section
              className="page-section bg-gray-light-1 bg-light-alpha-70 bg-scroll pb-0 mb-100 mb-md-70 mb-sm-50 z-index-1"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-9.jpg)",
              }}
            >
              <div className="container position-relative">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <h2 className="section-caption mb-xs-10 wow fadeInUp">
                      {t("aboutmain.values.caption")}
                    </h2>

                    <h3 className="section-title mb-60 mb-sm-40">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        {t("aboutmain.values.title")}
                      </span>
                    </h3>

                    <div className="overflow-hidden mb-n100 mb-md-n70 mb-sm-n50">
                      <Image
                        src="/assets/images/about-image-2.jpg"
                        className="wow scaleOutIn"
                        width={1200}
                        height={675}
                        data-wow-offset={50}
                        alt={t("aboutmain.images.valuesAlt")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Steps */}
            <section className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}>
              <Steps />
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

            {/* CTA */}
            <section
              className={`page-section ${dark ? "bg-dark-1 light-content z-index-1" : ""}`}
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
                    alt={t("aboutmain.images.decorationAlt")}
                  />
                </div>

                <div className="row text-center wow fadeInUp">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-descr mb-50 mb-sm-30">
                      {t("aboutmain.cta.description")}
                    </p>

                    <div className="local-scroll">
                      <Link
                        href={`/contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("aboutmain.cta.button")}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

               {/* Footer */}
                    <footer className="page-section footer bg-gray-light-1 pb-30">
                      <FooterPreview />
                    </footer>
                    {/* End Footer */}
        </div>
      </div>
    </>
  );
}