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
      "https://www.figma.com/proto/vendly",

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

    caseStudyUrl: "/projects/el-pastel",

    prototypeUrl:
      "https://www.figma.com/proto/elpastel",

    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "Proyecto conceptual", variant: "highlight" }
    ],

    category: "Diseño UX/UI"
  },

  {
    id: 3,

    title: "Cuenca Tour 360",

    description:
      "Sitio web para una agencia de viajes local",

    image: "/assets/images/cuencatour360.png",

    caseStudyUrl: "/projects/cuenca-tour-360",

    prototypeUrl:
      "https://www.figma.com/proto/cuencatour360",

    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Odoo", variant: "default" },
      { label: "Agencia de viajes", variant: "highlight" }
    ],

    category: "Diseño UI"
  },

  {
    id: 4,

    title: "Food Fast App",

    description:
      "Prototipo de una aplicación de comida rápida",

    image: "/assets/images/appfood.png",

    caseStudyUrl: "",

    prototypeUrl:
      "https://www.figma.com/proto/XCXf3MEmxnJwXxK22vdNqy/App--Food-Fast?node-id=2-2&p=f&t=fLM3FLJifhNWOvXx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",

    tags: [
      { label: "UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "App", variant: "highlight" }
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