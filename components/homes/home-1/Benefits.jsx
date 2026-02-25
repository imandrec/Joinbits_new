"use client";

import { featureItemsHome } from "@/data/features";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <div className="container position-relative">
      {/* Grid */}
      <div className="row">
        {/* Text */}
        <div className="col-md-12 col-lg-3 mb-md-50">
          <h2 className="section-caption mb-xs-10">{t("benefitsHome.caption")}</h2>
          <h3 className="section-title-small mb-40">{t("benefitsHome.title")}</h3>
          <div className="section-line" />
          <p className="mt-20 text-muted">{t("benefitsHome.description")}</p>
        </div>
        {/* End Text */}

        {/* Feature Items */}
        {featureItemsHome.map((item) => (
          <div key={item.id} className={item.className}>
            <div className="alt-features-item border-left mt-0">
              <div className="alt-features-icon">
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
                  <path d={item.path} />
                </svg>
              </div>

              <h4 className="alt-features-title">{t(item.titleKey)}</h4>
              <div className="alt-features-descr">{t(item.descriptionKey)}</div>
            </div>
          </div>
        ))}
        {/* End Feature Items */}
      </div>
      {/* End Grid */}
    </div>
  );
}