"use client";

import Faq from "@/components/common/Faq";
import { faqsHome } from "@/data/faqs";

export default function Faqs() {
  return (
    <div className="call-action-2-text mb-50 mb-sm-40">
      <Faq faqData={faqsHome} />
    </div>
  );
}