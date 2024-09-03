import { useState } from 'react';

const items = [
  { label: { step: '', description: 'ALL' }, career_type: 'all' },
  { label: { step: 'STEP 1', description: '커리어탐색' }, career_type: 'step1' },
  { label: { step: 'STEP 2', description: '서류 준비' }, career_type: 'step2' },
  { label: { step: 'STEP 3', description: '면접 준비' }, career_type: 'step3' }
];

const CareerFilter = () => {
  const [activeItems, setActiveItems] = useState<string[]>(['all']); // 기본값으로 'all' 사용

  const handleClick = (careerType: string) => {
    if (careerType === 'all') {
      // "All" 버튼을 클릭했을 때 모든 스텝을 활성화
      setActiveItems(items.map(item => item.career_type));
    } else {
      if (activeItems.includes('all')) {
        // "All"이 선택된 상태에서 개별 스텝이 클릭되면 "All"을 비활성화하고 해당 스텝만 활성화
        setActiveItems([careerType]);
      } else {
        // 개별 스텝 클릭 시 기존 동작
        setActiveItems(
          activeItems.includes(careerType)
            ? activeItems.filter(activeItem => activeItem !== careerType)
            : [...activeItems, careerType]
        );
      }
    }
  };
  return (
    <div className='flex justify-center'>
      <div className="relative w-full max-w-[350px] desktop:max-w-[612px] h-[50px] desktop:h-[68px] mt-[72px] desktop:mt-[90px] mb-[8px] gap-[8px] border-t border-t-[0.8px] border-transparent inline-flex justify-center text-sm bg-white desktop:px-[8px] desktop:py-[8px] px-[8px] py-[8px] ">
        <div className='flex w-full h-full rounded-3xl overflow-hidden border justify-center items-center desktop:gap-[4px]'>
          {items.map(item => (
            <button
              key={item.career_type}
              className={` box-border px-[8px] desktop:px-[10px] py-[8px] desktop:py-[8px] w-[82px] desktop:w-[142px] h-[38px] mx-[0.8px] items-center leading-none whitespace-pre-line ${activeItems.includes(item.career_type)
                ? 'bg-Primary-100 text-white' // 활성화된 상태일 때
                : 'bg-white text-Neutral-grayscale-45' // 비활성화된 상태일 때
                }`}
              style={{
                borderRadius: '320px',
              }}
              onClick={() => handleClick(item.career_type)}
            >
              <div className="flex flex-col items-center">
                <span className="text-[9.6px]">{item.label.step}</span>
                {item.label.description && (
                  <span className="text-xs font-semibold">{item.label.description}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

};

export default CareerFilter;