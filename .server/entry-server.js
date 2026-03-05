import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useMemo, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { ArrowRight, ArrowLeft, X, Menu } from "lucide-react";
import { useParams, Link, Navigate, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Markdown from "react-markdown";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const __vite_glob_0_0 = `---
title: "AI와 영성 묵상의 교차점"
slug: "intersection-of-ai-and-spirituality"
excerpt: "생성형 AI가 기독교 명상과 예술에서 어떻게 새로운 창의적 표현의 문을 열고 있는지 알아봅니다."
subtitle: "The Intersection of AI and Spiritual Meditation"
publishedDate: "2026-02-15"
label: "인사이트"
color: "text-amber-600 bg-amber-50/50"
---

최근 발표된 o3-mini 등 추론 모델과 생성형 AI 기술은 전통적인 기도와 묵상의 범위를 어떻게 넓힐 수 있을까요? AI가 만들어내는 이미지, 소리, 그리고 정제된 언어는 우리의 내면 깊은 곳을 울리는 영적 자극제가 될 수 있습니다.

Faith Forward 팀이 실험하고 있는 '비트 위의 묵상' 프로젝트의 시작 배경과, 단순한 편의성을 넘어 영적 도구로써 AI를 대할 때의 윤리적 접근 방식에 대해 나눕니다.
`;
const __vite_glob_0_1 = '---\ntitle: "확장성을 위한 구축: Next.js와 Supabase 통합"\nslug: "building-for-scale-nextjs-supabase"\nexcerpt: "QOTD 앱을 위한 아키텍처 선택과 99.9% 업타임을 보장하는 방법에 대한 기술적 심층 분석입니다."\nsubtitle: "Building for Scale: Next.js and Supabase Integration"\npublishedDate: "2026-02-20"\nlabel: "개발 로그"\ncolor: "text-indigo-600 bg-indigo-50/50"\n---\n\n매일 아침 수많은 분들에게 안정적으로 영성의 문구를 전달하기 위해, 저희 QOTD 애플리케이션 프론트엔드는 Next.js를, 백엔드와 데이터베이스 레이어로는 Supabase를 채택하였습니다. 서버리스 아키텍처의 유연성과 관계형 데이터 관리를 결합함으로써, 트래픽이 폭주하는 아침 시간대에도 흔들림 없는 응답성을 확보하고 있습니다.\n\n이 글에서는 Supabase의 RLS(Row Level Security)를 활용한 안전한 데이터 격리와 Next.js의 ISR(Incremental Static Regeneration)을 조합하여 얻은 성능 최적화의 기술적 인사이트를 공유합니다.\n';
const __vite_glob_0_2 = '---\ntitle: "디지털 시대의 사회적 협동조합 리더십"\nslug: "social-cooperative-leadership-in-digital-age"\nexcerpt: "급변하는 기술 환경에서 신앙 기반의 가치가 어떻게 리더십 결정을 이끌 수 있는지 탐구합니다."\nsubtitle: "Social Cooperative Leadership in the Digital Age"\npublishedDate: "2026-02-24"\nlabel: "리더십"\ncolor: "text-emerald-600 bg-emerald-50/50"\n---\n\n디지털 시대를 맞이하여, 협동조합 모델은 새로운 도전에 직면하게 되었습니다. 신앙의 핵심 가치인 인간 존엄성과 연대의 정신을 기술 혁신의 물결 속에서 어떻게 실천할 수 있을까요? \n\n단순한 수익 창출을 넘어 이웃과 사회에 기여할 수 있는 리더십의 본질을 되돌아보고, 다음 세대를 위한 선한 영향력의 통로로써 디지털 기술을 어떻게 활용할지 나누어봅니다.\n';
const __vite_glob_0_3 = '---\ntitle: "비트 위의 묵상"\nslug: "beat-meditation"\nexcerpt: "예술, 음악, 기술이 어우러진 AI 생성 기독교 명상 콘텐츠입니다."\nsubtitle: "AI 명상"\npublishedDate: "2026-02-25"\ntags: ["ai", "meditation", "art", "music"]\nimage: "https://cdn.jsdelivr.net/gh/trulyj501/faith-foward@main/public/images/meditation_bg.jpg"\nurl: "https://meditation.faithfwd.cc"\n---\n\n# 비트 위의 묵상\n\n기존의 정형화된 시각적, 청각적 종교 콘텐츠의 틀을 깨고, 최신 AI 기술을 활용하여 빚어낸 실험적인 명상 미디어 프로젝트입니다. \n\n단순히 시각적인 아름다움을 넘어, 깊이 있는 비트와 음악이 어우러져 현대적인 감각으로 영적 몰입감을 제공합니다. 생성형 AI가 만들어낸 창의적인 아트워크와 진정성 있는 묵상 텍스트가 당신의 내면에 새로운 울림을 선사할 것입니다.\n\n## 기술 및 아트 융합\n- AI 이미지 및 비디오 생성 기술 도입\n- 현대적인 비트와 잔잔한 멜로디의 교차\n- 몰입형 웹 오디오(Web Audio) 및 인터랙션 경험\n\n[비트 위의 묵상 체험하기](https://meditation.faithfwd.cc)\n';
const __vite_glob_0_4 = '---\ntitle: "QOTD 앱"\nslug: "qotd"\nexcerpt: "의도적인 아침을 시작하기 위해 엄선된 영성 문구를 제공하는 일일 묵상 도구입니다."\nsubtitle: "오늘의 말씀"\npublishedDate: "2026-03-01"\ntags: ["react", "spirituality", "daily"]\nimage: "https://cdn.jsdelivr.net/gh/trulyj501/faith-foward@main/public/images/qotd_morning_bible.webp"\nurl: "https://qotd.faithfwd.cc"\n---\n\n# QOTD 앱 (오늘의 말씀)\n\nQOTD(Quote of the Day) 매일 아침 엄선된 영적 묵상과 성경 구절을 통해 하루를 의도적으로 시작하도록 돕는 앱입니다. 스마트폰의 끝없는 알림과 도파민 속에서, 아주 잠시라도 내면의 평화를 되찾는 고요한 시간을 선사합니다.\n\n## 핵심 가치\n1. **정제된 텍스트**: 복잡한 디자인 요소를 걷어내고 오직 글에 집중할 수 있도록 지원합니다.\n2. **새벽의 감각**: 하루의 첫 시작에 어울리는 포근하고 안정적인 톤 앤 매너를 지향합니다.\n3. **가벼운 접근**: 설치가 필요 없는 빠르고 즉각적인 응답(SSG)을 제공합니다.\n\n[QOTD 웹앱 직접 체험하기](https://qotd.faithfwd.cc)\n';
const __vite_glob_0_5 = '---\ntitle: "레이지체크"\nslug: "ragecheck"\nexcerpt: "마음 챙김 성찰과 기록을 통해 감정을 확인하고 관리하는 도구입니다."\nsubtitle: "감정 관리 앱"\npublishedDate: "2026-02-18"\ntags: ["react", "nextjs", "supabase", "emotion"]\nimage: "https://cdn.jsdelivr.net/gh/trulyj501/faith-foward@main/public/images/ragecheck_bg.jpg"\nurl: "https://ragecheck.faithfwd.cc"\n---\n\n# 레이지체크 (Ragecheck)\n\n현대인들이 일상에서 겪는 날카로운 감정과 분노를 안전하게 해소하고, 스스로를 성찰할 수 있도록 돕는 감정 기록 도구입니다.\n\n## 프로젝트 배경\n강렬한 감정에 휩쓸리기 쉬운 순간에, 즉각적으로 감정을 비워내고 객관적으로 바라보는 과정은 내면의 평화를 위한 첫 걸음입니다. Next.js와 Supabase를 결합하여 만든 이 애플리케이션은 즉석에서 생각과 감정의 변화를 기록하도록 설계되었습니다.\n\n- 실시간 감정 로깅 아키텍처\n- 마음을 차분하게 가라앉히는 여백 중심의 UI\n- 데이터를 안전하게 보호하는 개인화 시스템\n\n[Ragecheck 둘러보기](https://ragecheck.faithfwd.cc)\n';
const rawContentModules = /* @__PURE__ */ Object.assign({
  "../../content/insights/ai-meditation-post.md": __vite_glob_0_0,
  "../../content/insights/dev-log-post.md": __vite_glob_0_1,
  "../../content/insights/leadership-post.md": __vite_glob_0_2,
  "../../content/projects/beat-meditation.md": __vite_glob_0_3,
  "../../content/projects/qotd.md": __vite_glob_0_4,
  "../../content/projects/ragecheck.md": __vite_glob_0_5
});
const getAllContent = () => {
  var _a;
  const allContent = [];
  for (const path in rawContentModules) {
    const rawMarkdown = rawContentModules[path];
    const categoryMatch = path.match(/content\/(.*?)\//);
    const category = categoryMatch ? categoryMatch[1] : "unknown";
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = rawMarkdown.match(frontmatterRegex);
    let metadata = {};
    let content = rawMarkdown;
    if (match) {
      const fmString = match[1];
      content = rawMarkdown.replace(frontmatterRegex, "").trim();
      const lines = fmString.split("\n");
      lines.forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length > 0) {
          const val = valueParts.join(":").trim().replace(/^"|"$/g, "");
          const cleanKey = key.trim();
          if (cleanKey === "tags") {
            metadata[cleanKey] = val.replace(/^\[|\]$/g, "").split(",").map((s) => s.trim().replace(/^"|"$/g, ""));
          } else {
            metadata[cleanKey] = val;
          }
        }
      });
    }
    if (!metadata.slug) {
      metadata.slug = ((_a = path.split("/").pop()) == null ? void 0 : _a.replace(".md", "")) || "unknown";
    }
    allContent.push({
      ...metadata,
      content,
      category
    });
  }
  return allContent.sort((a, b) => {
    if (!a.publishedDate) return 1;
    if (!b.publishedDate) return -1;
    return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
  });
};
const getContentByCategory = (category) => {
  return getAllContent().filter((item) => item.category === category);
};
const getContentBySlug = (slug) => {
  return getAllContent().find((item) => item.slug === slug);
};
const ContentList = ({ lang }) => {
  const { category } = useParams();
  const content = useMemo(() => {
    if (!category) return [];
    return getContentByCategory(category);
  }, [category]);
  const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : lang === "ko" ? "콘텐츠" : "Content";
  return /* @__PURE__ */ jsx("section", { className: "section-padding min-h-screen pt-32 bg-[#FAFAFA]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-sans font-bold tracking-tight text-[#1D1D1F] mb-6", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-black/40 font-medium max-w-2xl", children: lang === "ko" ? `${title}에 대한 모든 게시글을 확인해 보세요.` : `Explore all posts in our ${title} collection.` })
    ] }),
    content.length === 0 ? /* @__PURE__ */ jsx("div", { className: "py-12 border-t border-black/5", children: /* @__PURE__ */ jsx("p", { className: "text-black/40", children: lang === "ko" ? "게시글이 없습니다." : "No posts found in this category yet." }) }) : /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: content.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group cursor-pointer bg-white border border-black/5 hover:border-black/10 rounded-3xl p-8 transition-all hover:-translate-y-1 transform-gpu hover:shadow-xl hover:shadow-black/5 flex flex-col h-full",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest bg-black/5 text-black/60", children: item.category }) }),
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-sans font-bold mb-4 group-hover:text-emerald-600 transition-colors leading-tight tracking-tight text-[#1D1D1F] line-clamp-2", children: [
            /* @__PURE__ */ jsx(Link, { to: `/${item.category}/${item.slug}`, className: "absolute inset-0 z-10", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "View Component" }) }),
            item.title
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-black/50 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow", children: item.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-black/[0.05] flex items-center justify-between mt-auto", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-black/20", children: item.publishedDate ? new Date(item.publishedDate).toLocaleDateString(lang === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "short", day: "numeric" }) : "" }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "text-black/20 group-hover:text-black transition-all group-hover:translate-x-1" })
          ] })
        ]
      },
      item.slug
    )) })
  ] }) });
};
const ContentDetail = ({ lang }) => {
  const { slug } = useParams();
  if (!slug) return /* @__PURE__ */ jsx(Navigate, { to: "/projects" });
  const post = getContentBySlug(slug);
  if (!post) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen pt-32 px-6 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }),
      /* @__PURE__ */ jsx("p", { className: "text-black/50 mb-8", children: lang === "ko" ? "콘텐츠를 찾을 수 없습니다." : "Content not found." }),
      /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "text-emerald-600 hover:text-emerald-700 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
        lang === "ko" ? "돌아가기" : "Go back"
      ] })
    ] });
  }
  const title = `${post.title} | Faith Forward`;
  const description = post.excerpt;
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
  return /* @__PURE__ */ jsx("article", { className: "min-h-screen pt-32 pb-24 px-6 bg-[#FAFAFA]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs(Link, { to: `/${post.category}`, className: "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-black/40 hover:text-black transition-colors mb-12", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
      lang === "ko" ? "목록으로" : "Back to list"
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-bold uppercase tracking-widest text-[#1D1D1F] bg-black/5 px-3 py-1.5 rounded-full", children: post.category }),
        post.publishedDate && /* @__PURE__ */ jsx("time", { className: "text-sm font-medium text-black/40", children: new Date(post.publishedDate).toLocaleDateString(lang === "ko" ? "ko-KR" : "en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }) })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-sans font-bold leading-tight tracking-tight text-[#1D1D1F] mb-6", children: post.title }),
      post.subtitle && /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-medium text-black/40 leading-relaxed", children: post.subtitle }),
      post.tags && post.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-8", children: post.tags.map((t) => /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold px-2 py-1 bg-black/5 text-black/60 rounded", children: [
        "#",
        t
      ] }, t)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "prose prose-lg prose-emerald max-w-none markdown-body", children: /* @__PURE__ */ jsx(Markdown, { children: post.content }) })
  ] }) });
};
const Navbar = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: lang === "ko" ? "비전" : "Vision", to: "/vision" },
    { name: lang === "ko" ? "프로젝트" : "Projects", to: "/projects" },
    { name: lang === "ko" ? "인사이트" : "Insights", to: "/insights" },
    { name: lang === "ko" ? "문의" : "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsxs("nav", { className: cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
    isScrolled ? "bg-white/40 backdrop-blur-2xl border-b border-white/20 py-3 shadow-lg shadow-black/5" : "bg-transparent"
  ), children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center gap-3 group cursor-pointer",
          onClick: () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-black rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]", children: /* @__PURE__ */ jsx("div", { className: "w-3.5 h-3.5 bg-white rotate-45" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-xl tracking-tight text-[#1D1D1F]", children: "Faith Forward" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
        navLinks.map((link) => link.to ? /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            onClick: () => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: cn(
              "text-sm font-medium transition-colors",
              location.pathname === link.to ? "text-emerald-600 font-bold" : "text-black/60 hover:text-black"
            ),
            children: link.name
          },
          link.name
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: "text-sm font-medium text-black/60 hover:text-black transition-colors",
            children: link.name
          },
          link.name
        )),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center bg-black/5 rounded-full p-1", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setLang("ko"),
              className: cn(
                "px-3 py-1 rounded-full text-xs font-bold transition-all",
                lang === "ko" ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black/60"
              ),
              children: "KO"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setLang("en"),
              className: cn(
                "px-3 py-1 rounded-full text-xs font-bold transition-all",
                lang === "en" ? "bg-white text-black shadow-sm" : "text-black/40 hover:text-black/60"
              ),
              children: "EN"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 md:hidden", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setLang(lang === "ko" ? "en" : "ko"),
            className: "text-xs font-bold bg-black/5 px-3 py-1 rounded-full",
            children: lang === "ko" ? "EN" : "KO"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "p-2",
            onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
            children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
          }
        )
      ] })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-full left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-black/[0.05] p-8 md:hidden shadow-2xl",
        children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: navLinks.map((link) => link.to ? /* @__PURE__ */ jsx(
          Link,
          {
            to: link.to,
            onClick: () => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: cn(
              "text-2xl font-bold tracking-tight text-left",
              location.pathname === link.to ? "text-emerald-600" : "text-[#1D1D1F]"
            ),
            children: link.name
          },
          link.name
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            onClick: () => {
              setIsMobileMenuOpen(false);
            },
            className: "text-2xl font-bold tracking-tight",
            children: link.name
          },
          link.name
        )) })
      }
    )
  ] });
};
const ProjectsPage = ({ lang }) => {
  const projects = getContentByCategory("projects");
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "pt-40 pb-32 px-6 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-50/40 blur-[120px] rounded-full hidden md:block" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/40 blur-[100px] rounded-full hidden md:block" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "mb-16",
              children: [
                /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-sans font-bold mb-6 tracking-tight text-[#1D1D1F]", children: lang === "ko" ? "프로젝트" : "Projects" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-black/40 max-w-2xl font-medium", children: lang === "ko" ? "신앙과 기술의 경계에서 탄생한 Faith Forward의 혁신적인 도구들을 소개합니다." : "Introducing Faith Forward's innovative tools born at the intersection of faith and technology." })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project) => /* @__PURE__ */ jsxs(
            "div",
            {
              onClick: () => {
                navigate(`/projects/${project.slug}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "apple-card group flex flex-col sm:grid sm:grid-rows-2 aspect-auto sm:aspect-[4/5] overflow-hidden !bg-white !bg-none !rounded-[1.25rem] shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_32px_rgba(17,17,26,0.05)] border border-slate-100/50 transition-transform active:scale-[0.98] transform-gpu cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-full aspect-[3/2] sm:aspect-auto h-auto sm:h-full overflow-hidden bg-[#e5eee3] shrink-0", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.title,
                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                    referrerPolicy: "no-referrer"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "w-full h-auto sm:h-full p-5 lg:p-6 flex flex-col text-left justify-between", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-[20px] lg:text-[24px] font-bold text-[#1f2937] mb-2 tracking-tight", children: project.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-[14px] lg:text-[15px] leading-[1.6] line-clamp-1 md:line-clamp-2 flex-grow tracking-[-0.01em]", children: project.excerpt }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex items-center text-emerald-600 text-[14px] lg:text-[16px] font-medium mt-3 lg:mt-auto hover:text-emerald-700 transition-colors tracking-tight group/link",
                      children: [
                        /* @__PURE__ */ jsx("span", { children: lang === "ko" ? "상세 보기" : "View Detail" }),
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1", strokeWidth: 1.5 })
                      ]
                    }
                  )
                ] })
              ]
            },
            project.slug
          )) })
        ] })
      ]
    }
  );
};
const VisionPage = ({ lang }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "pt-40 pb-32 px-6 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/40 blur-[120px] rounded-full hidden md:block" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-emerald-50/40 blur-[100px] rounded-full hidden md:block" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto mb-16", children: /* @__PURE__ */ jsx(
          "div",
          {
            children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-sans font-bold mb-6 tracking-tight text-[#1D1D1F]", children: lang === "ko" ? "비전" : "Vision" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-black/40 font-medium", children: lang === "ko" ? "우리의 방향성" : "Our Direction" })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs(
          "div",
          {
            children: [
              /* @__PURE__ */ jsxs("div", { className: "glass-panel p-10 mb-16 border-emerald-100/30", children: [
                /* @__PURE__ */ jsx("blockquote", { className: "text-2xl md:text-3xl font-sans font-medium text-emerald-800 leading-tight italic", children: '"신앙과 기술, 그리고 예술을 연결하여 더 밝은 미래로 나아갑니다."' }),
                /* @__PURE__ */ jsx("cite", { className: "block mt-4 text-emerald-600/60 not-italic font-medium", children: "Guiding faith and tech toward a brighter future." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-12 text-lg md:text-xl text-black/70 leading-relaxed font-medium", children: [
                /* @__PURE__ */ jsx("p", { children: "안녕하세요. 소셜 협동조합 Faith Forward의 대표 리나(Lina)입니다." }),
                /* @__PURE__ */ jsx("p", { children: "우리가 살아가는 일상은 기술의 발전으로 유례없이 빠르고 편리해졌습니다. 하지만 그 압도적인 속도감 속에서, 정작 우리의 내면을 돌보고 진정한 가치를 고민하는 시간은 점차 줄어들고 있지 않나요?" }),
                /* @__PURE__ */ jsx("p", { children: "Faith Forward는 바로 이 질문에서 출발했습니다. 우리는 차갑고 건조하게 느껴질 수 있는 기술(Tech)에 따뜻한 신앙(Faith)과 예술(Art)의 숨결을 불어넣어, 사람들의 일상에 실질적인 위로와 성장을 돕는 도구를 만듭니다." }),
                /* @__PURE__ */ jsxs("div", { className: "pt-8", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-[#1D1D1F] mb-8", children: lang === "ko" ? "우리가 집중하는 세 가지 가치" : "Three Values We Focus On" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
                    /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-emerald-500 pl-8 py-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-[#1D1D1F] mb-2", children: "1. 일상에 스며드는 신앙 (Faith in Daily Life)" }),
                      /* @__PURE__ */ jsx("p", { className: "text-black/50 text-base", children: "바쁜 하루 중에도 자연스럽게 말씀을 묵상하고 내면을 단단하게 세울 수 있는 디지털 환경을 만듭니다. 가장 아름답고 직관적인 UX를 통해 영적인 습관을 돕습니다. (프로젝트: QOTD)" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-8 py-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-[#1D1D1F] mb-2", children: "2. 나를 마주하는 건강한 기술 (Tech for Inner Peace)" }),
                      /* @__PURE__ */ jsx("p", { className: "text-black/50 text-base", children: "무조건적인 긍정이나 외면이 아닌, 내 안의 솔직한 감정들을 안전하게 점검하고 다스릴 수 있도록 돕는 도구를 기획합니다. (프로젝트: Ragecheck)" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-8 py-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-[#1D1D1F] mb-2", children: "3. 영감을 주는 새로운 표현 (Artistic Inspiration)" }),
                      /* @__PURE__ */ jsx("p", { className: "text-black/50 text-base", children: "틀에 박힌 방식을 벗어나 AI 기술과 시각적 아름다움, 그리고 음악적인 리듬이 어우러진 새로운 형태의 콘텐츠로 메시지를 전합니다. (프로젝트: 비트 위의 묵상)" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-8", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-[#1D1D1F] mb-6", children: lang === "ko" ? "함께 나아가는 발걸음" : "Steps Taken Together" }),
                  /* @__PURE__ */ jsx("p", { children: "소셜 협동조합으로서 우리가 지향하는 바는 명확합니다. 뛰어난 서비스를 만드는 것을 넘어, 같은 비전을 품은 사람들과 연대하고 우리가 만든 도구들이 사회적으로 선한 영향력을 흘려보내는 통로가 되는 것입니다." }),
                  /* @__PURE__ */ jsx("p", { className: "mt-6", children: "멈춰 있지 않고 끊임없이 앞으로(Forward) 향하는 우리의 발걸음이, 여러분의 일상에 작은 기쁨과 빛이 되기를 소망합니다." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-16 border-t border-black/5", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold text-[#1D1D1F]", children: "Lina Jeong" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-black/40", children: "Founder & Director, Faith Forward" })
                ] })
              ] })
            ]
          }
        ) })
      ]
    }
  );
};
const InsightsPage = ({ lang }) => {
  const posts = getContentByCategory("insights");
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "pt-40 pb-32 px-6 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-50/40 blur-[120px] rounded-full hidden md:block" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50/40 blur-[100px] rounded-full hidden md:block" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "mb-16",
              children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-sans font-bold mb-6 tracking-tight text-[#1D1D1F]", children: lang === "ko" ? "인사이트" : "Insights" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-black/40 font-medium", children: lang === "ko" ? "리더십, 기술, 그리고 신앙에 관한 생각들." : "Thoughts on leadership, technology, and faith." })
              ] }) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts.map((post) => /* @__PURE__ */ jsxs(
            "div",
            {
              onClick: () => {
                navigate(`/insights/${post.slug}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "apple-card p-8 group cursor-pointer flex flex-col h-full !bg-white !rounded-[1.25rem] shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_32px_rgba(17,17,26,0.05)] border border-slate-100/50 transition-transform active:scale-[0.98] transform-gpu",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("span", { className: cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest", post.color || "bg-black/5 text-black/60"), children: post.label || post.category }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-sans font-bold mb-4 group-hover:text-emerald-600 transition-colors leading-tight tracking-tight text-[#1D1D1F]", children: post.title }),
                /* @__PURE__ */ jsx("p", { className: "text-black/50 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow", children: post.excerpt }),
                /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-black/[0.05] flex items-center justify-between mt-auto", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-black/20", children: post.publishedDate ? new Date(post.publishedDate).toLocaleDateString(lang === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "long", day: "numeric" }) : "" }),
                  /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "text-black/20 group-hover:text-black transition-all group-hover:translate-x-1" })
                ] })
              ]
            },
            post.slug
          )) })
        ] })
      ]
    }
  );
};
const Hero = ({ lang }) => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[70vh] flex items-center pt-40 pb-20 overflow-hidden px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-200/40 blur-[120px] rounded-full hidden md:block"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "hidden"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-purple-200/20 blur-[140px] rounded-full hidden md:block"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto relative z-10 w-full", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "max-w-4xl",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-sans font-bold leading-[1.1] mb-8 tracking-[-0.04em] text-[#1D1D1F]", children: lang === "ko" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            "매일의 소음 속에서",
            /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "지혜와 믿음을 지켜냅니다" }),
            "."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Protecting wisdom and ",
            /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "faith" }),
            " in the daily noise."
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-black/50 mb-12 max-w-2xl leading-relaxed font-medium", children: lang === "ko" ? "나, 이웃, 하나님을 향한 믿음의 경험을 혁신하는 서비스를 만듭니다." : "Creating services that innovate the experience of faith towards ourselves, our neighbors, and God." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  navigate("/projects");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
                className: "bg-[#1D1D1F] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-black transition-all shadow-xl shadow-black/10 active:scale-95 flex items-center justify-center",
                children: lang === "ko" ? "프로젝트 탐색" : "Explore Projects"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  navigate("/vision");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
                className: "bg-white text-black border border-black/10 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all active:scale-95",
                children: lang === "ko" ? "우리의 비전" : "Our Vision"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
};
const Projects = ({ lang }) => {
  const projects = getContentByCategory("projects");
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "section-padding bg-transparent relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-50/60 blur-[140px] rounded-full hidden md:block"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-50/60 blur-[120px] rounded-full hidden md:block"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-sans font-bold mb-4 tracking-tight text-[#1D1D1F]", children: lang === "ko" ? "주요 프로젝트" : "Key Projects" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-black/40 font-medium", children: lang === "ko" ? "디지털 세상에서 신앙을 경험하는 방식을 혁신합니다." : "Transforming how we experience faith in a digital world." })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              navigate("/projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: "text-sm font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors",
            children: lang === "ko" ? "전체 보기" : "View All"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: projects.map((project) => /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => {
            navigate(`/projects/${project.slug}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "apple-card group cursor-pointer flex flex-col sm:grid sm:grid-rows-2 aspect-auto sm:aspect-[4/5] overflow-hidden !bg-white !bg-none !rounded-[1.25rem] shadow-[0px_4px_16px_rgba(17,17,26,0.05),_0px_8px_32px_rgba(17,17,26,0.05)] border border-slate-100/50 transition-transform active:scale-[0.98] transform-gpu",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-full aspect-[3/2] sm:aspect-auto h-auto sm:h-full overflow-hidden bg-[#e5eee3] shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: project.image,
                alt: project.title,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                referrerPolicy: "no-referrer"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "w-full h-auto sm:h-full p-5 lg:p-6 flex flex-col text-left justify-between", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[20px] lg:text-[24px] font-bold text-[#1f2937] mb-2 tracking-tight", children: project.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-[14px] lg:text-[15px] leading-[1.6] line-clamp-1 md:line-clamp-2 flex-grow tracking-[-0.01em]", children: project.excerpt }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-emerald-600 text-[14px] lg:text-[16px] font-medium mt-3 lg:mt-auto hover:text-emerald-700 transition-colors tracking-tight group/link", children: [
                /* @__PURE__ */ jsx("span", { children: lang === "ko" ? "상세 보기" : "View Detail" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1", strokeWidth: 1.5 })
              ] })
            ] })
          ]
        },
        project.slug
      )) })
    ] })
  ] });
};
const LatestInsights = ({ lang }) => {
  const posts = getContentByCategory("insights").slice(0, 3);
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("section", { id: "insights", className: "section-padding relative overflow-hidden bg-transparent", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-purple-100/30 blur-[130px] rounded-full hidden md:block"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute bottom-[10%] left-[5%] w-[50%] h-[50%] bg-emerald-100/30 blur-[130px] rounded-full hidden md:block"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-sans font-bold mb-4 tracking-tight text-[#1D1D1F]", children: lang === "ko" ? "최신 인사이트" : "Latest Insights" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-black/40 font-medium", children: lang === "ko" ? "리더십, 기술, 그리고 신앙에 관한 생각들." : "Thoughts on leadership, technology, and faith." })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              navigate("/insights");
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: "text-sm font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors",
            children: lang === "ko" ? "모든 글 보기" : "View All Posts"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: posts.map((post) => /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => {
            navigate(`/insights/${post.slug}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "apple-card p-8 group cursor-pointer flex flex-col transition-transform active:scale-[0.98] transform-gpu border border-black/[0.05] hover:border-black/10 hover:shadow-xl hover:shadow-black/5 rounded-3xl",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("span", { className: cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest", post.color || "bg-black/5 text-black/60"), children: post.label || post.category }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-sans font-bold mb-4 group-hover:text-emerald-600 transition-colors leading-tight tracking-tight text-[#1D1D1F]", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-black/50 text-sm mb-8 leading-relaxed line-clamp-3 flex-grow", children: post.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-black/[0.05] flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-black/20", children: post.publishedDate ? new Date(post.publishedDate).toLocaleDateString(lang === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "long", day: "numeric" }) : "" }),
              /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "text-black/20 group-hover:text-black transition-all group-hover:translate-x-1" })
            ] })
          ]
        },
        post.slug
      )) })
    ] })
  ] });
};
const Footer = ({ lang }) => {
  return /* @__PURE__ */ jsx("footer", { id: "contact", className: "bg-[#1D1D1F] text-white py-16 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-12 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-white rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-3.5 h-3.5 bg-black rotate-45" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-xl tracking-tight", children: "Faith Forward" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-white/40 max-w-sm leading-relaxed text-base font-medium", children: lang === "ko" ? "신앙과 기술을 더 밝고 인간적인 미래로 안내하는 데 전념하는 사회적 협동조합입니다." : "A social cooperative dedicated to guiding faith and technology toward a brighter, more human future." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/30", children: lang === "ko" ? "연결" : "Connect" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-white/50 text-sm font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "LinkedIn" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Instagram" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Twitter" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold mb-6 text-xs uppercase tracking-[0.2em] text-white/30", children: lang === "ko" ? "법적 고지" : "Legal" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-white/50 text-sm font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: lang === "ko" ? "개인정보 처리방침" : "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: lang === "ko" ? "이용 약관" : "Terms of Service" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs font-medium", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© 2026 Faith Forward Social Cooperative. ",
        lang === "ko" ? "모든 권리 보유." : "All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { children: lang === "ko" ? "리나에 의해 설립됨" : "Founded by Lina" })
    ] })
  ] }) });
};
function App() {
  const [lang, setLang] = useState("ko");
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      if (typeof window !== "undefined" && !window.location.hash) {
        window.scrollTo(0, 0);
      }
    }, [pathname]);
    return null;
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(Navbar, { lang, setLang }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsxs(
        "div",
        {
          children: [
            /* @__PURE__ */ jsx(Hero, { lang }),
            /* @__PURE__ */ jsx(Projects, { lang }),
            /* @__PURE__ */ jsx(LatestInsights, { lang })
          ]
        },
        "home"
      ) }),
      /* @__PURE__ */ jsx(Route, { path: "/vision", element: /* @__PURE__ */ jsx(VisionPage, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/projects", element: /* @__PURE__ */ jsx(ProjectsPage, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/insights", element: /* @__PURE__ */ jsx(InsightsPage, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/:category", element: /* @__PURE__ */ jsx(ContentList, { lang }) }),
      /* @__PURE__ */ jsx(Route, { path: "/:category/:slug", element: /* @__PURE__ */ jsx(ContentDetail, { lang }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { lang })
  ] });
}
function render(url, context) {
  const html = renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  return { html };
}
export {
  render
};
