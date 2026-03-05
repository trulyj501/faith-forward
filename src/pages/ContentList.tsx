import React, { useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { getContentByCategory } from '../lib/content';

const CATEGORY_LABELS: Record<string, { ko: string; en: string; sub_ko: string; sub_en: string }> = {
    projects: {
        ko: '프로젝트',
        en: 'Projects',
        sub_ko: '신앙과 기술의 경계에서 만들어가는 것들',
        sub_en: 'Things we build at the frontier of faith & tech',
    },
    insights: {
        ko: '인사이트',
        en: 'Insights',
        sub_ko: '믿음과 디지털 문화에 관한 생각들',
        sub_en: 'Thoughts on faith and digital culture',
    },
};

const ContentList = ({ lang }: { lang: 'ko' | 'en' }) => {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();

    const content = useMemo(() => {
        if (!category) return [];
        return getContentByCategory(category);
    }, [category]);

    const labels = category ? CATEGORY_LABELS[category] : null;
    const title = labels ? (lang === 'ko' ? labels.ko : labels.en) : category ?? 'Content';
    const subtitle = labels ? (lang === 'ko' ? labels.sub_ko : labels.sub_en) : '';

    return (
        <section className="section-padding min-h-screen bg-transparent">
            <div className="max-w-7xl mx-auto">

                {/* ── Section header — same style as home ── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-[#E5E5E5] pb-8">
                    <div>
                        <p className="label-mono mb-3">
                            {lang === 'ko' ? '전체 목록' : 'All Posts'}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-[#1D1D1F] leading-[1.1]">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-lg text-black/40 font-medium mt-3 max-w-xl">{subtitle}</p>
                        )}
                    </div>
                </div>

                {/* ── Cards ── */}
                {content.length === 0 ? (
                    <div className="py-12">
                        <p className="text-black/40">
                            {lang === 'ko' ? '게시글이 없습니다.' : 'No posts found in this category yet.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {content.map((item) => {
                            if (category === 'projects') {
                                return (
                                    <div
                                        key={item.slug}
                                        onClick={() => { navigate(`/projects/${item.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                        className="apple-card group cursor-pointer flex flex-col overflow-hidden active:scale-[0.98] transform-gpu bg-white shadow-xl shadow-black/[0.03]"
                                    >
                                        <div className="w-full aspect-[16/9] overflow-hidden bg-[#F5F5F7]">
                                            <img
                                                src={(item as any).image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-[#1D1D1F] mb-3" style={{ letterSpacing: '-0.03em' }}>{item.title}</h3>
                                            <p className="text-[#636366] text-base leading-[1.6] line-clamp-2 flex-grow mb-6" style={{ letterSpacing: '-0.01em' }}>
                                                {item.excerpt}
                                            </p>
                                            <div className="flex items-center gap-6 mt-4 font-sans">
                                                {(item as any).url && (
                                                    <a
                                                        href={(item as any).url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="group/url inline-flex items-center gap-1 text-[#059669] text-[0.93rem] font-bold relative w-fit hover:text-emerald-700 transition-colors"
                                                    >
                                                        <span>{lang === 'ko' ? '사이트 가기' : 'Visit Site'}</span>
                                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/url:-translate-y-0.5 group-hover/url:translate-x-0.5" strokeWidth={2.5} />
                                                    </a>
                                                )}

                                                <div
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(`/projects/${item.slug}`);
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }}
                                                    className="group/link inline-flex items-center gap-1 text-black/40 text-[0.93rem] font-bold relative w-fit cursor-pointer hover:text-black transition-colors"
                                                >
                                                    <span>{lang === 'ko' ? '스토리 보기' : 'Read Story'}</span>
                                                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" strokeWidth={2} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                // insights style
                                return (
                                    <div
                                        key={item.slug}
                                        onClick={() => { navigate(`/insights/${item.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                        className="apple-card p-7 group cursor-pointer flex flex-col active:scale-[0.98] transform-gpu bg-white"
                                    >
                                        <div className="mb-5">
                                            <span className="px-3 py-1 text-[10px] font-bold uppercase bg-black/5 text-black/50" style={{ letterSpacing: '0.12em' }}>
                                                {(item as any).label || item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-3 group-hover:text-emerald-600 transition-colors text-[#1D1D1F]" style={{ letterSpacing: '-0.03em', lineHeight: 1.25 }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-[#737373] text-sm mb-6 leading-[1.6] line-clamp-3 flex-grow">
                                            {item.excerpt}
                                        </p>
                                        <div className="pt-5 border-t border-[#E5E5E5] flex items-center justify-between">
                                            <span className="text-sm font-medium text-black/40 font-sans" style={{ letterSpacing: '0' }}>
                                                {item.publishedDate ? new Date(item.publishedDate).toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
                                            </span>
                                            <ArrowRight size={16} strokeWidth={1.5} className="text-black/20 group-hover:text-emerald-600 transition-all duration-150 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContentList;
