import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="pt-40 pb-32 px-6 sm:px-10 md:px-16 lg:px-24 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="text-xs md:text-sm font-bold tracking-widest text-black/40 hover:text-emerald-600 transition-colors flex items-center gap-2 mb-12 group"
                >
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    뒤로 가기
                </button>

                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-3 text-[#1A1A1A]">이용 약관</h1>
                    <p className="text-gray-400 text-sm">최종 수정일: 2026년 3월 9일</p>
                </div>

                <div className="prose max-w-none space-y-10 text-[#3A3A3A] leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제1조 (목적)</h2>
                        <p className="text-base">
                            본 약관은 Faith Forward(이하 "운영자")가 제공하는 웹사이트 및 서비스(이하 "서비스")를 이용함에 있어 운영자와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제2조 (약관의 효력 및 변경)</h2>
                        <p className="text-base">
                            본 약관은 서비스를 이용하는 모든 이용자에게 적용됩니다. 운영자는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 웹사이트에 공지한 날로부터 효력이 발생합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제3조 (서비스 이용)</h2>
                        <p className="text-base mb-3">이용자는 다음 각 호의 행위를 해서는 안 됩니다.</p>
                        <ul className="list-disc list-outside pl-5 space-y-1.5 text-base">
                            <li>타인의 개인정보를 도용하거나 허위 정보를 제공하는 행위</li>
                            <li>서비스에 게시된 콘텐츠를 무단으로 복제, 배포, 상업적으로 이용하는 행위</li>
                            <li>서비스 운영을 방해하거나 시스템에 악의적인 영향을 미치는 행위</li>
                            <li>기타 법령 또는 본 약관에 위반하는 행위</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제4조 (지식재산권)</h2>
                        <p className="text-base">
                            서비스에 게시된 모든 콘텐츠(글, 이미지, 영상, 코드 등)의 저작권 및 지식재산권은 Faith Forward 또는 해당 권리자에게 있습니다. 이용자는 운영자의 사전 서면 동의 없이 이를 복제, 수정, 배포할 수 없습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제5조 (면책 조항)</h2>
                        <p className="text-base">
                            운영자는 천재지변, 불가항력적인 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다. 또한 이용자가 서비스를 통해 얻은 정보를 바탕으로 취한 행동의 결과에 대해서도 책임지지 않습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제6조 (뉴스레터 구독)</h2>
                        <p className="text-base">
                            이용자가 이메일로 뉴스레터를 구독하는 경우, 수신 거부 의사를 언제든지 밝힐 수 있으며 운영자는 이를 즉시 처리합니다. 뉴스레터에는 Faith Forward의 서비스 업데이트, 인사이트 등이 포함될 수 있습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제7조 (준거법 및 재판관할)</h2>
                        <p className="text-base">
                            본 약관은 대한민국 법률에 따라 해석되며, 서비스와 관련하여 분쟁이 발생한 경우 대한민국 법원을 관할 법원으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제8조 (문의)</h2>
                        <div className="bg-black/[0.03] rounded-2xl p-6 text-base space-y-1">
                            <p><span className="font-bold">운영자:</span> Faith Forward</p>
                            <p><span className="font-bold">이메일:</span> hiqotd@gmail.com</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default TermsPage;
