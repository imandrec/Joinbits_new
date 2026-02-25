"use client";
import Footer1 from "@/components/footers/FooterPreview";

import dynamic from "next/dynamic";
const onePage = false;
const dark = false;

import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Features from "@/components/homes/home-1/Features";
import Split from "@/components/homes/home-1/Split";
import Image from "next/image";
import { featuresListData } from "@/data/features";
import { progressData } from "@/data/skills";
import Link from "next/link";
import { menuItems } from "@/data/menu";

import { useTranslation } from "react-i18next";

export default function CustomSoftwarePage() {
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
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-7.jpg)",
                }}
              >
                <div className="container position-relative pt-50">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">

                        <h1 className="hs-title-1 mb-30">
                          <span className="wow charsAnimIn" data-splitting="chars">
                            <AnimatedText text={t("customsoftware.hero.title")} />
                          </span>
                        </h1>

                        <p className="section-descr mb-40 mb-sm-30 text-white opacity-085">
                          {t("customsoftware.hero.subtitle")}
                        </p>

                        {/* Feature List */}
                        <div
                          className="mt-n10 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              {t("customsoftware.hero.bullets.0")}
                            </div>
                          </div>

                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              {t("customsoftware.hero.bullets.1")}
                            </div>
                          </div>

                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              {t("customsoftware.hero.bullets.2")}
                            </div>
                          </div>
                        </div>
                        {/* End Feature List */}

                        <div className="local-scroll mt-40">
                          <Link
                            href="/contact"
                            className="btn btn-mod btn-large btn-round btn-hover-anim"
                          >
                            <span>{t("customsoftware.hero.cta")}</span>
                          </Link>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                </div>
              </ParallaxContainer>
            </section>

            {/* INTRO */}
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 mb-xs-50">
                    <div className="call-action-4-images">
                      <div className="call-action-4-image-1">
                        <Image
                          src="/assets/images/demo-strong/section-image-1.jpg"
                          alt={t("customsoftware.images.alt1")}
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>

                      <div
                        className="call-action-4-image-2"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.25"
                      >
                        <Image
                          src="/assets/images/demo-strong/section-image-2.jpg"
                          alt={t("customsoftware.images.alt2")}
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={0}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
                    <div className="wow linesAnimIn" data-splitting="lines">
                      <h2 className="section-title-small mb-20">
                        {t("customsoftware.intro.title")}
                      </h2>

                      <p className="lead mt-0 mb-30">
                        {t("customsoftware.intro.lead")}
                      </p>

                      <p className="text-gray mb-40">
                        {t("customsoftware.intro.body")}
                      </p>

                      <div className="row mt-n20">
                        <div className="col-md-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            {t("customsoftware.intro.bullets.0")}
                          </div>
                        </div>

                        <div className="col-md-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            {t("customsoftware.intro.bullets.1")}
                          </div>
                        </div>

                        <div className="col-md-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            {t("customsoftware.intro.bullets.2")}
                          </div>
                        </div>

                        <div className="col-md-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            {t("customsoftware.intro.bullets.3")}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="local-scroll wow fadeInUp mt-40" data-wow-offset={0}>
                      <Link
                        href="/contact"
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("customsoftware.intro.cta")}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES BAND */}
            <section
              className="page-section bg-dark bg-dark-alpha-70 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-4.jpg)",
              }}
            >
              <Features />
            </section>

            {/* PROCESS */}
            <section className="page-section">
              <div className="container position-relative">
                <div className="row mb-n30">
                  <div className="col-md-12 col-lg-3 mb-md-50">
                    <h2 className="section-title-small mb-20">
                      {t("customsoftware.process.title")}
                    </h2>
                    <p className="text-gray mb-0">
                      {t("customsoftware.process.subtitle")}
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 mb-30">
                    <div className="work-process-item text-center pt-20">
                      <div className="work-process-icon">
                        <i className="mi-chat size-24" />
                      </div>
                      <h3 className="work-process-title">
                        {t("customsoftware.process.steps.0")}
                      </h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-3 mb-30">
                    <div className="work-process-item text-center pt-20">
                      <div className="work-process-icon">
                        <i className="mi-layers size-24" />
                      </div>
                      <h3 className="work-process-title">
                        {t("customsoftware.process.steps.1")}
                      </h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-3 mb-30">
                    <div className="work-process-item text-center pt-20">
                      <div className="work-process-icon">
                        <i className="mi-check size-24" />
                      </div>
                      <h3 className="work-process-title">
                        {t("customsoftware.process.steps.2")}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SPLIT SECTION */}
            <section className="pt-30">
              <div id="paddingRightContainer" className="container" />
              <div className="row g-0">
                <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
                  <div
                    id="paddingRight"
                    className={`split-column-right ${
                      dark ? "bg-dark-2" : "bg-dark-1"
                    } light-content position-relative d-flex align-items-center`}
                    data-rellax-y=""
                    data-rellax-speed="0.5"
                    data-rellax-percentage="0.5"
                  >
                    <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                      <Image
                        width={192}
                        height={222}
                        src="/assets/images/demo-strong/decoration.svg"
                        alt=""
                      />
                    </div>

                    <div>
                      <h2 className="section-title mb-30">
                        {t("customsoftware.split.title")}{" "}
                        <span className="font-alt">{t("customsoftware.split.titleAccent")}</span>.
                      </h2>

                      <p className="mb-50">
                        {t("customsoftware.split.body")}
                      </p>

                      {/* keep featuresListData as-is (if you want it translated, tell me) */}
                      <div className="row mt-n20">
                        {featuresListData.map((item, index) => (
                          <div
                            key={index}
                            className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                          >
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">{item.text}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
                  <div className="split-image-left">
                    <Image
                      width={1100}
                      height={930}
                      src="/assets/images/demo-strong/split-image-2.jpg"
                      alt={t("customsoftware.images.alt3")}
                    />
                    <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                      <Image
                        src="/assets/images/demo-strong/circle-text.svg"
                        width={138}
                        height={138}
                        alt="JoinBits"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Split />
            </section>

            {/* SKILLS SECTION */}
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                    <h3 className="section-title mb-30">
                      {t("customsoftware.skills.title")}
                    </h3>
                    <p className="text-gray mb-0">
                      {t("customsoftware.skills.body")}
                    </p>
                  </div>

                  <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                    {progressData.map((elm, i) => (
                      <div key={i} className="progress tpl-progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${elm.value}%` }}
                        >
                          <div>{elm.label}, %</div>
                          <span>{elm.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

            {/* CTA */}
            <section className={`page-section ${dark ? "bg-dark-1 light-content z-index-1" : ""}`}>
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
                      {t("customsoftware.cta.text")}
                    </p>
                    <div className="local-scroll">
                      <Link
                        href={`/contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("customsoftware.cta.button")}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}

