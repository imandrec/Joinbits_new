"use client";

import { useTranslation } from "react-i18next";
import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";
import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export default function Home1({ onePage = false, dark = false }) {
  const { t } = useTranslation();

  return (
    <>
      {/* ABOUT */}
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
                {t("webDevelopment.about.caption")}
              </h2>

              <h3 className="section-title mb-0">
                <AnimatedText text={t("webDevelopment.about.title")} />
              </h3>
            </div>

            <div className="col-md-5 offset-md-1 text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  {t("webDevelopment.about.link")}
                </a>
              ) : (
                <Link
                  href={`/main-pages-about-1${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  {t("webDevelopment.about.link")}
                </Link>
              )}
            </div>
          </div>

          <About />
        </div>
      </section>

     

      {/* RESULTS SECTION */}
      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-4 mb-md-60 mb-xs-50">
              <h2 className="section-title mb-20 wow fadeInUp">
                {t("webDevelopment.achievements.title")}
              </h2>

              <p className="section-descr mb-40 wow fadeInUp">
                {t("webDevelopment.achievements.description")}
              </p>

            </div>

            <Facts />
          </div>
        </div>
      </ParallaxContainer>
    </>
  );
}