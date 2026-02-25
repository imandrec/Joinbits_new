"use client";
import { features6 } from "@/data/features";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Benefits1() {
  const { t } = useTranslation();
  const isotopContainer = useRef();

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-md-6",
      layoutMode: "masonry",
    });

    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.layout();
    });
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Section Text */}
        <div className="col-lg-5 col-xl-5 offset-xl-1 d-flex align-items-center mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption mb-30 mb-xs-10">
              {t("benefits1.caption")}
            </h2>

            <h3 className="section-title mb-30">
              {t("benefits1.title")}
            </h3>

            <p className="section-descr mb-50 mb-sm-30">
              {t("benefits1.description")}
            </p>

            {/* Numbers */}
            <div className="row mt-sm-n10">
              <div className="col-md-6 mt-sm-10">
                <div className="number-3-title black">
                  {t("benefits1.metrics.fast.title")}
                </div>
                <div className="number-3-descr">
                  {t("benefits1.metrics.fast.descr")}
                </div>
              </div>

              <div className="col-md-6 mt-sm-10">
                <div className="number-3-title black">
                  {t("benefits1.metrics.senior.title")}
                </div>
                <div className="number-3-descr">
                  {t("benefits1.metrics.senior.descr")}
                </div>
              </div>
            </div>
            {/* End Numbers */}
          </div>
        </div>
        {/* End Section Text */}

        {/* Benefits Grid */}
        <div className="col-lg-7 col-xl-6 d-flex align-items-center order-lg-first">
          <div className="w-100 position-relative">
            <div ref={isotopContainer} className="row masonry mb-n30 wow fadeInUp">
              {features6.map((elm, i) => (
                <div
                  key={i}
                  className={`col-md-6 ${i === 1 ? "mt-50 mt-sm-0" : ""} mb-30`}
                >
                  <div className="alt-features-item box-shadow text-center mt-0">
                    <div className="alt-features-icon mb-10">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d={elm.svgPath} />
                      </svg>
                    </div>

                    {/* ✅ NO TOCO features5 */}
                    <h4 className="alt-features-title">
  {elm.titleKey ? t(elm.titleKey) : elm.title}
</h4>

<div className="alt-features-descr">
  {elm.descriptionKey ? t(elm.descriptionKey) : elm.description}
</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Benefits Grid */}
      </div>
    </div>
  );
}