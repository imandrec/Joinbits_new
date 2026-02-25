"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Nav2({ links }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState([-1, -1]);
  const pathname = usePathname();

  const seg = (p) => (p || "").split("/")[1] || "";
  const currentSeg = seg(pathname);
  const safeArray = (v) => (Array.isArray(v) ? v : []);

  const isLinkActive = (href) => seg(href) === currentSeg;

  const isSubMenuActive = (subMenu) =>
    safeArray(subMenu).some((group) =>
      safeArray(group?.links).some((l) => isLinkActive(l?.href))
    );

  const isSubItemsActive = (subItems) =>
    safeArray(subItems).some((group) =>
      safeArray(group?.links).some((l) => isLinkActive(l?.href))
    );

  const toggleParent1 = (i) => {
    setMenuOpen((prev) => [prev[0] === i ? -1 : i, prev[1]]);
  };

  const toggleParent2 = (i) => {
    setMenuOpen((prev) => [prev[0], prev[1] === i ? -1 : i]);
  };

  useEffect(() => {
    setTimeout(() => scrollToElement(), 1000);
    init_classic_menu_resize();
    window.addEventListener("resize", init_classic_menu_resize);
    return () =>
      window.removeEventListener("resize", init_classic_menu_resize);
  }, []);

const renderTitle = (item) =>
  item.titleKey
    ? t(item.titleKey, { defaultValue: item.title || item.titleKey })
    : item.title;

const renderLinkText = (link) =>
  link.textKey
    ? t(link.textKey, { defaultValue: link.text || link.label || link.textKey })
    : link.text ?? link.label;

  return (
    <>
      {safeArray(links)
        .slice(0, 3)
        .map((item, index) => {
          const hasSubMenu = safeArray(item?.subMenu).length > 0;

          const active =
            item?.href
              ? isLinkActive(item.href)
              : hasSubMenu
              ? isSubMenuActive(item.subMenu)
              : false;

          return (
            <li
              className={menuOpen[0] === index ? "js-opened" : ""}
              key={index}
            >
              {!hasSubMenu && item?.href ? (
                <Link className={active ? "active" : ""} href={item.href}>
                  {renderTitle(item)}
                </Link>
              ) : (
                <>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleParent1(index);
                    }}
                    className={`mn-has-sub ${active ? "active" : ""}`}
                  >
                    {renderTitle(item)} <i className="mi-chevron-down" />
                  </a>

                  <ul
                    className={`mn-sub mn-has-multi ${
                      menuOpen[0] === index ? "mobile-sub-active" : ""
                    }`}
                  >
                    {safeArray(item?.subMenu).map((subItem, subIndex) => (
                      <li className="mn-sub-multi" key={subIndex}>
                        {subItem?.title && (
                          <span className="mn-group-title">
                            {subItem.title}
                          </span>
                        )}
                        <ul>
                          {safeArray(subItem?.links).map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link
                                className={
                                  isLinkActive(link?.href) ? "active" : ""
                                }
                                href={link?.href || "#"}
                              >
                                {link?.icon && (
                                  <i className={link.icon} />
                                )}{" "}
                                {renderLinkText(link)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          );
        })}

      {safeArray(links)
        .slice(3, 5)
        .map((item, index) => {
          const itemIndex = index + 3;
          const hasSubItems = safeArray(item?.subItems).length > 0;

          const active =
            item?.href
              ? isLinkActive(item.href)
              : hasSubItems
              ? isSubItemsActive(item.subItems)
              : false;

          return (
            <li
              className={menuOpen[0] === itemIndex ? "js-opened" : ""}
              key={itemIndex}
            >
              {!hasSubItems && item?.href ? (
                <Link className={active ? "active" : ""} href={item.href}>
                  {renderTitle(item)}
                </Link>
              ) : (
                <>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      toggleParent1(itemIndex);
                    }}
                    href="#"
                    className={`mn-has-sub ${active ? "active" : ""}`}
                  >
                    {renderTitle(item)}{" "}
                    <i className="mi-chevron-down" />
                  </a>

                  <ul
                    className={`mn-sub ${
                      menuOpen[0] === itemIndex
                        ? "mobile-sub-active"
                        : ""
                    }`}
                  >
                    {safeArray(item?.subItems).map(
                      (subItem, subIndex) => (
                        <li key={subIndex}>
                          <ul>
                            {safeArray(subItem?.links).map(
                              (link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link
                                    className={
                                      isLinkActive(link?.href)
                                        ? "active"
                                        : ""
                                    }
                                    href={link?.href || "#"}
                                  >
                                    {renderLinkText(link)}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
            </li>
          );
        })}
    </>
  );
}