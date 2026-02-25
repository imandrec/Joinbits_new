"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/about-image.jpg"
              className="image-fullwidth relative"
              alt={t("about.imageAlt")}
            />
          </div>
          {/* End Image */}

          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt={t("about.decorationAlt")}
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>

      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">{t("about.blocks.scaleTitle")}</h4>
        <p className="text-gray">{t("about.blocks.scaleText")}</p>

        <h4 className="h5">{t("about.blocks.limitsTitle")}</h4>
        <p className="text-gray">{t("about.blocks.limitsText")}</p>
      </div>
    </div>
  );
}
