import React, { useEffect, useState } from "react";
import ReviewBox from "../../components/Review/ReviewBox";
import { BackBtn } from "../../assets/svg";
import SortReview from "../../components/Review/SortReview";
// import LiveThumbnail from "../../assets/images/LiveThumbnail.png"

export interface Review {
  id: number;
  number_of_star: number;
  program_name: string;
  review_date: string;
  user_name: string;
  dream_work_field: string;
  year: number;
  major: string;
  status: string;
  contents: string;
}

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortedReviews, setSortedReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const dummyData: Review[] = [
        {
          id: 1,
          number_of_star: 5,
          program_name: '가나다라마바사',
          review_date: '24.01.01',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 2,
          number_of_star: 3,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.02.01',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 3,
          number_of_star: 4,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.05.20',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 4,
          number_of_star: 2,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.08.11',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '불합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 5,
          number_of_star: 5,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.09.01',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 6,
          number_of_star: 4,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.12.01',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 7,
          number_of_star: 5,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.12.01',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 8,
          number_of_star: 3,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.12.01',
          user_name: '홍길동',
          dream_work_field: 'IT',
          year: 4,
          major: '디자인 전공',
          status: '불합격',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
      ];

      setReviews(dummyData);
      setSortedReviews(dummyData);
    };

    fetchReviews();
  }, []);

  const handleSortChange = (sortedData: Review[]) => {
    setSortedReviews(sortedData);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="bg-Neutral-grayscale-90 pb-[160px]">
      <div className="justify-center min-h-screen flex flex-col items-center relative ">
        <img alt="LiveThumbnail" className="flex w-full h-[410px] mt-[60px] mb-[80px] bg-Neutral-grayscale-75" />
        <header className="relative flex flex-col items-center justify-center w-full text-center w-[258px] h-[66px]">
          <p className="h-[26px] mb-[8px] text-Primary-100 text-[18px] font-medium">강좌 후기</p>
          <div className="relative flex items-center justify-between w-[258px]">
            <p className="w-full h-[32px] text-Neutral-grayscale-0 text-[24px] font-bold whitespace-nowrap">실제 수강생들의 솔직한 후기</p>
            <button className="absolute left-[-50px] sm:left-[-80px] h-[42px] w-[42px] mt-[5px] sm:h-[52px] sm:w-[52px]" onClick={handleBackClick}>
              <BackBtn />
            </button>
          </div>
        </header>
        <SortReview reviews={reviews} onSortChange={handleSortChange} />
        <main>
          <main>
            <section className='flex flex-wrap justify-center items-center mt-[50px]'>
              {sortedReviews.map((review) => (
                <ReviewBox key={review.id} review={review} />
              ))}
            </section>
          </main>
        </main>
      </div>
    </div>
  );
}

export default ReviewPage;