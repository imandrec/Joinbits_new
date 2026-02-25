"use client";

import FooterPreview from "@/components/footers/FooterPreview";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";
import { menuItems } from "@/data/menu";
import { useTranslation } from "react-i18next";

export default function MainAboutPage1() {
  const { t } = useTranslation();

  const faqItemsRaw = t("faqPage.items", { returnObjects: true });
  const faqItems = Array.isArray(faqItemsRaw) ? faqItemsRaw : [];

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>

          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/page-title-bg-3.jpg)",
                }}
              >
                <>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                  <div className="container position-relative pt-50">
                    <div className="text-center">
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                          <h1 className="hs-title-1 mb-0">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text={t("faqPage.heroTitle")} />
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </ParallaxContainer>
            </section>

            <section className="page-section pt-0">
              <div className="container relative wow fadeInUp">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    {faqItems.map((elm, i) => (
                      <React.Fragment key={i}>
                        <hr className="mb-30" />
                        <h4 className="mb-20">{elm.question}</h4>
                        <p>{elm.answer}</p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <hr className="mt-0 mb-0" />

            <section className="page-section">
              <div className="container position-relative">
                <div className="position-relative">
                  <div
                    className="decoration-21 d-none d-lg-block"
                    data-rellax-y=""
                    data-rellax-speed="0.7"
                    data-rellax-percentage="0.5"
                  >
                    <Image
                      src="/assets/images/decoration-3.svg"
                      className="svg-shape"
                      width={148}
                      height={148}
                      alt=""
                    />
                  </div>
                </div>

                <div className="row wow fadeInUp">
                  <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                    <p className="section-descr mb-0">{t("faqPage.ctaText")}</p>
                  </div>

                  <div className="col-md-4 col-lg-3 text-md-end">
                    <div className="local-scroll">
                      <Link
                        href="/contact"
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("common.contactUs")}</span>
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
