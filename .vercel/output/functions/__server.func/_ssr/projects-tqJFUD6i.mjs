import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-label+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-tqJFUD6i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
			ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary"
		},
		size: {
			default: "h-11 px-6",
			lg: "h-12 px-8",
			sm: "h-9 px-4 text-xs"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var links = [
	{
		href: "/#projekti",
		label: "Projekti"
	},
	{
		href: "/#storitve",
		label: "Storitve"
	},
	{
		href: "/#o-nas",
		label: "O nas"
	},
	{
		href: "/#kontakt",
		label: "Kontakt"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-9 items-center justify-center rounded-md bg-primary text-xs font-semibold tracking-wide text-primary-foreground",
						children: "FA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-[family-name:var(--font-display)] text-xl tracking-tight",
						children: "Fin Ars"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "md:hidden",
					"aria-label": open ? "Zapri meni" : "Odpri meni",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t border-border bg-background md:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1 px-4 py-4",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center text-lg text-muted-foreground hover:text-foreground",
					children: l.label
				}, l.href))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center sm:flex-row sm:text-left sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-[family-name:var(--font-display)] text-lg",
				children: "Fin Ars d.o.o."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Center za arhitekturo · Zagorje ob Savi"
				]
			})]
		})
	});
}
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/projekti/$slug",
		params: { slug: project.slug },
		className: "group block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.cover,
					alt: project.title,
					className: "aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-[family-name:var(--font-display)] text-xl leading-snug",
					children: project.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-sm tabular-nums text-muted-foreground",
					children: project.year
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					project.location,
					" · ",
					project.category
				]
			})
		]
	});
}
function shots(slug, n) {
	return Array.from({ length: n }, (_, i) => `/projects/${slug}/${String(i + 1).padStart(2, "0")}.jpg`);
}
var projects = [
	{
		slug: "hisa-v-gozdu",
		title: "Hiša v gozdu",
		year: 2013,
		location: "Zasavje",
		category: "stanovanjsko",
		authors: "Simon Škrbec, Kristijan Čuk",
		summary: "Enodružinska, troetažna hiša z delno vkopano kletjo in garažo. V pritličju odprt dnevni prostor z zastekljeno zahodno fasado in izhodom na zeleno teraso s pergolo. 150 m² + 90 m² kleti.",
		cover: "/projects/hisa-v-gozdu/01.jpg",
		images: shots("hisa-v-gozdu", 8),
		featured: true
	},
	{
		slug: "vila-arbos",
		title: "Vila Arbos",
		year: 2011,
		location: "Slovenija",
		category: "stanovanjsko",
		authors: "Simon Škrbec, Kristijan Čuk",
		summary: "Pritlična vila iz naravnih materialov z leseno nosilno konstrukcijo. Orientacija bivalnega dela na jug in zahod, enokapna streha z aktivnimi sončnimi sistemi. 80 m².",
		cover: "/projects/vila-arbos/01.jpg",
		images: shots("vila-arbos", 6),
		featured: true
	},
	{
		slug: "pasivna-hisa",
		title: "Pasivna lesena hiša",
		year: 2011,
		location: "Slovenija",
		category: "stanovanjsko",
		authors: "Kristijan Čuk, Simon Škrbec",
		summary: "Energetsko učinkovita lesena enodružinska hiša z visokim standardom toplotne zaščite.",
		cover: "/projects/pasivna-hisa/01.jpg",
		images: shots("pasivna-hisa", 6),
		featured: true
	},
	{
		slug: "mladinski-center-trbovlje",
		title: "Mladinski center in hotel Trbovlje",
		year: 2011,
		location: "Trbovlje",
		category: "javno",
		authors: "Simon Škrbec, Darjan Bunta, Kristijan Čuk",
		summary: "Delno vkopan objekt, ki povezuje Trg revolucije in cesto 1. junija. Pohodna streha kot nov javni prostor. Mladinski center z dvorano in hotel s 24 ležišči. 700 m², K+P+N.",
		cover: "/projects/mladinski-center-trbovlje/01.jpg",
		images: shots("mladinski-center-trbovlje", 8),
		featured: true
	},
	{
		slug: "parkirna-hisa-sallaumines",
		title: "Parkirna hiša Sallaumines",
		year: 2016,
		location: "Zagorje ob Savi",
		category: "javno",
		authors: "Irena Gorjup Gračner, Katja Draš, Kristijan Čuk",
		summary: "Dvoetažna parkirna hiša na trikotni parceli med peš cono Sallaumines, Obrtniško cesto in stanovanjskim blokom. Ločena dostopa za klet in pritličje.",
		cover: "/projects/parkirna-hisa-sallaumines/01.jpg",
		images: shots("parkirna-hisa-sallaumines", 6),
		featured: true
	},
	{
		slug: "dvorana-bonifika",
		title: "Športna dvorana Bonifika",
		year: 2012,
		location: "Koper",
		category: "šport",
		authors: "Vladimir Mladenović, Simon Škrbec, Kristijan Čuk",
		summary: "Natečajna zasnova večnamenske športne dvorane na Bonifiki.",
		cover: "/projects/dvorana-bonifika/01.jpg",
		images: shots("dvorana-bonifika", 5),
		featured: true
	},
	{
		slug: "hotel-tripoli",
		title: "Hotelski in rehabilitacijski center Tripoli",
		year: 2012,
		location: "Tripoli",
		category: "javno",
		authors: "Fin Ars",
		summary: "Hotelski in rehabilitacijski kompleks z jasno prostorsko hierarhijo in odprtimi terasami.",
		cover: "/projects/hotel-tripoli/01.jpg",
		images: shots("hotel-tripoli", 5),
		featured: true
	},
	{
		slug: "bazen-libija",
		title: "Olimpijski bazen in wellness, Libija",
		year: 2013,
		location: "Libija",
		category: "šport",
		authors: "Fin Ars",
		summary: "Notranji olimpijski bazenski kompleks z wellness programom.",
		cover: "/projects/bazen-libija/01.jpg",
		images: shots("bazen-libija", 5)
	},
	{
		slug: "dvorana-tripoli",
		title: "Multifunkcijska športna dvorana Tripoli",
		year: 2012,
		location: "Tripoli",
		category: "šport",
		authors: "Fin Ars",
		summary: "Večnamenska športna dvorana z bazenom.",
		cover: "/projects/dvorana-tripoli/01.jpg",
		images: shots("dvorana-tripoli", 4)
	},
	{
		slug: "mercator-novo-mesto",
		title: "Trgovski center Mercator Novo mesto",
		year: 2012,
		location: "Novo mesto",
		category: "poslovno",
		authors: "Fin Ars",
		summary: "Projektiranje trgovskega centra z jasno prometno shemo in javnim robom.",
		cover: "/projects/mercator-novo-mesto/01.jpg",
		images: shots("mercator-novo-mesto", 5)
	},
	{
		slug: "objekt-mic",
		title: "Objekt MIC",
		year: 2011,
		location: "Slovenija",
		category: "poslovno",
		authors: "Fin Ars",
		summary: "Poslovni objekt z izrazito fasadno ritmiko in dnevno svetlobo v globini tlorisa.",
		cover: "/projects/objekt-mic/01.jpg",
		images: shots("objekt-mic", 5)
	},
	{
		slug: "urbana-dnevna-soba",
		title: "Urbana dnevna soba na deželi",
		year: 2011,
		location: "Slovenija",
		category: "stanovanjsko",
		authors: "Fin Ars",
		summary: "Stanovanjska zasnova, ki združuje zasebno bivanje in odprt odnos do krajine.",
		cover: "/projects/urbana-dnevna-soba/01.jpg",
		images: shots("urbana-dnevna-soba", 5)
	},
	{
		slug: "dimnikcobau",
		title: "Poslovni prostori Dimnikcobau",
		year: 2012,
		location: "Slovenija",
		category: "interier",
		authors: "Fin Ars",
		summary: "Notranja oprema in prenova poslovnih prostorov.",
		cover: "/projects/dimnikcobau/01.jpg",
		images: shots("dimnikcobau", 4)
	},
	{
		slug: "naselje-podcetrtek",
		title: "Stanovanjsko naselje Podčetrtek",
		year: 2013,
		location: "Podčetrtek",
		category: "stanovanjsko",
		authors: "Fin Ars",
		summary: "Urbanistična in arhitekturna zasnova stanovanjskega naselja.",
		cover: "/projects/naselje-podcetrtek/01.jpg",
		images: shots("naselje-podcetrtek", 4)
	},
	{
		slug: "sola-trbovlje",
		title: "Prenova OŠ Revirski borci",
		year: 2013,
		location: "Trbovlje",
		category: "javno",
		authors: "Fin Ars",
		summary: "Prenova osnovne šole z izboljšano dnevno svetlobo in jasnejšimi komunikacijami.",
		cover: "/projects/sola-trbovlje/01.jpg",
		images: shots("sola-trbovlje", 4)
	},
	{
		slug: "ptic-portoroz",
		title: "Študentski dom PTIC Portorož",
		year: 2015,
		location: "Portorož",
		category: "javno",
		authors: "Fin Ars",
		summary: "Prenova študentskega doma PTIC in notranje opreme bivalnih enot.",
		cover: "/projects/ptic-portoroz/01.jpg",
		images: shots("ptic-portoroz", 1)
	},
	{
		slug: "sportna-loska-dolina",
		title: "Športna dvorana Loška dolina",
		year: 2013,
		location: "Loška dolina",
		category: "šport",
		authors: "Fin Ars",
		summary: "Natečajna zasnova športne dvorane za Loško dolino.",
		cover: "/projects/sportna-loska-dolina/01.jpg",
		images: shots("sportna-loska-dolina", 4)
	},
	{
		slug: "retail-kragujevac",
		title: "Retail center Kragujevac",
		year: 2013,
		location: "Kragujevac",
		category: "poslovno",
		authors: "Fin Ars",
		summary: "Trgovski center z jasno vertikalno komunikacijo in javnim trgom.",
		cover: "/projects/retail-kragujevac/01.jpg",
		images: shots("retail-kragujevac", 3)
	},
	{
		slug: "sveta-gora",
		title: "Mrliška vežica, Zasavska Sveta gora",
		year: 2016,
		location: "Zasavje",
		category: "javno",
		authors: "Fin Ars",
		summary: "Spoštljiv javni objekt na Zasavski Sveti gori.",
		cover: "/projects/sveta-gora/01.jpg",
		images: shots("sveta-gora", 4)
	},
	{
		slug: "blok-aurora",
		title: "Blok Aurora",
		year: 2008,
		location: "Slovenija",
		category: "stanovanjsko",
		authors: "Fin Ars",
		summary: "Stanovanjski blok Aurora.",
		cover: "/projects/oppn-aurora/01.jpg",
		images: ["/projects/oppn-aurora/01.jpg"]
	},
	{
		slug: "bazen-trbovlje",
		title: "Bazen Trbovlje",
		year: 2010,
		location: "Trbovlje",
		category: "šport",
		authors: "Fin Ars",
		summary: "Projekt bazenskega kompleksa v Trbovljah.",
		cover: "/projects/bazen-trbovlje/01.jpg",
		images: shots("bazen-trbovlje", 3)
	},
	{
		slug: "pilon-trbovlje",
		title: "Pilon Trbovlje",
		year: 2008,
		location: "Trbovlje",
		category: "poslovno",
		authors: "Fin Ars",
		summary: "Poslovni objekt Pilon v Trbovljah.",
		cover: "/projects/pilon-trbovlje/01.jpg",
		images: shots("pilon-trbovlje", 3)
	}
];
function getProject(slug) {
	return projects.find((p) => p.slug === slug);
}
var services = [
	{
		n: "01",
		title: "Projektna dokumentacija",
		text: "IDZ, DGD in PZI za zahtevne in manj zahtevne objekte — od ideje do izvedbe."
	},
	{
		n: "02",
		title: "Dokumentacija za OPPN",
		text: "Občinski podrobni prostorski načrti in pripadajoči elaborati."
	},
	{
		n: "03",
		title: "Oblikovanje interiera",
		text: "Celostna notranja oprema stanovanjskih in poslovnih prostorov."
	},
	{
		n: "04",
		title: "Gradbena dovoljenja",
		text: "Vodenje postopka do pravnomočnega gradbenega dovoljenja."
	},
	{
		n: "05",
		title: "Izvedbeni projekti",
		text: "Podrobna izvedbena dokumentacija za nemoteno delo na gradbišču."
	},
	{
		n: "06",
		title: "Projektantski nadzor",
		text: "Nadzor nad izvedbo in dokumentacija za prevzem objekta."
	}
];
//#endregion
export { cn as a, services as c, SiteHeader as i, ProjectCard as n, getProject as o, SiteFooter as r, projects as s, Button as t };
