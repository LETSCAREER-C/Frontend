import { useState } from 'react';

const items = [
  { label: '챌린지', program_type: 'challenge' },
  { label: 'LIVE 클래스', program_type: 'live-class' }
];

const TypeFilter = () => {
  // 초기 상태를 'challenge'와 'live-class' 모두 활성화된 상태로 설정
  const [activeItems, setActiveItems] = useState<string[]>(['challenge', 'live-class']);

  const handleClick = (programType: string) => {
    setActiveItems(prevActiveItems =>
      prevActiveItems.includes(programType)
        ? prevActiveItems.filter(item => item !== programType) // 이미 활성화된 상태라면 비활성화
        : [...prevActiveItems, programType] // 활성화된 상태가 아니라면 추가
    );
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-[8px] mt-[8px] mb-[20px] h-[32px] justify-center items-center text-xs'>
        {items.map(item => (
          <button
            key={item.program_type}
            className={`px-[12px] py-[8px] rounded-full border ${activeItems.includes(item.program_type) ? 'bg-pr-10 text-pr-100 border-pr-50' : 'bg-white text-neut-40 border-neut-80'}`}
            onClick={() => handleClick(item.program_type)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );

};

export default TypeFilter;
