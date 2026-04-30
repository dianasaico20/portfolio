import { useState } from "react";

export const filters = ["Todos", "Diseño UX/UI", "Diseño UI", "Desarrollo"];

export const projects = [
  {
    id: 1,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  },
  {
    id: 2,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  },
  {
    id: 3,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  },
  {
    id: 4,
    title: "Sistema de Ventas Vendly",
    description: "Solución integral para gestión de ventas B2B para tiendas de tecnología",
    image: "/assets/images/placeholder-project.jpg",
    tags: [
      { label: "UX/UI", variant: "default" },
      { label: "Figma", variant: "default" },
      { label: "B2B", variant: "highlight" }
    ],
    category: "Diseño UX/UI"
  }
];

export function useFeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects = projects.filter(p =>
    activeFilter === "Todos" ? true : p.category === activeFilter
  );

  return {
    filters,
    activeFilter,
    setActiveFilter,
    filteredProjects
  };
}
