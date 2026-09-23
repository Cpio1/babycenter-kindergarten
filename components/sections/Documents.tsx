import { ArrowUpRight, FileCheck2 } from "lucide-react";
import { documents } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Circle, Sparkle } from "@/components/ui/Decorations";
import { Reveal } from "@/components/ui/Reveal";

export function Documents() {
  const isExternal = siteConfig.documentsUrl !== "#";

  return (
    <section id="documents" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow={documents.eyebrow} title={documents.title} />
        </Reveal>

        <Reveal delay={100}>
          <article className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[32px] border border-brand/50 bg-cream p-8 transition-shadow duration-300 hover:shadow-card-hover sm:p-12">
            <Circle className="absolute -top-12 -right-12 h-40 w-40 bg-brand-soft" />
            <Sparkle className="absolute top-8 right-10 h-6 w-6 text-brand" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-brand shadow-glow">
                <FileCheck2 className="h-9 w-9 text-ink" strokeWidth={1.75} />
              </span>

              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{documents.cardTitle}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted">{documents.cardText}</p>
              </div>

              {/* Ссылка задаётся в lib/site.ts → documentsUrl */}
              <Button
                href={siteConfig.documentsUrl}
                size="lg"
                icon={<ArrowUpRight className="h-5 w-5" />}
                className="self-start md:self-center"
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {documents.buttonLabel}
              </Button>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
