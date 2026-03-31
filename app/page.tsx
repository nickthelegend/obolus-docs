import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center bg-background">
      <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-8xl bg-linear-to-b from-primary to-primary/60 bg-clip-text text-transparent">
          Obolus Network
        </h1>
        <p className="text-xl text-muted-foreground max-w-[700px] leading-relaxed">
          The Privacy-Preserving RWA Yield and Credit Protocol.
          Shield your net worth while accessing institutional-grade financial rails.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href={`/docs${PageRoutes[0].href}`}
            className={buttonVariants({ className: "px-8 h-12 text-lg font-medium", size: "lg" })}
          >
            Read the Docs
          </Link>
          <Link
            href="https://github.com/obolus-network"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "outline",
              className: "px-8 h-12 text-lg font-medium bg-background/50 backdrop-blur-sm",
              size: "lg"
            })}
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-6xl mx-auto px-4">
        {[
          { title: "Dumb Store", description: "Blinded backend storage ensures your portfolio stays private." },
          { title: "CRE Workers", description: "Enclave-verified settlement via Chainlink's TEE infrastructure." },
          { title: "ECIES Shield", description: "End-to-end encryption from your wallet to the execution enclave." }
        ].map((feature, i) => (
          <div key={ feature.title } className="flex flex-col items-center p-6 rounded-2xl border bg-card/50 backdrop-blur-xs hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
