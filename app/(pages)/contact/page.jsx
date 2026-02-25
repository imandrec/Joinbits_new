"use client";

import FooterPreview from "@/components/footers/FooterPreview";

import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header1Multipage from "@/components/headers/Header1Multipage";

import React from "react";
import { menuItems } from "@/data/menu";
import Faq from "@/components/common/Faq";
import Contact from "@/components/homes/home-5/Contact";
import Map from "@/components/common/Map";
import { useTranslation } from "react-i18next";

export default function MainAboutPage1() {
  const { t } = useTranslation();
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
                    "url(/assets/images/full-width-images/page-title-bg-4.jpg)",
                }}
              >
                <>
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-white" />
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                {t("contactTitle")}
                              </span>
                            </h1>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </>
                </>
              </ParallaxContainer>
            </section>
            <>
              {/* Contact Section */}
              <section className="page-section pt-0" id="contact">
                <Contact />
              </section>
              <div className="google-map">
                <Map />
              </div>
              {/* End Contact Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* FAQ Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  {/* Decorative Waves */}

                  {/* End Decorative Waves */}
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        {t("faq.titlecontact")}
                      </h3>
                      <p className="text-gray mb-0">
                        {t("faq.descriptioncontact")}
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Accordion */}
                      <Faq />
                      {/* End Accordion */}
                    </div>
                  </div>
                </div>
              </section>
            </>
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
