// All 필터는 선택해도 색상 바뀌지 않음 & All 2번 누르면 일단 step1 선택되게 해놓음
// 반응형 pc 미구현
import { useState } from 'react';

// program_type에 맞게 items 배열을 객체 배열로 수정
const items = [
  { label: 'All', program_type: 'all' },
  { label: 'STEP 1\n커리어 탐색', program_type: 'step1' },
  { label: 'STEP 2\n서류 준비', program_type: 'step2' },
  { label: 'STEP 3\n면접 준비', program_type: 'step3' }
];

const CareerFilter = () => {
  const [activeItems, setActiveItems] = useState<string[]>(['all']); // program_type 값을 기본값으로 사용

  const handleClick = (programType: string) => {
    if (programType === 'all') {
      if (activeItems.includes('all') && activeItems.length === items.length) {
        // "All"이 선택된 상태에서 다시 "All"을 클릭하면 "STEP 1"만 선택
        setActiveItems(['step1']);
      } else {
        // "All"이 선택되지 않은 상태에서는 모든 스텝 선택
        setActiveItems(items.map(item => item.program_type));
      }
    } else {
      if (activeItems.includes('all')) {
        // "All"이 선택된 상태에서 개별 스텝이 클릭되면 해당 스텝만 선택 해제
        setActiveItems(
          activeItems.includes(programType)
            ? activeItems.filter(activeItem => activeItem !== programType)
            : [...activeItems, programType]
        );
      } else {
        // "All"이 선택되지 않은 상태에서 개별 스텝 클릭 처리
        setActiveItems(
          activeItems.includes(programType)
            ? activeItems.filter(activeItem => activeItem !== programType)
            : [...activeItems, programType]
        );
      }
    }
  };

  return (
    <div className="relative w-full inline-flex items-start justify-center text-center text-[0.75rem] text-neut-45 font-font h-10">
      {items.map(item => (
        <button
          key={item.program_type}
          className={`h-10 px-5 py-1 rounded-full border border-[#e7e7e7] justify-center items-center text-xs leading-none ${item.program_type !== 'all' && activeItems.includes(item.program_type) ? 'bg-pr-100 text-white' : 'neut-95 text-neut-45'}`}
          onClick={() => handleClick(item.program_type)}
          style={{ whiteSpace: 'pre-line' }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default CareerFilter;