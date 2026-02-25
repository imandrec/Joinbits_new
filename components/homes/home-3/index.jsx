import React from "react";

import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import Link from "next/link";
import ContactDark from "./ContactDark";
import Image from "next/image";
import { qualities } from "@/data/features";
import AnimatedText from "@/components/common/AnimatedText";
export default function Home3({ onePage = false, dark = false }) {
  return (
    <>
      
      <section
        className={`page-section   scrollSpysection  ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-2"
        } `}
        id="blog"
      >
        <Blog />
      </section>
      <section
        className={`small-section   ${
          dark
            ? "bg-dark-2 bg-dark-alpha-90 light-content"
            : "bg-gray-light-2 bg-light-alpha-90 "
        } bg-scroll`}
        style={{
          backgroundImage:
            "url(/assets/images/demo-brutalist/section-bg-3.jpg)",
        }}
      >
        <div
          className={
            dark ? "section-gradient-top-dark" : "section-gradient-top"
          }
        />
        <div className="position-absolute top-0 start-0 w-100">
          <div className="container">
            {/* Horizontal Line */}
            <hr className="black" />
            {/* End Horizontal Line */}
          </div>
        </div>
        <NewsLetter />{" "}
      </section>
    
    </>
  );
}
