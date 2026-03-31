import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Obolus App",
    href: "https://app.obolus.network",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/obolus-network",
}
