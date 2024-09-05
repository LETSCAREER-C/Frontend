import { Curriculum } from '../../types/ProgramDetailType';

interface Props {
  curriculum: Curriculum;
}

export default function TabCurriculum({ curriculum }: Props) {
  return (
    <article className="w-full max-w-md mx-auto rounded-lg bg-white shadow-md mb-4 p-6">
      <div className="flex items-start">
        {/* 순서 번호 */}
        <span className="text-Primary-100 text-xl font-bold mr-4">{curriculum.order}</span>

        {/* 커리큘럼 제목과 내용 */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-Neutral-grayscale-30 mb-2">
            {curriculum.title}
          </h3>
          <p className="text-sm text-Neutral-grayscale-35">{curriculum.content}</p>
        </div>
      </div>
    </article>
  );
}
