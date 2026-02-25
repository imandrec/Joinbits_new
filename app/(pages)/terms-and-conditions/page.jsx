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

// If you keep metadata, it should live in a SERVER component.
// For now, remove metadata export from this client page to avoid Next.js issues.
// export const metadata = { ... }

export default function TermsAndConditionsPage() {
  const { t } = useTranslation();

  // IMPORTANT: In .jsx, do NOT use `as string[]` (TypeScript).
  const s3Items = t("terms.sections.s3.items", { returnObjects: true });
  const s3List = Array.isArray(s3Items) ? s3Items : [];

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>

          <main id="main">
            {/* HERO SECTION */}
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
                              <AnimatedText text={t("terms.heroTitle")} />
                            </span>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </ParallaxContainer>
            </section>

            {/* CONTENT SECTION */}
            <section className="page-section pt-0">
              <div className="container relative wow fadeInUp">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <hr className="mb-30" />

                    <p>{t("terms.intro")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s1.title")}
                    </h3>
                    <p>{t("terms.sections.s1.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s2.title")}
                    </h3>
                    <p>{t("terms.sections.s2.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s3.title")}
                    </h3>
                    <ul>
                      {s3List.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s4.title")}
                    </h3>
                    <p>{t("terms.sections.s4.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s5.title")}
                    </h3>
                    <p>{t("terms.sections.s5.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s6.title")}
                    </h3>
                    <p>{t("terms.sections.s6.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s7.title")}
                    </h3>
                    <p>{t("terms.sections.s7.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s8.title")}
                    </h3>
                    <p>{t("terms.sections.s8.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s9.title")}
                    </h3>
                    <p>{t("terms.sections.s9.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s10.title")}
                    </h3>
                    <p>{t("terms.sections.s10.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s11.title")}
                    </h3>
                    <p>{t("terms.sections.s11.text")}</p>

                    <h3 className="mt-40 mb-15">
                      {t("terms.sections.s12.title")}
                    </h3>
                    <p className="mb-0">{t("terms.sections.s12.text")}</p>
                    <ul className="mb-0">
                      <li>
                        {t("terms.contact.emailLabel")}:{" "}
                        <span className="text-muted">
                          contact@joinbitstech.com
                        </span>
                      </li>
                    </ul>

                    <hr className="mt-40 mb-0" />
                  </div>
                </div>
              </div>
            </section>

            {/* CTA SECTION */}
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
                    <p className="section-descr mb-0">{t("terms.cta.text")}</p>
                  </div>
                  <div className="col-md-4 col-lg-3 text-md-end">
                    <div className="local-scroll">
                      <Link
                        href="/contact"
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>{t("terms.cta.button")}</span>
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
