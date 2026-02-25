"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function Service() {
  const { t } = useTranslation();

  return (
    <>
      <ul
        className="nav nav-tabs tpl-alt-tabs mb-20 mb-xs-0 wow fadeInUp"
        role="tablist"
      >
        {/* Tab 1 */}
        <li className="nav-item" role="presentation">
          <a
            href="#service-ai-cloud"
            className="nav-link active"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="true"
          >
            <div className="alt-tabs-icon">
              {/* keep your SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 58 64" aria-hidden="true">
                <path d="M40.875 10c8.625 0 15.125 5.375 15.125 14.5 0 3.875-1.625 8.875-5.125 13.125s-5.625 6.5-12.5 11-10.375 5.375-10.375 5.375-3.5-0.875-10.375-5.375-9-6.75-12.5-11-5.125-9.25-5.125-13.125c0-9.125 6.5-14.5 15.125-14.5 4.875 0 10.25 2.25 12.875 6.625 2.625-4.375 8-6.625 12.875-6.625zM49.375 36.375c1.5-1.75 2.75-3.875 3.5-6.125 0.75-2 1.125-3.875 1.125-5.75 0-3.75-1.25-7-3.625-9.25-1.125-1-2.5-1.875-4.125-2.375-1.625-0.625-3.5-0.875-5.375-0.875-4.75 0-9.125 2.25-11.125 5.625l-1.75 2.875-1.75-2.875c-2-3.375-6.375-5.625-11.125-5.625-1.875 0-3.75 0.25-5.375 0.875-1.625 0.5-3 1.375-4.125 2.375-2.375 2.25-3.625 5.5-3.625 9.25 0 1.875 0.375 3.75 1.125 5.75 0.75 2.25 2 4.375 3.5 6.125 3.375 4 5.25 6.125 12.125 10.625 5 3.375 8.125 4.5 9.25 4.875 1.125-0.375 4.25-1.5 9.25-4.875 6.875-4.5 8.75-6.625 12.125-10.625z" />
              </svg>
            </div>
            {t("aboutmain.serviceTabs.tabs.aiCloud")}
          </a>
        </li>

        {/* Tab 2 */}
        <li className="nav-item" role="presentation">
          <a
            href="#service-automation"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={60} height={64} viewBox="0 0 60 64" aria-hidden="true">
                <path d="M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z" />
              </svg>
            </div>
            {t("aboutmain.serviceTabs.tabs.automation")}
          </a>
        </li>

        {/* Tab 3 */}
        <li className="nav-item" role="presentation">
          <a
            href="#service-software"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={64} viewBox="0 0 50 64" aria-hidden="true">
                <path d="M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z" />
              </svg>
            </div>
            {t("aboutmain.serviceTabs.tabs.software")}
          </a>
        </li>

        {/* Tab 4 */}
        <li className="nav-item" role="presentation">
          <a
            href="#service-staffing"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={64} viewBox="0 0 48 64" aria-hidden="true">
                <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125z" />
              </svg>
            </div>
            {t("aboutmain.serviceTabs.tabs.staffing")}
          </a>
        </li>

        {/* Tab 5 */}
        <li className="nav-item" role="presentation">
          <a
            href="#service-delivery"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={64} viewBox="0 0 48 64" aria-hidden="true">
                <path d="M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125z" />
              </svg>
            </div>
            {t("aboutmain.serviceTabs.tabs.delivery")}
          </a>
        </li>
      </ul>

      <div className="tab-content tpl-tabs-cont">
        {/* AI & Cloud */}
        <div className="tab-pane fade show active" id="service-ai-cloud" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30 wow linesAnimIn" data-splitting="lines">
              <blockquote className="mt-0 mb-0">
                <p className="mb-20 mb-sm-10">
                  {t("aboutmain.serviceTabs.panes.aiCloud.quote")}
                </p>
                <footer>{t("aboutmain.serviceTabs.panes.aiCloud.author")}</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30 wow linesAnimIn" data-splitting="lines">
              {t("aboutmain.serviceTabs.panes.aiCloud.p1")}
            </div>
            <div className="col-md-6 col-lg-4 wow linesAnimIn" data-splitting="lines">
              {t("aboutmain.serviceTabs.panes.aiCloud.p2")}
            </div>
          </div>
        </div>

        {/* Automation */}
        <div className="tab-pane fade" id="service-automation" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>{t("aboutmain.serviceTabs.panes.automation.quote")}</p>
                <footer>{t("aboutmain.serviceTabs.panes.automation.author")}</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              {t("aboutmain.serviceTabs.panes.automation.p1")}
            </div>
            <div className="col-md-6 col-lg-4">
              {t("aboutmain.serviceTabs.panes.automation.p2")}
            </div>
          </div>
        </div>

        {/* Software */}
        <div className="tab-pane fade" id="service-software" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>{t("aboutmain.serviceTabs.panes.software.quote")}</p>
                <footer>{t("aboutmain.serviceTabs.panes.software.author")}</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              {t("aboutmain.serviceTabs.panes.software.p1")}
            </div>
            <div className="col-md-6 col-lg-4">
              {t("aboutmain.serviceTabs.panes.software.p2")}
            </div>
          </div>
        </div>

        {/* Staffing */}
        <div className="tab-pane fade" id="service-staffing" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>{t("aboutmain.serviceTabs.panes.staffing.quote")}</p>
                <footer>{t("aboutmain.serviceTabs.panes.staffing.author")}</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              {t("aboutmain.serviceTabs.panes.staffing.p1")}
            </div>
            <div className="col-md-6 col-lg-4">
              {t("aboutmain.serviceTabs.panes.staffing.p2")}
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className="tab-pane fade" id="service-delivery" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>{t("aboutmain.serviceTabs.panes.delivery.quote")}</p>
                <footer>{t("aboutmain.serviceTabs.panes.delivery.author")}</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              {t("aboutmain.serviceTabs.panes.delivery.p1")}
            </div>
            <div className="col-md-6 col-lg-4">
              {t("aboutmain.serviceTabs.panes.delivery.p2")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}