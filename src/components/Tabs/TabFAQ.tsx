import { useState } from 'react';
import { FAQ } from '../../types/ProgramDetailType';

interface Props {
  faqList: FAQ[];
}

export default function TabFAQ({ faqList }: Props) {
  // 각 FAQ 항목의 토글 상태를 관리하는 상태
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 토글 함수
  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index); // 클릭한 항목이 이미 열려있으면 닫고, 아니면 열기
  };

  return (
    <section className="max-w-2xl mx-auto py-8">
      <h2 className="text-center font-bold text-lg mb-6 text-Primary-100">무엇이든 물어보세요</h2>
      <div>
        {faqList.map((faq, index) => (
          <div key={faq.order} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-white shadow-sm rounded-lg focus:outline-none"
            >
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold mr-2">Q</span>
                <p className="text-sm font-medium">{faq.question}</p>
              </div>
              <span className="text-gray-500">{activeIndex === index ? '▾' : '▸'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-sm bg-gray-50 rounded-b-lg border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
