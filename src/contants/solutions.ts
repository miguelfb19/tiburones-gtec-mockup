type ServiceKey = "modernization" | "workspace" | "ai" | "analytics" | "managed";

interface Service {
  titleKey: ServiceKey;
  img: string;
  link: string;
  color: "primary" | "secondary" | "tertiary";
}

export const services: Service[] = [
  {
    titleKey: "modernization",
    img: "/images/solutions/modernizacion.png",
    link: "/modernization",
    color: "primary",
  },
  {
    titleKey: "workspace",
    img: "/images/solutions/workspace.png",
    link: "/google-workspace",
    color: "secondary",
  },
  {
    titleKey: "ai",
    img: "/images/solutions/IA.png",
    link: "/ia-generativa",
    color: "tertiary",
  },
  {
    titleKey: "analytics",
    img: "/images/solutions/analitica.png",
    link: "/analitica-datos",
    color: "primary",
  },
  {
    titleKey: "managed",
    img: "/images/solutions/administrados.png",
    link: "/servicios-administrados",
    color: "secondary",
  },
];
