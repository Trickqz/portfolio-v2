import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Golang } from "@/components/ui/svgs/golang";

export const DATA = {
  name: "Patrick Tavares",
  initials: "PT",
  url: "https://patrickdeveloper.tech",
  location: "Guarapari, Espírito Santo, Brasil",
  locationLink: "https://www.google.com/maps/place/Guarapari,+ES",
  description:
    "Desenvolvedor full stack focado em transformar requisitos de negócio em interfaces rápidas, acessíveis e fáceis de manter.",
  summary: "Nos últimos dois anos, atuei do front ao back em produtos reais. Trabalhei na arquitetura front-end de um dashboard financeiro com RBAC e gráficos interativos para grandes volumes de dados, usando Next.js e TypeScript (SSR/SSG) para performance e SEO. Também desenvolvi interfaces React para e-commerce e integrei APIs para melhorar consistência de dados entre sistemas. Stack principal: React, Next.js, TypeScript, Node.js e Go com foco em boas práticas, code review e arquitetura escalável. Cursando Análise e Desenvolvimento de Sistemas (UVV) e Ciência da Computação (Anhanguera). Aberto a novas oportunidades como dev front-end ou full stack.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Go", icon: Golang },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Início" }],
  contact: {
    email: "patricktavares@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/patricktavaresdev",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/trickqz",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Enviar e-mail",
        url: "mailto:patricktavares@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Lemon Tech",
      href: "",
      badges: [],
      location: "Remoto",
      title: "Desenvolvedor de Front-end",
      logoUrl: "/paglemon.png",
      start: "Fev 2026",
      end: "Jun 2026",
      description: "Arquitetei o front-end de um dashboard financeiro em Next.js e TypeScript, definindo padrões de code review que reduziram retrabalho e mantiveram consistência de código no projeto. Implementei SSR e SSG para otimizar performance e SEO, e construí um sistema de controle de acesso (RBAC) com múltiplos níveis de usuário, permitindo que a plataforma servisse diferentes perfis de cliente sem duplicar telas. Integrei APIs de back-end para exibição de grandes volumes de dados em gráficos interativos (Recharts), melhorando a leitura de indicadores financeiros em tempo real.",
    },
    {
      company: "Like Brasil",
      badges: [],
      href: "",
      location: "Guarapari, ES",
      title: "Engenheiro de Software Full Stack",
      logoUrl: "/likebrasil.png",
      start: "Ago 2024",
      end: "Nov 2025",
      description:
        "Desenvolvi páginas responsivas em React para uma plataforma de e-commerce, reduzindo o tempo de carregamento das páginas principais por meio de otimizações de performance. Atuei na integração de APIs entre front-end e back-end, eliminando inconsistências de dados que geravam retrabalho. Colaborei diretamente com áreas de negócio para transformar requisitos em interfaces intuitivas e reduzir chamados de suporte relacionados à usabilidade.",
    },
    {
      company: "Sr. SMS",
      href: "",
      badges: [],
      location: "Guarapari, Espírito Santo, Brasil",
      title: "Estagiário de Engenharia de Software",
      logoUrl: "/srsms.jpg",
      start: "Mar 2024",
      end: "Jul 2024",
      description:
        "Desenvolvi e mantive páginas institucionais em HTML, corrigindo bugs e implementando melhorias que sustentaram a presença digital da empresa sem interrupções. Contribuí para o aumento do alcance online por meio de ajustes de estrutura e conteúdo, aplicando conceitos da graduação em um ambiente real de produção.",
    },
  ],
  education: [
    {
      school: "Universidade Vila Velha",
      href: "https://uvv.br",
      degree: "Análise e Desenvolvimento de Sistemas",
      logoUrl: "uvv.jpg",
      start: "Fev 2026",
      end: "Aug 2028",
    },
    {
      school: "Anhanguera Educacional",
      href: "https://www.anhanguera.com",
      degree: "Bacharelado em Ciência da Computação",
      logoUrl: "anhanguera.jpg",
      start: "Fev 2024",
      end: "Dez 2027",
    },
  ],
  projects: [] as readonly {
    title: string;
    href?: string;
    description: string;
    dates: string;
    technologies: readonly string[];
    image?: string;
    video?: string;
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
  }[],
  hackathons: [] as readonly {
    title: string;
    dates: string;
    location?: string;
    description?: string;
    image?: string;
    links?: readonly {
      title: string;
      icon: React.ReactNode;
      href: string;
    }[];
  }[],
} as const;
