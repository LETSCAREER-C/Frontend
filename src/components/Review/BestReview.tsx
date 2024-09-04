import { Review } from '../../types/ProgramDetailType';
import { Star } from '../../assets/svg';

interface BEST_REVIEW {
  bestReview: Review[];
  programTitle: string;
}

export default function BestReview({ bestReview, programTitle }: BEST_REVIEW) {
  return (
    <section className="bg-Neutral-grayscale-90 py-10">
      <div className="mt-20 px-5 font-pretendard max-w-2xl mx-auto">
        <h1 className="text-Neutral-grayscale-0 text-2xl font-bold mb-10 text-center">
          렛츠커리어로 커리어를
          <br /> 쌓은 선배들의 후기
        </h1>
        <article className="space-y-6">
          {bestReview.map((bestreview, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <p className="text-lg font-semibold text-gray-800">{bestreview.userName}</p>
                  <p className="text-sm text-gray-500">{programTitle}</p>
                </div>
                <div className="flex">
                  {Array(bestreview.grade)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]"
                      />
                    ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">{bestreview.content}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
