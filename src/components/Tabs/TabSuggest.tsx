import React, { useState } from 'react';
import { RecommendedProgram } from '../../types/ProgramDetailType';

interface Props {
  recommendedPrograms: RecommendedProgram[];
}

export default function TabSuggest({ recommendedPrograms }: Props) {
  const [activeTab, setActiveTab] = useState('탐색'); // 현재 선택된 탭 상태

  // 각 탭별 프로그램 필터링
  const filteredPrograms = recommendedPrograms.filter((program) => program.tag === activeTab);

  return (
    <section className="mx-auto p-4 max-w-xl">
      <div className="text-center mb-6">
        <h2 className="font-bold text-lg">추천 강좌</h2>
        <p className="text-sm text-gray-500">이런 강좌는 어떠세요?</p>
      </div>
      {/* 탭 메뉴 */}
      <div className="flex justify-center space-x-4 mb-6">
        {['탐색', '서류', '면접'].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTab(tag)}
            className={`font-semibold py-1 px-4 rounded ${
              activeTab === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 프로그램 목록 */}
      <div className="grid gap-4">
        {filteredPrograms.slice(0, 3).map((program) => (
          <div key={program.programId} className="bg-white rounded-lg shadow p-4">
            <img
              src={program.thumbnail}
              alt={program.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="font-bold text-base mb-1">{program.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{program.intro}</p>
            <p className="text-xs text-gray-400">
              모집 마감: {program.recruitEndDate} / 진행일정: {program.programStartDate} ~{' '}
              {program.programEndDate}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
