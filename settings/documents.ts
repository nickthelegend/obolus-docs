import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "",
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    items: [
      {
        title: "Deployments",
        href: "/deployments",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Privacy Architecture",
    href: "/architecture",
    items: [
      {
        title: "Dumb Store Model",
        href: "/dumb-store",
      },
      {
        title: "Chainlink CRE & TEE",
        href: "/cre-tee",
      },
      {
        title: "ECIES Encryption",
        href: "/encryption",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Protocol Modules",
    href: "/modules",
    items: [
      {
        title: "Smart Vaults",
        href: "/vaults",
      },
      {
        title: "AMM & Swap",
        href: "/amm",
      },
      {
        title: "Lending Market",
        href: "/lending",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Developers",
    href: "/developers",
    items: [
      {
        title: "API Reference",
        href: "/api",
      },
      {
        title: "Settler Integration",
        href: "/settler",
      },
    ],
  },
]
