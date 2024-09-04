import DetailThumbnail from '../../components/Thumbnail/DetailThumbnail';
import BestReview from '../../components/Review/BestReview';
import Tabs from '../../components/Tabs/Tabs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DETAILDATA } from '../../types/ProgramDetailType';
import { DUMMY_DATA } from '../../assets/dummy/DetailPageDummy';

export default function DetailPage() {
  const { programId } = useParams<{ programId: string }>();
  const [detailData, setDetailData] = useState<DETAILDATA>();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`https://letmec.p-e.kr/program/${programId}`);

        setDetailData(res.data.result);
      } catch (error) {
        console.log('에러 발생', error);
      }
    };

    fetchDetail();
  }, []);

  console.log('데이터 확인', detailData);

  return (
    <main>
      <DetailThumbnail />
      <BestReview bestReview={DUMMY_DATA.bestReviews} programTitle={DUMMY_DATA.title} />
      <Tabs
        hookingArr={DUMMY_DATA.hooking}
        programIntro={DUMMY_DATA.description}
        lecturerIntro={DUMMY_DATA.lecturer}
        curriculum={DUMMY_DATA.curriculum}
        faq={DUMMY_DATA.faq}
      />
    </main>
  );
}
