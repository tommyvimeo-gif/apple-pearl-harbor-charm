import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { K as notFound, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { a as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-CXAkYl8M.mjs";
import { i as SiteHeader, n as ProjectCard, o as getProject, r as SiteFooter, s as projects } from "./projects-tqJFUD6i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projekti._slug-zhYenjVc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectPage() {
	const { slug } = Route.useParams();
	const project = getProject(slug);
	if (!project) throw notFound();
	const [active, setActive] = (0, import_react.useState)(project.images[0] ?? project.cover);
	const related = projects.filter((p) => p.slug !== slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "projekti",
						className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Nazaj na projekte"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-hidden rounded-xl bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: active,
							alt: project.title,
							className: "aspect-[16/9] w-full object-cover"
						})
					}),
					project.images.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6",
						children: project.images.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActive(src),
							className: `overflow-hidden rounded-md ${active === src ? "ring-2 ring-ring" : "opacity-70 hover:opacity-100"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "aspect-[4/3] w-full object-cover"
							})
						}, src))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-[0.18em] uppercase text-primary",
								children: [
									project.year,
									" · ",
									project.location,
									" · ",
									project.category
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: ["Avtorji: ", project.authors]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-light leading-relaxed text-muted-foreground",
								children: project.summary
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-8 sm:grid-cols-3",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProjectPage as component };
