"use client";
import FooterPreview from "@/components/footers/FooterPreview";

import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
import ParallaxContainer from "@/components/common/ParallaxContainer";

import Service from "@/components/homes/home-1/Service";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { services6 } from "@/data/services";
import Benefits2 from "@/components/homes/home-1/Benefits2";

import Link from "next/link";
import { featuresConsulting } from "@/data/features";
import Pricing from "@/components/homes/home-1/Pricing";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { useTranslation } from "react-i18next";

export default function MainServicesPage3() {
   const { t } = useTranslation();
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-11.jpg)",
              }}
            >
              <div className="container position-relative pt-50 pb-100 pb-sm-20">
                {/* Section Content */}
                <div className="text-center">
                  <div className="row">
                    {/* Page Title */}
                    <div className="col-md-8 offset-md-2">
                      <h1 className="hs-title-1 mb-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text={t("consultingPageMain.heroTitle")} />
                        </span>
                      </h1>
                      <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                          <p className="section-descr mb-0 wow fadeInUp">
  {t("consultingPageMain.heroDescription")}
</p>
                        </div>
                      </div>
                    </div>
                    {/* End Page Title */}
                  </div>
                </div>
                {/* End Section Content */}
              </div>
            </ParallaxContainer>
            <section className="page-section pt-0" id="services">
              <div className="container position-relative mt-n120 mt-sm-n60">
                <div className="row mb-n30">
                  {services6.map((elm, i) => (
                    <div
                      key={i}
                      className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
                    >
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={elm.width}
                              height={elm.height}
                              viewBox={`0 0 ${elm.width} ${elm.height}`}
                              aria-hidden="true"
                            >
                              <path d={elm.path} />
                            </svg>
                          </div>
                          <h3 className="services-3-title">{t(elm.titleKey)}</h3>
<div className="services-3-text">{t(elm.textKey)}</div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

             <section
                            className={`page-section  scrollSpysection  ${
                              dark ? "bg-dark-1 light-content" : ""
                            }`}
                            id="services"
                          >
                            {" "}
                            <Service />
                          </section>

                      
           
            <section className="full-wrapper">
              <div className="page-section bg-border-gradient pt-0 pb-0 scroll-nav-invisible z-index-1">
                <div className="page-section container position-relative scroll-nav-invisible">
                  {/* Decoration Image */}
                  <div
                    className="decoration-image-1"
                    data-rellax-y=""
                    data-rellax-speed="0.5"
                    data-rellax-percentage="0.5"
                  >
                    <Image
                      src="/assets/images/demo-gradient/section-image-6.jpg"
                      alt="Image Description"
                      width={336}
                      height={406}
                    />
                  </div>
                  {/* End Decoration Image */}
                  {/* Decoration Image */}
                  <div
                    className="decoration-image-2"
                    data-rellax-y=""
                    data-rellax-speed="-0.5"
                    data-rellax-percentage="0.4"
                  >
                    <Image
                      src="/assets/images/demo-gradient/section-image-7.jpg"
                      alt="Image Description"
                      width={350}
                      height={256}
                    />
                  </div>
                  {/* End Decoration Image */}
                  <div className="row text-center">
                    <div className="col-md-8 offset-md-2">
                      <p className="section-descr mb-50 mb-sm-40">
  {t("consultingPageMain.ctaDescription")}
</p>
                      <div className="local-scroll">
                        <Link
                          href={`/contact`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>{t("common.contactUs")}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section">
              <Benefits2 />
            </section>
            <section
              className="page-section bg-scroll light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-gradient/section-bg-3.jpg)",
              }}
            >
              <div className="bg-overlay bg-gradient-dark-alpha-2 d-none d-md-block" />
              {/* End Desktop Overlay */}
              {/* Mobile Overlay */}
              <div className="bg-overlay bg-dark-1 opacity-09 d-md-none" />
              {/* End Mobile Overlay */}
              <div className="container position-relative">
                <div className="row wow fadeInUp">
                  <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                    <h2 className="section-title mb-40 mb-sm-30">
  {t("consultingPageMain.jumpstartTitle")}
</h2>
                    <p className="mb-50 mb-sm-40">
  {t("consultingPageMain.jumpstartDescription")}
</p>
                    <div className="local-scroll mb-70 mb-sm-50">
                      <Link
                        href={`/contact`}
                        className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("commonConsulting.contactUs")}</span>
                      </Link>
                    </div>
                    {/* Features List */}
                    <div className="row mt-n10">
                      {/* Features List Item */}
                      {featuresConsulting.map((elm, i) => (
                        <div key={i} className="col-lg-6 d-flex mt-10">
                          <div className="features-list-icon ">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">{t(elm.textKey)}</div>
                        </div>
                      ))}
                      {/* End Features List Item */}
                    </div>
                    {/* End Features List */}
                  </div>
                </div>
              </div>
            </section>
              <section className="page-section pt-0" id="team">
                            <div className="container">
                              <div
                                className="row position-relative mt-n40 mb-80 mb-sm-40 wow fadeInUp"
                                data-wow-delay="0.2s"
                              >
                                {/* Decorative Waves */}
                                <div
                                  className="decoration-8 d-none d-sm-block"
                                  data-rellax-y=""
                                  data-rellax-speed="-0.6"
                                  data-rellax-percentage="-0.17"
                                >
                                  <Image
                                    src="/assets/images/decoration-1.svg"
                                    alt=""
                                    width={159}
                                    height={74}
                                  />
                                </div>
                                {/* End Decorative Waves */}
                                {/* Team item */}
                               
                                {/* End Team item */}
                              </div>
                              {/* Divider */}
                              <hr className="mt-0 mb-80 mb-sm-40" />
                              {/* End Divider */}
                              <div className="row">
                                <div className="col-lg-4 mb-md-50 mb-xs-30">
                                 <div className="lead-alt wow linesAnimIn">
  {t("consultingPageMain.missionTitle")}
</div>
                                </div>
                                <div
                                  className="col-lg-8 wow linesAnimIn"
                                  data-wow-offset={0}
                                  data-splitting="lines"
                                >
                                  <p className="mb-0">
  {t("consultingPageMain.missionDescription")}
</p>
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
        </div>{" "}
      </div>
    </>
  );
}
