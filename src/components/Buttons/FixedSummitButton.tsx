import { RecruitState } from '../../components/Filters/RecruitTags';
import { Program } from '../../types/ProgramListType';

interface SummitBtnProps {
  program: Program;
}

const FixedSummitButton: React.FC<SummitBtnProps> = ({ program }) => {
  const handleClick = () => {
    console.log('클릭');

    if (program.recruitStatus === RecruitState.ENDED) {
      alert('재출시 알림 신청이 완료되었습니다!');
    }
    if (program.recruitStatus === RecruitState.RECRUITING) {
      alert('신청 되었습니다. 감사합니다 :)');
    }
  };

  const renderRecruitStatusTag = () => {
    const statusConfig = {
      [RecruitState.ENDED]: {
        label: '신청마감',
        style: 'w-[64px] h-[30px] bg-Neutral-grayscale-85 text-Neutral-grayscale-35',
      },
      [RecruitState.RECRUITING]: {
        label: `D-${program.deadline}`,
        style: 'w-[64px] h-[30px] bg-Primary-100 text-white',
      },
    };

    const config = statusConfig[program.recruitStatus];
    return config ? (
      <div className={`${config.style} text-14px text-center rounded-lg font-normal`}>
        {config.label}
      </div>
    ) : null;
  };

  const renderButtonLabel = () => {
    const buttonConfig = {
      [RecruitState.RECRUITING]: {
        label: '신청하기',
        style: 'w-[75px] h-[30px] font-semibold text-Neutral-grayscale-100',
      },
      [RecruitState.ENDED]: {
        label: '재출시 알림 신청하기',
        style: 'w-[177px] h-[30px] font-semibold text-Point-Normal',
      },
    };

    const config = buttonConfig[program.recruitStatus];
    return config ? (
      <div className={`${config.style} text-center`}>
        {config.label}
      </div>
    ) : null;
  };


  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[340px] h-[108px] p-[10px] bg-Neutral-grayscale-100 rounded-xl font-Pretendard shadow-lg">
      <div className="flex justify-center items-center gap-[12px]">
        {/* {program.recruitStatus === RecruitState.ENDED ? (
          <div className="w-[64px] h-[30px] bg-Neutral-grayscale-85 text-Neutral-grayscale-35 text-14px text-center rounded-lg font-normal">
            신청마감
          </div>
        ) : program.recruitStatus === RecruitState.RECRUITING ? (
          <div className="w-[64px] h-[30px] bg-Primary-100 text-white text-14px text-center items-center rounded-lg font-normal">
            D-{program.deadline}
          </div>
        ) : null} */}
        {renderRecruitStatusTag()}
        <p className="text-16px text-Neutral-grayscale-10 font-semibold whitespace-nowrap">
          {program.title}
        </p>
      </div>

      <button
        className="w-[320px] h-[50px] bg-Neutral-grayscale-0 text-22px flex justify-center items-center rounded-xl mt-[8px] pointer-events-auto"
        onClick={handleClick}>
        {/* {program.recruitStatus === RecruitState.RECRUITING ? (
          <div className="w-[75px] h-[30px] font-semibold text-Neutral-grayscale-100 text-center">
            신청하기
          </div>
        ) : program.recruitStatus === RecruitState.ENDED ? (
          <div className="w-[177px] h-[30px] font-semibold text-Point-Normal text-center">
            재출시 알림 신청하기
          </div>
        ) : null} */}
        {renderButtonLabel()}
      </button>
    </div>
  );
};

export default FixedSummitButton;
