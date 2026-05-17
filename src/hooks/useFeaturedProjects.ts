// hooks/useFeaturedProjects.ts

import { useState } from "react";

export const filters = [
  "Todos",
  "Diseño UX/UI",
  "Diseño UI"
];

export const projects = [
  {
    id: 1,

    title: "Sistema de Ventas Vendly",

    description:
      "Solución integral para gestión de ventas B2B para tiendas de tecnología",

    image: "/assets/images/sistemvendly.png",

    caseStudyUrl: "/projects/vendly",

    prototypeUrl:
      "https://www.figma.com/proto/Vyl9RwF8BdCPZjv34Kgcm7/Sistema-de-Ventas-Interno?node-id=525-1980&p=f&t=M5uCKFy8orMrkIHA-1&scaling=contain&content-scaling=responsive&page-id=525%3A1979&starting-point-node-id=525%3A1980",

    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],

    category: "Diseño UX/UI"
  },

  {
    id: 2,

    title: "El Pastel",

    description:
      "Landing Page para una panadería y pastelería local",

    image: "/assets/images/casoux.png",

    caseStudyUrl: "https://www.figma.com/proto/xXA6BrVoajztFFt1bXX8N3/Landign-Page-%22El-Pastel-con-Sabor%22?node-id=636-364&p=f&t=8RYBT3uoxBbPepSj-1&scaling=scale-down&content-scaling=fixed&page-id=543%3A328",

    prototypeUrl:
      "https://www.figma.com/proto/xXA6BrVoajztFFt1bXX8N3/Landign-Page-%22El-Pastel-con-Sabor%22?node-id=111-692&p=f&t=UIv1OsiZh6XNPytM-1&scaling=contain&content-scaling=responsive&page-id=68%3A290&starting-point-node-id=111%3A692",

    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "Proyecto conceptual", variant: "highlight" }
    ],

    category: "Diseño UX/UI"
  },

 {
    id: 3,

    title: "Página de aterrizaje para ingeniería técnica",

    description:
      "Landing Page para propuesta de concepto de interfaz de usuario ",

    image: "/assets/images/systronic.png",

    caseStudyUrl: "",

    prototypeUrl:
      "https://www.figma.com/proto/dh6w3F2oPluWOZUlmSpssh/Systronic?node-id=1-669&t=KQgZyv3UEE59FJfv-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A668",

    tags: [
      { label: "UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "Proyecto conceptual", variant: "highlight" }
    ],

    category: "Diseño UI"
  },

{
    id: 4,

    title: "Portafolio personal de UI/UX",

    description:
      "Sitio web de portafolio personal con una cautivadora temática espacial",

    image: "/assets/images/portafolio.png",

    caseStudyUrl: "",

    prototypeUrl:
      "https://www.figma.com/proto/VWJ3dEe0h1HxGWl12VBYn0/Portafolio-test?node-id=72-773&t=lITiDKDef5mcBKE2-1&scaling=min-zoom&content-scaling=fixed&page-id=72%3A772",

    tags: [
      { label: "UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "Next.js", variant: "highlight" }
    ],

    category: "Diseño UI"
  },
  {
    id: 5,

    title: "Cuenca Tour 360",

    description:
      "Sitio web para una agencia de viajes local",

    image: "/assets/images/cuencatour360.png",

    caseStudyUrl: "/projects/cuenca-tour-360",

    prototypeUrl:
      "https://www.cuencatour360.com/",

    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Odoo", variant: "default" },
      { label: "Agencia de viajes", variant: "highlight" }
    ],

    category: "Diseño UI"
  },

  {
    id: 6,

    title: "Food Fast App",

    description:
      "Prototipo de una aplicación de comida rápida",

    image: "/assets/images/appfastfood.png",

    caseStudyUrl: "",

    prototypeUrl:
      "https://www.figma.com/proto/XCXf3MEmxnJwXxK22vdNqy/App--Food-Fast?node-id=2-2&p=f&t=fLM3FLJifhNWOvXx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",

    tags: [
      { label: "UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "App", variant: "highlight" }
    ],

    category: "Diseño UI"
  },

    {
    id: 7,

    title: "Banner Prototipo",

    description:
      "Banner para redes sociales",

    image: "/assets/images/bannermockup.png",

    caseStudyUrl: "",

    prototypeUrl:
      "https://www.figma.com/proto/SmkYHkvA0Onh43N3JaMNdp/Prototipo-banner?node-id=24-28&p=f&t=PMbU9jjG5oNcsXMk-1&scaling=scale-down-width&content-scaling=fixed&page-id=24%3A26&starting-point-node-id=24%3A28",

    tags: [
      { label: "UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "Banner", variant: "highlight" }
    ],

    category: "Diseño UI"
  }
];

export function useFeaturedProjects() {
  const [activeFilter, setActiveFilter] =
    useState("Todos");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "Todos"
      ? true
      : project.category === activeFilter
  );

  return {
    filters,
    activeFilter,
    setActiveFilter,
    filteredProjects
  };
}