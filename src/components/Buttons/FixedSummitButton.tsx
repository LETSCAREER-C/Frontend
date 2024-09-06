import { RecruitState } from "../../components/Filters/RecruitTags";
import { Program } from "../../types/Program";

// 프로그램 이름 & 리크루팅 여부 & 신청 마감 데드라인을 불러와야 함!

interface SummitBtnProps {
  program: Program;
}

const FixedSummitButton: React.FC<SummitBtnProps> = ({ program }) => {

  const handleClick = () => {
    if (program.status === RecruitState.ENDED) {
      alert("재출시 알림 신청이 완료되었습니다!");
    }
  };

  return (
    <div className="w-[340px] h-[108px] p-[10px] bg-Neutral-grayscale-100 rounded-xl font-Pretendard">

      <div className="flex justify-center items-center gap-[12px]">
        {program.status === RecruitState.ENDED ? (
          <div className="w-[64px] h-[30px] bg-Neutral-grayscale-85 text-Neutral-grayscale-35 text-14px text-center rounded-lg font-normal">
            신청마감
          </div>
        ) : program.status === RecruitState.RECRUITING ? (
          <div className="w-[64px] h-[30px] bg-Primary-100 text-white text-14px text-center items-center rounded-lg font-normal">
            D-{program.dday}
          </div>
        ) : null}
        <p className="text-16px text-Neutral-grayscale-10 font-semibold whitespace-nowrap">{program.title}</p>
      </div>

      <button className="w-[320px] h-[50px] bg-Neutral-grayscale-0 text-22px flex justify-center items-center rounded-xl mt-[8px]"
        onClick={handleClick}
        disabled={program.status !== RecruitState.ENDED}>
        {program.status === RecruitState.RECRUITING ? (
          <div className="w-[75px] h-[30px] font-semibold text-Neutral-grayscale-100 text-center">
            신청하기
          </div>
        ) : program.status === RecruitState.ENDED ? (
          <div className="w-[177px] h-[30px] font-semibold text-Point-Normal text-center">
            재출시 알림 신청하기
          </div>
        ) : null}
      </button>

    </div>
  );
};

export default FixedSummitButton;
