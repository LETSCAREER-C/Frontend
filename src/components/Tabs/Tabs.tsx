import {
  Curriculum,
  Description,
  FAQ,
  Hooking,
  Lecturer,
  Review,
} from '../../types/ProgramDetailType';
import TabHookingImages from './TabHookingImages';
import TabDescription from './TabDescription';
import TabLecturerIntro from './TabLecturerIntro';
import TabCurriculum from './TabCurriculum';
import TabLatestReview from './TabLatestReview';

interface Props {
  hookingArr?: Hooking[];
  programIntro: Description[];
  lecturerIntro: Lecturer;
  curriculums: Curriculum[];
  latestReviews: Review[];
  faq: FAQ[];
}

export default function Tabs({
  hookingArr,
  programIntro,
  lecturerIntro,
  curriculums,
  latestReviews,
  faq,
}: Props) {
  return (
    <section>
      <section>
        {hookingArr &&
          hookingArr.map((hookinData, i) => {
            return <TabHookingImages key={i} hookingData={hookinData} />;
          })}
      </section>

      <section>
        <h3 className="font-pretendard text-Primary-100 mx-auto">프로그램 소개</h3>
        {programIntro.map((introData, i) => {
          return <TabDescription key={i} introData={introData} />;
        })}
      </section>

      <section>
        <h3 className="font-pretendard text-Primary-100 mx-auto">연사 소개</h3>
        <TabLecturerIntro lecturerData={lecturerIntro} />
      </section>

      <section>
        <h3 className="font-pretendard text-Primary-100 mx-auto">커리큘럼 소개</h3>
        {curriculums.map((curriculum, i) => {
          return <TabCurriculum key={i} curriculum={curriculum} />;
        })}
      </section>

      <section>
        <h3 className="font-pretendard text-Primary-100 mx-auto">강의 후기</h3>
        <TabLatestReview reviews={latestReviews} />
      </section>
    </section>
  );
}
