// Ajusta la ruta "@/" según la ubicación real de tu archivo de iconos
import {
  Figma,
  PenTool,
  MousePointer,
  MonitorSmartphone,
  Blocks,
  Framer, 
  Layout,
  Database,
  Code2,
  Cpu,
  Terminal,
  Zap
} from "@/components/icons"; 

export const skills = [
  {
    category: "Diseño y Prototipado",
    items: [
      { name: "Figma", icon: Figma },
      { name: "Adobe XD", icon: PenTool },
      { name: "Prototyping", icon: MousePointer },
      { name: "User Research", icon: MonitorSmartphone },
      { name: "Design Systems", icon: Blocks }
    ]
  },
  {
    category: "Desarrollo Visual / No-Code",
    items: [
      { name: "Framer", icon: Framer },
      { name: "Webflow", icon: Layout },
      { name: "WordPress", icon: Database },
      { name: "Webflow CMS", icon: Layout },
      { name: "Animations", icon: Zap }
    ]
  },
  {
    category: "Tecnologías Front-end",
    items: [
      { name: "Angular", icon: Code2 },
      { name: "Blazor", icon: Code2 },
      { name: "HTML & CSS", icon: Cpu },
      { name: "JavaScript", icon: Terminal }
    ]
  }
];

export function useSkills() {
  return { skills };
}