"use client";

import Hero from "@/components/preview/Hero";
import ParallaxContainer from "@/components/common/ParallaxContainer";
const dark = false;

import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";

import FooterPreview from "@/components/footers/FooterPreview";
import Header1Multipage from "@/components/headers/Header1Multipage";

import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Testimonials2 from "@/components/homes/home-1/Teatimonials2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import Features from "@/components/homes/home-1/Features";
import Promo from "@/components/homes/home-1/Promo";
import Faq from "@/components/homes/home-1/Faq";

import React from "react";
import { menuItems } from "@/data/menu";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="theme-main">
      <div className="page" id="top">
        {/* Navigation Panel */}
        <nav className="main-nav transparent stick-fixed wow-menubar">
          <Header1Multipage links={menuItems} />
        </nav>

        <main id="main">
          {/* Home Section */}
          <ParallaxContainer
            style={{ backgroundImage: "url(/assets/images/background.jpg)" }}
            id="home"
          >
            <Hero />
          </ParallaxContainer>

          <hr className="mt-0 mb-0" />

          {/* About */}
          <section
            className={`page-section scrollSpysection ${
              dark ? "bg-dark-1 light-content" : ""
            }`}
            id="about"
          >
            <div className="container position-relative">
              <div className="row mb-60 mb-xs-30">
                <div className="col-md-6">
                  <h2 className="section-caption mb-xs-10">
                    {t("home.about.caption")}
                  </h2>

                  <h3 className="section-title mb-0">
                    <AnimatedText text={t("home.about.title")} />
                  </h3>
                </div>

                <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
                  <div
                    className="decoration-2 d-none d-md-block"
                    data-rellax-y=""
                    data-rellax-speed="0.7"
                    data-rellax-percentage="-0.2"
                  >
                    <Image
                      width="103"
                      height="223"
                      src="/assets/images/decoration-2.svg"
                      alt=""
                    />
                  </div>

                  <Link
                    href="/contact"
                    className="link-hover-anim underline align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      {t("home.about.linkPrimary")}{" "}
                      <i className="mi-arrow-right size-18" aria-hidden="true" />
                    </span>

                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      {t("home.about.linkHover")}{" "}
                      <i className="mi-arrow-right size-18" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>

              <About />
            </div>
          </section>

          {/* Benefits */}
          <section className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}>
            <Benefits />
          </section>

          {/* Testimonials */}
          <section className={`page-section pt-0 pb-0 ${dark ? "light-content" : ""}`}>
            {dark ? <Testimonials2 /> : <Testimonials />}
          </section>

          {/* Brands */}
          <section className={`page-section ${dark ? "light-content" : ""}`}>
            {dark ? <Brands2 /> : <Brands />}
          </section>

          {/* Features (dark background section) */}
          <section
            className="page-section bg-dark bg-dark-alpha-70 light-content"
            style={{
              backgroundImage:
                "url(/assets/images/full-width-images/section-bg-4.jpg)",
            }}
          >
            <Features />
          </section>

          {/* FAQ / How we work */}
          <section className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}>
            <div className="container position-relative">
              <div className="row">
                {/* Images */}
                <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
                  <div className="call-action-2-images">
                    <div
                      className="call-action-2-image-1"
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.7"
                    >
                      <Image
                        width={386}
                        height={400}
                        src="/assets/images/promo-3.jpg"
                        alt="Image Description"
                        className="wow scaleOutIn"
                        data-wow-duration="1.2s"
                        data-wow-offset={255}
                      />
                    </div>

                    <div className="call-action-2-image-2">
                      <Image
                        width={810}
                        height={512}
                        src="/assets/images/promo-4.jpg"
                        alt="Image Description"
                        className="wow scaleOutIn"
                        data-wow-duration="1.2s"
                        data-wow-offset={134}
                      />
                    </div>

                    <div
                      className="call-action-2-image-3"
                      data-rellax-y=""
                      data-rellax-speed="-0.5"
                      data-rellax-percentage="0.5"
                    >
                      <Image
                        width={386}
                        height={500}
                        src="/assets/images/promo-5.jpg"
                        alt="Image Description"
                        className="wow scaleOutIn"
                        data-wow-duration="1.2s"
                        data-wow-offset={0}
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="wow fadeInUp" data-wow-duration="1.2s" data-wow-offset={255}>
                    <h2 className="section-title mb-50 mb-sm-20">
                      {t("home.how.title")}
                    </h2>

                    <Faq />

                    <div className="local-scroll">
                      <Link
                        href={`/contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("home.how.button")}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

          {/* Promo */}
          <section className={`page-section ${dark ? "bg-dark-1 light-content" : ""}`}>
            <Promo />
          </section>
        </main>

        {/* Footer */}
        <footer className="page-section footer bg-gray-light-1 pb-30">
          <FooterPreview />
        </footer>
      </div>
    </div>
  );
}
