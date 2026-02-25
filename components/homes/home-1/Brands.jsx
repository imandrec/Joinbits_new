"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function Brands() {
const { t } = useTranslation();

  const techStack = [
    { name: ".NET", icon: "💜" },
    { name: "Java", icon: "☕" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Azure", icon: "☁️" },
    { name: "AWS", icon: "🌩️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⎈" },
  ];

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <h2 className="section-title-tiny mb-40">
             {t("brands.title")}
          </h2>

          <div className="row justify-content-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-md-3 mb-30 d-flex justify-content-center"
              >
                <div
                  className="p-4 bg-gray-light-1 rounded-2 text-center"
                  style={{ width: "100%" }}
                >
                  <div style={{ fontSize: "28px" }}>{tech.icon}</div>
                  <div className="mt-10 fw-bold">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

