export const menuItems = [
  {
    titleKey: "menu.home",
    href: "/"
  },

  // ✅ SERVICES traducible completo
  {
    titleKey: "menu.services.title",
    subMenu: [
      {
        links: [
          {
            href: "/web-development",
            textKey: "menu.services.webDevelopment"
          },
          {
            href: "/custom-software",
            textKey: "menu.services.customSoftware"
          },
          {
            href: "/cloud-integration",
            textKey: "menu.services.cloudIntegration"
          }
        ]
      }
    ]
  },
  {
    titleKey: "menu.consulting",
    href: "/consulting"
  },
  {
    titleKey: "menu.about",
    href: "/about"
  }
];