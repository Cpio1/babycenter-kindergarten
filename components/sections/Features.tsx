import { features } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Circle, Sparkle } from "@/components/ui/Decorations";
import { Reveal } from "@/components/ui/Reveal";

export function Features() {
  return (
    <section id="features" className="px-2 sm:px-4">
      <div className="relative overflow-hidden rounded-[32px] bg-brand-soft py-20 sm:rounded-[48px] sm:py-28">
        {/* Декор */}
        <Circle className="absolute -top-16 -left-16 h-48 w-48 border-[14px] border-white/70" />
        <Circle className="absolute -right-10 -bottom-10 h-40 w-40 bg-white/60" />
        <Sparkle className="absolute top-16 right-[12%] h-7 w-7 text-brand" />

        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow={features.eyebrow}
              title={features.title}
              description={features.description}
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {features.items.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <article className="group h-full rounded-[28px] bg-white p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-card-hover sm:p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-6">
                    <Icon className="h-6 w-6 text-ink" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold text-ink">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
