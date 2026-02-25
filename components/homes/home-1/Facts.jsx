import { numberItemsWebDev } from "@/data/facts";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Facts() {
  const { t } = useTranslation();

  return (
    <div className="col-lg-7 offset-lg-1">
      <div className="row mt-n50 mt-xs-n30">
        {numberItemsWebDev.map((item) => (
          <div
            key={item.id}
            className="col-sm-6 mt-50 mt-xs-30 wow fadeInUp"
            data-wow-delay={item.delay}
          >
            <div className="number-item">
              <div className="number-item-number">
                {item.title}
              </div>
              <div className="number-item-descr">
                {t(item.descriptionKey)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}