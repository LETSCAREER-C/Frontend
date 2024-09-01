import React from 'react';

export enum RecruitState {
  RECRUITING = 'recruiting',
  ENDED = 'ended',
}

// 상태에 따른 스타일을 반환하는 함수
const getTagStyles = (status: RecruitState) => {
  switch (status) {
    case RecruitState.RECRUITING:
      return 'bg-pr-10 text-pr-100';
    case RecruitState.ENDED:
      return 'bg-neut-80 text-neut-35';
    default:
      return '';
  }
};

// 상태에 따른 텍스트를 반환하는 함수
const getStatusText = (status: RecruitState) => {
  switch (status) {
    case RecruitState.RECRUITING:
      return '모집 중';
    case RecruitState.ENDED:
      return '마감';
    default:
      return '';
  }
};


interface RecruitTagProps {
  status: RecruitState;  // RecruitState enum을 사용하도록 업데이트
}

const RecruitTags: React.FC<RecruitTagProps> = ({ status }) => {
  const tagStyles = getTagStyles(status);
  const statusText = getStatusText(status);

  // 상태에 따른 크기 설정
  const isRecruiting = status === 'recruiting';
  const width = isRecruiting ? 'w-[54px]' : 'w-[41px]'; // 모집 중일 때 더 큰 너비

  // const width = status === RecruitState.RECRUITING ? 'w-[54px]' : 'w-[41px]';

  return (
    <div className={`flex justify-center items-center px-[10px] py-[4px] rounded-lg gap-1 ${width} ${tagStyles}`}>
      <div className={`flex items-center justify-center text-xs font-medium whitespace-nowrap`}>
        {statusText}
      </div>
    </div>
  );

};

export default RecruitTags;
