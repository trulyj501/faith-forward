import React, { useId } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';



import { ArrowLeft, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';

import { getContentBySlug, ContentItem } from '../lib/content';





const ContentDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    if (!slug) return <Navigate to="/services" />;

    const post: ContentItem | undefined = getContentBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-screen pt-40 pb-20 px-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">콘텐츠를 찾을 수 없습니다.</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="btn-primary inline-flex items-center gap-2"
                >
                    <ArrowLeft size={18} />
                    목록으로 이동
                </button>
            </div>
        );
    }

    const { category } = post;
    const isProject = category === 'services';
    const categoryLabel = {
        services: '서비스',
        insights: '인사이트',
        prompts: '프롬프트'
    }[category] || category;


    return (
        <article className="pt-32 pb-10 px-6 sm:px-10 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* breadcrumb */}
                <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-xs md:text-sm font-bold tracking-widest text-black/40 hover:text-emerald-600 transition-colors flex items-center gap-2 group/back"
                    >
                        <ArrowLeft size={16} className="transition-transform group-hover/back:-translate-x-1" />
                        뒤로 가기
                    </button>

                    <div className="flex items-center gap-3">
                        <Link
                            to={`/${category}`}
                            className="text-xs md:text-sm font-bold tracking-widest text-black/40 hover:text-emerald-600 transition-colors uppercase"
                        >
                            {categoryLabel}
                        </Link>
                    </div>
                </div>

                <header className="mb-10">
                    <div className="mb-6 flex items-center gap-2">
                        {post.tags && post.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/[0.03] text-black/40 uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-3 leading-[1.1]">
                        {post.title}
                    </h1>


                </header>

                <div className="prose prose-lg prose-emerald max-w-none prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-4 prose-headings:text-emerald-700 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mt-0 prose-p:mb-4 prose-li:my-0.5 prose-img:rounded-3xl prose-img:shadow-2xl prose-img:shadow-black/10">
                    <Markdown
                        remarkPlugins={[remarkGfm, remarkBreaks]}
                        components={{
                            a: ({ href, children }) => (
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    {children}
                                </a>
                            ),
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            blockquote: ({ node, children }: any) => {
                                const calloutTypes: Record<string, { bg: string; border: string; icon: string; label: string }> = {
                                    'NOTE': { bg: 'bg-gray-50', border: 'border-gray-200', icon: '📘', label: 'NOTE' },
                                    'TIP': { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: '💡', label: 'TIP' },
                                    'WARNING': { bg: 'bg-amber-50', border: 'border-amber-200', icon: '⚠️', label: 'WARNING' },
                                    'IMPORTANT': { bg: 'bg-purple-50', border: 'border-purple-200', icon: '🔔', label: 'IMPORTANT' },
                                    'INFO': { bg: 'bg-sky-50', border: 'border-sky-200', icon: 'ℹ️', label: 'INFO' },
                                };

                                // Extract raw text from the HAST node tree
                                const extractText = (n: any): string => {
                                    if (!n) return '';
                                    if (n.type === 'text') return n.value || '';
                                    if (Array.isArray(n.children)) return n.children.map(extractText).join('');
                                    return '';
                                };
                                const rawText = extractText(node).trim();
                                const match = rawText.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT|INFO)\]\s?/);

                                if (match) {
                                    const type = calloutTypes[match[1]];
                                    const content = rawText.replace(/^\[!(NOTE|TIP|WARNING|IMPORTANT|INFO)\]\s?/, '').trim();
                                    return (
                                        <div className={`not-prose my-6 rounded-2xl border ${type.border} ${type.bg} px-6 py-5`}>
                                            <p className="text-[0.97rem] text-gray-700 leading-relaxed m-0">{content}</p>
                                        </div>
                                    );
                                }
                                return (
                                    <blockquote className="bg-emerald-50/60 rounded-2xl px-6 py-5 my-0 not-italic text-gray-700 [&>p]:my-0 [&>ul]:my-0 [&>ol]:my-0">
                                        {children}
                                    </blockquote>
                                );
                            },
                        }}
                    >{post.content}</Markdown>
                </div>


                {/* 작성일 - 하단 */}
                {post.publishedDate && (
                    <div className="mt-12 pt-6 pb-0 border-t border-black/5 flex items-center gap-6 text-black/40">
                        <div className="flex items-center gap-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em]">작성일</p>
                            <p className="font-mono text-sm font-medium">
                                {new Date(post.publishedDate).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                        </div>
                        <span className="text-black/20">·</span>
                        <div className="flex items-center gap-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em]">작성자</p>
                            <p className="text-sm font-medium">Faith Forward</p>
                        </div>
                    </div>
                )}

                {isProject && (post as any).url && (
                    <div className="mt-20 pt-12 border-t border-black/5">
                        <div className="bg-black/5 rounded-3xl p-10">
                            <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                                서비스를 직접 경험해보세요
                            </h3>
                            <p className="mb-8">
                                지금 바로 링크를 통해 실제 서비스를 확인하실 수 있습니다.
                            </p>
                            <a
                                href={(post as any).url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white font-bold rounded-2xl hover:bg-black transition-all active:scale-[0.98] w-fit"
                            >
                                웹사이트 방문하기
                                <ArrowUpRight size={18} strokeWidth={2.5} />
                            </a>
                        </div>
                    </div>
                )}

                {category === 'prompts' && (
                    <div className="mt-20 pt-12 border-t border-black/5">
                        <div className="bg-black/5 rounded-3xl p-10">
                            <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">
                                혼자 학습이 어렵나요?
                            </h3>
                            <p className="mb-8">
                                1:1 온라인 코칭을 요청해 보세요. 학습을 도와드립니다.
                            </p>
                            <button
                                onClick={() => {
                                    const message = encodeURIComponent(`[${post.title}] 1:1 온라인 코칭 요청합니다`);
                                    navigate(`/contact?message=${message}`);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D1D1F] text-white font-bold rounded-2xl hover:bg-black transition-all active:scale-[0.98] w-fit"
                            >
                                문의하기
                                <ArrowUpRight size={18} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>
                )}

                <footer className="mt-10 pt-8 border-t border-black/10">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate(`/${category}`)}
                            className="btn-secondary"
                        >
                            목록으로
                        </button>
                        <button
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-widest"
                        >
                            위로 가기
                        </button>
                    </div>
                </footer>
            </div>
        </article>
    );
};

export default ContentDetail;
