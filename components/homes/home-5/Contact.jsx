"use client";
import { contactItems } from "@/data/contact";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const titleOf = (item) => (item.titleKey ? t(item.titleKey) : item.title);
  const textOf = (item) => (item.textKey ? t(item.textKey) : item.text);
  const linkTextOf = (link) => (link?.textKey ? t(link.textKey) : link?.text);

  return (
    <div className="container">
      <div className="row mt-n10 mb-60 mb-xs-40">
        <div className="col-md-10 offset-md-1">
          <div className="row">
            {contactItems.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-6 mb-md-30">
                <div className="contact-item wow fadeScaleIn">
                  <div className="ci-icon">
                    <i className={item.iconClass} />
                  </div>

                  <h4 className="ci-title">{titleOf(item)}</h4>
                  <div className="ci-text large">{textOf(item)}</div>

                  {item?.link?.url ? (
                    <div className="ci-link">
                      <a
                        href={item.link.url}
                        target={item.link.target}
                        rel={item.link.rel}
                      >
                        {linkTextOf(item.link)}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form wow fadeInUp wch-unset"
            data-wow-delay=".5s"
            id="contact_form"
          >
            <div className="row">
              {/* Full Name */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    {t("contact.form.fullNameLabel")}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="input-lg round form-control"
                    placeholder={t("contact.form.fullNamePlaceholder")}
                    minLength={3}
                    maxLength={100}
                    required
                    autoComplete="name"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Business Email */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {t("contact.form.businessEmailLabel")}{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder={t("contact.form.businessEmailPlaceholder")}
                    minLength={5}
                    maxLength={100}
                    required
                    autoComplete="email"
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="projectDetails" className="form-label">
                {t("contact.form.projectDetailsLabel")}{" "}
                <span className="text-danger">*</span>
              </label>
              <textarea
                name="projectDetails"
                id="projectDetails"
                className="input-lg round form-control"
                style={{ height: 160 }}
                placeholder={t("contact.form.projectDetailsPlaceholder")}
                minLength={10}
                maxLength={1000}
                required
                aria-required="true"
              />
            </div>

            <div className="row">
              <div className="col-sm-6">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0">
                  <i className="icon-info size-16" />{" "}
                  {t("contact.form.tipPrefix")}{" "}
                  <a href="/terms-and-conditions">{t("contact.form.terms")}</a>{" "}
                  {t("contact.form.and")} <a href="/privacy-policy">{t("contact.form.privacy")}</a>.
                </div>
              </div>

              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-10">
                  <button
                    type="submit"
                    id="submit_btn"
                    aria-controls="result"
                    className="submit_btn link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      {t("contact.form.send")}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="link-strong link-strong-hovered" aria-hidden="true">
                      {t("contact.form.send")}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div id="result" role="region" aria-live="polite" aria-atomic="true" />
          </form>
        </div>
      </div>
      {/* End Contact Form */}
    </div>
  );
}