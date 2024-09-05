import { useState } from 'react';

const items = [
  { label: '챌린지', program_type: 'CHALLENGE' },
  { label: 'LIVE 클래스', program_type: 'LIVECLASS' }
];

const TypeFilter = () => {
  const [activeItems, setActiveItems] = useState<string[]>(['CHALLENGE', 'LIVECLASS']);

  const handleClick = (programType: string) => {
    console.log(programType);
    setActiveItems(prevActiveItems =>
      prevActiveItems.includes(programType)
        ? prevActiveItems.filter(item => item !== programType) // 이미 활성화된 상태라면 비활성화
        : [...prevActiveItems, programType] // 활성화된 상태가 아니라면 추가
    );
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-[8px] mt-[8px] mb-[20px] h-[32px] justify-center items-center text-xs
      p-[8px] pt-[8px] pb-[20px] 
        desktop:p-[20px] desktop:pt-[20px] desktop:pb-[40px]'>
        {items.map(item => (
          <button
            key={item.program_type}
            className={`pt-[8px] pb-[20px] rounded-full border ${activeItems.includes(item.program_type) ? 'bg-Primary-10 text-Primary-100 border-Primary-50' : 'bg-white text-Neutral-grayscale-40 border-Neutral-grayscale-80'} 
            desktop:px-[16px] desktop:py-[8px] desktop:w-[${item.program_type === 'LIVECLASS' ? '110px' : '74px'}] desktop:h-[40px] desktop:gap-[10px] desktop:border-[1px] desktop:rounded-[99px]`}
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
