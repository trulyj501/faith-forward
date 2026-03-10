import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
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
                    <h1 className="text-4xl font-bold tracking-tight mb-3 text-[#1A1A1A]">개인정보 처리방침</h1>
                    <p className="text-gray-400 text-sm">최종 수정일: 2026년 3월 9일</p>
                </div>

                <div className="prose max-w-none space-y-10 text-[#3A3A3A] leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제1조 (목적)</h2>
                        <p className="text-base">
                            Faith Forward(이하 "우리")는 이용자들의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및 관련 법령에 따라 이용자의 개인정보를 보호하고자 합니다. 본 방침은 우리가 어떤 정보를 수집하고, 어떻게 활용하며, 어떻게 보호하는지 안내합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제2조 (수집하는 개인정보 항목)</h2>
                        <p className="text-base mb-3">우리는 뉴스레터 구독 및 문의 접수 시 아래의 정보를 수집합니다.</p>
                        <ul className="list-disc list-outside pl-5 space-y-1.5 text-base">
                            <li>이메일 주소 (뉴스레터 구독 시)</li>
                            <li>이름, 이메일 주소, 문의 내용 (문의 폼 이용 시)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제3조 (개인정보의 수집 및 이용 목적)</h2>
                        <ul className="list-disc list-outside pl-5 space-y-1.5 text-base">
                            <li>Faith Forward 뉴스레터 및 서비스 업데이트 발송</li>
                            <li>문의사항 처리 및 이용자 응대</li>
                            <li>서비스 개선을 위한 내부 통계 분석</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제4조 (개인정보의 보유 및 이용 기간)</h2>
                        <p className="text-base">
                            이용자의 개인정보는 수집 목적이 달성된 후에는 즉시 파기합니다. 단, 관련 법령에 의한 정보 보유 의무가 있는 경우에는 해당 기간 동안 보관합니다. 뉴스레터 수신 거부 요청 시 해당 이메일 주소는 즉시 삭제됩니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제5조 (개인정보의 제3자 제공)</h2>
                        <p className="text-base">
                            우리는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령에 의한 경우는 예외로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제6조 (이용자의 권리)</h2>
                        <p className="text-base mb-3">이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다.</p>
                        <ul className="list-disc list-outside pl-5 space-y-1.5 text-base">
                            <li>개인정보 수집·이용에 대한 동의 철회</li>
                            <li>개인정보 열람 및 정정 요청</li>
                            <li>개인정보 삭제 요청</li>
                        </ul>
                        <p className="text-base mt-3">위 권리 행사는 아래 연락처로 요청하시면 됩니다.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제7조 (개인정보 보호 책임자)</h2>
                        <div className="bg-black/[0.03] rounded-2xl p-6 text-base space-y-1">
                            <p><span className="font-bold">책임자:</span> Faith Forward 운영팀</p>
                            <p><span className="font-bold">이메일:</span> contact@faithfwd.cc</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#1A1A1A] mb-3">제8조 (방침의 변경)</h2>
                        <p className="text-base">
                            본 개인정보 처리방침은 법령 개정 또는 서비스 변경에 따라 수시로 변경될 수 있으며, 변경 시 웹사이트를 통해 공지합니다.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
