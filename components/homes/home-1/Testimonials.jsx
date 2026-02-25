"use client";

import { testimonials } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <div className="container position-relative">
      <div className="pt-80 pb-80 pt-sm-70 pb-sm-70 px-4 bg-gray-light-1">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 wow fadeInUp">
            <div className="row">
              <div className="col-md-10 offset-md-1 text-center">
                <h2 className="section-title mb-70 mb-sm-40">
                  {t("testimonials.title")}
                  <span className="mark-decoration-1">
                    {" "}
                    {t("testimonials.highlight")}
                  </span>
                </h2>
              </div>
            </div>

            <div className="overflow-hidden">
              <Swiper
                rewind
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".snbp2",
                  nextEl: ".snbn2",
                }}
                watchSlidesProgress
                resizeObserver
                style={{
                  opacity: 1,
                  display: "block",
                }}
                className="testimonials-slider-1 owl-carousel owl-theme pb-xs-80 overflow-visible position-static"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide className="owl-item" key={index}>
                    <div>
                      <blockquote className="mb-0">
                        <div className="blockquote-icon" aria-hidden="true">
                          ”
                        </div>

                        {/* 🔥 Use translation keys */}
                        <p>{t(testimonial.quoteKey)}</p>

                        <div className="section-line mt-40" />

                        <footer className="ts1-author mt-20 clearfix">
                          <div className="ts1-author-img float-start">
                            <Image
                              className="rounded-circle"
                              width={44}
                              height={44}
                              src={testimonial.image}
                              alt={t("testimonials.imageAlt")}
                            />
                          </div>

                          <div className="overflow-hidden">
                            {t(testimonial.authorKey)}
                            <div className="small">
                              {t(testimonial.roleKey)}
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="owl-controls clickable">
                  <div className="owl-buttons">
                    <div className="owl-prev snbp2" role="button" tabIndex="0">
                      <span className="visually-hidden">
                        {t("testimonials.prev")}
                      </span>
                      <i className="mi-arrow-left" aria-hidden="true"></i>
                    </div>

                    <div className="owl-next snbn2" role="button" tabIndex="0">
                      <span className="visually-hidden">
                        {t("testimonials.next")}
                      </span>
                      <i className="mi-arrow-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}