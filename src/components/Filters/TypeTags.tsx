import React from 'react';

// 상태에 따른 스타일을 반환하는 함수
const getTagStyles = (status: string) => {
  return 'bg-Primary-30 text-Primary-100';
};

// 상태에 따른 텍스트를 반환하는 함수
const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    'CHALLENGE': '챌린지',
    'LIVECLASS': 'LIVE 클래스',
  };
  return statusMap[status] || '';
};

interface CareerTagProps {
  status: 'CHALLENGE' | 'LIVECLASS';
}

const TypeTags: React.FC<CareerTagProps> = ({ status }) => {
  const tagStyles = getTagStyles(status);
  const statusText = getStatusText(status);

  return (
    <div className={`w-auto min-w-[60px] h-[24px] px-2.5 py-1 rounded-lg flex justify-center items-center gap-1 ${tagStyles}`}>
      <div className="flex items-center justify-center text-xs font-medium overflow-hidden whitespace-nowrap">
        {statusText}
      </div>
    </div>
  );
};

export default TypeTags;
