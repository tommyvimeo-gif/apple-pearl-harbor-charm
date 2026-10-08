import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { projects, services } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative min-h-[100dvh] overflow-hidden pt-16">
        <img
          src="/projects/hisa-v-gozdu/01.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-24">
          <p className="mb-4 text-xs font-medium tracking-[0.18em] uppercase text-primary">
            Arhitekturni biro · od 2006
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Oblikujemo <em className="italic text-primary">prostore</em> z namenom
          </h1>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
            Center za arhitekturo, gradbeno projektiranje in celovite storitve — od ideje do izvedbe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projekti">Ogled projektov</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#kontakt">Stopite v stik</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-4 sm:px-6">
          {[
            ["20", "Let izkušenj"],
            ["150+", "Projektov"],
            ["7", "Strokovnjakov"],
            ["A+", "Bonitetna ocena"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl tabular-nums sm:text-5xl">
                {n}
              </div>
              <div className="mt-2 text-xs tracking-[0.12em] uppercase text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projekti" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary">
            Izbrani projekti
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
            Prostor, ki govori zase
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="storitve" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary">
            Kaj delamo
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
            Celovite arhitekturne storitve
          </h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.n}
                className="rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-ring/40"
              >
                <p className="font-[family-name:var(--font-display)] text-sm text-primary">{s.n}</p>
                <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="o-nas" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 sm:items-center sm:px-6">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary">O nas</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
              Arhitektura z lokalnim značajem
            </h2>
            <p className="mt-6 font-light leading-relaxed text-muted-foreground">
              Fin Ars d.o.o. je arhitekturni biro, ki je nastal leta 2006 v Zagorju ob Savi.
              Vodji biroja sta <span className="text-foreground">Kristijan Čuk</span> u.d.i.a.,
              strokovni direktor, in <span className="text-foreground">Borut Dolar</span>, poslovni
              direktor.
            </p>
            <p className="mt-4 font-light leading-relaxed text-muted-foreground">
              Ekipo sooblikujejo Urša Dirjec Meško, Irena Gorjup Gračner, Simon Škrbec, Dijana
              Subašič, Vladimir Mladenović in Špela Volaj.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/brand/office.jpg"
              alt="Prostori biroja Fin Ars"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="novice" className="scroll-mt-20 border-y border-border bg-secondary py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-[1.2fr_1fr] sm:items-center sm:px-6">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary">Novice</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
              Digitalna transformacija podjetja FIN ARS
            </h2>
            <p className="mt-4 font-light leading-relaxed text-muted-foreground">
              Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za
              regionalni razvoj. Sofinanciranje operacije: do 100.000 €.
            </p>
            <a
              href="https://www.eu-skladi.si/"
              className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              eu-skladi.si <ArrowRight className="size-4" />
            </a>
          </div>
          <img
            src="/brand/news.jpg"
            alt="EU kohezijska politika"
            className="w-full rounded-lg object-contain"
          />
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary">Kontakt</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl">
            Pogovorimo se o vašem projektu
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <p className="text-xs tracking-[0.12em] uppercase">Naslov</p>
                <p className="mt-2 text-foreground">
                  Podvine 36
                  <br />
                  1410 Zagorje ob Savi
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.12em] uppercase">Telefon</p>
                <p className="mt-2">
                  <a className="text-foreground hover:text-primary" href="tel:+38641686959">
                    +386 41 686 959
                  </a>
                  <br />
                  <a className="text-foreground hover:text-primary" href="tel:+38631370172">
                    +386 31 370 172
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.12em] uppercase">E-pošta</p>
                <p className="mt-2">
                  <a className="text-foreground hover:text-primary" href="mailto:info@finars.si">
                    info@finars.si
                  </a>
                  <br />
                  <a
                    className="text-foreground hover:text-primary"
                    href="mailto:kristijan.cuk@finars.si"
                  >
                    kristijan.cuk@finars.si
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.12em] uppercase">Podatki podjetja</p>
                <p className="mt-2 text-sm">
                  Davčna št.: SI 70790817
                  <br />
                  Matična št.: 2144921000
                </p>
              </div>
            </div>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Ime in priimek</Label>
                <Input id="name" name="name" required placeholder="Vaše ime" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-pošta</Label>
                <Input id="email" name="email" type="email" required placeholder="vas@email.si" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Sporočilo</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Opišite vaš projekt ali vprašanje..."
                />
              </div>
              <Button type="submit" className="w-full" disabled={sent}>
                {sent ? "Hvala, sporočilo je zabeleženo." : "Pošlji sporočilo"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
