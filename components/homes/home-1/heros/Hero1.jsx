"use client";

import AnimatedText from "@/components/common/AnimatedText";
import ModalVideo from "@/components/common/ModalVideo";
import { parallaxMouseMovement } from "@/utlis/parallax";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function HeroWebDevelopment() {
  const { t } = useTranslation();

  useEffect(() => {
    parallaxMouseMovement();
  }, []);

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        <div className="home-content text-start">
          <div className="row">
            {/* TEXT COLUMN */}
            <div className="col-md-6 d-flex align-items-center mb-sm-60">
              <div>
                <h2
                  className="section-caption mb-30 mb-xs-10 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  {t("webDevelopment.hero.caption")}
                </h2>

                <h1 className="hs-title-1 mb-30">
                  <AnimatedText text={t("webDevelopment.hero.title")} />
                </h1>

                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  {t("webDevelopment.hero.description")}
                </p>

                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  <a
                    href="#services"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
                  >
                    <span>{t("webDevelopment.hero.ctaPrimary")}</span>
                  </a>

                  <a
                    onClick={() => setOpen(true)}
                    className="link-hover-anim align-middle lightbox mfp-iframe mt-10"
                    data-link-animate="y"
                  >
                    <i className="icon-play size-13 me-1" />
                    {t("webDevelopment.hero.ctaSecondary")}
                  </a>
                </div>
              </div>
            </div>

            {/* IMAGE STACK */}
            <div className="col-md-5 offset-md-1 d-flex align-items-center">
              <div className="stack-images">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`stack-images-${num} parallax-mousemove`}
                    data-offset={num * 30}
                  >
                    <div
                      className="wow clipRightIn"
                      data-wow-delay={`${1 + num * 0.5}s`}
                      data-wow-duration="1.75s"
                    >
                      <Image
                        src={`/assets/images/stack-image-${num}.jpg`}
                        alt={t("webDevelopment.hero.imageAlt")}
                        width={600}
                        height={800}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* END IMAGE STACK */}
          </div>
        </div>

        {/* SCROLL DOWN */}
        <div className="local-scroll scroll-down-wrap-type-1 wow fadeInUp">
          <div className="container">
            <a href="#services" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">
                {t("webDevelopment.hero.scroll")}
              </div>
            </a>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}