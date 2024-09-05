import React, { useEffect, useState } from "react";
import ReviewBox from "../../components/Review/ReviewBox";
import { BackBtn } from "../../assets/svg";

interface Review {
  id: number;
  number_of_star: number;
  program_name: string;
  review_date: string;
  user_name: string;
  contents: string;
}

const ReviewPage: React.FC = () => {
  // useState에 타입 명시
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortType, setSortType] = useState<'latest' | 'highRating' | 'lowRating'>('latest');

  useEffect(() => {
    // 더미데이터 가져오기
    const fetchReviews = async () => {
      const dummyData: Review[] = [
        {
          id: 1,
          number_of_star: 5,
          program_name: '가나다라마바사',
          review_date: '24.01.01',
          user_name: '홍길동',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 2,
          number_of_star: 3,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.01.01',
          user_name: '홍길동',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 3,
          number_of_star: 1,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.01.01',
          user_name: '홍길동',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 4,
          number_of_star: 2,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.01.01',
          user_name: '홍길동',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 5,
          number_of_star: 4,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.01.01',
          user_name: '홍길동',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
        {
          id: 6,
          number_of_star: 2,
          program_name: '가나다라마바사akdfkj',
          review_date: '24.01.01',
          user_name: '홍길동',
          contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
        },
      ];

      setReviews(dummyData);
    };

    fetchReviews();
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  const sortReviews = (reviews: Review[]) => {
    switch (sortType) {
      case 'latest':
        return [...reviews].sort((a, b) => new Date(b.review_date).getTime() - new Date(a.review_date).getTime());
      case 'highRating':
        return [...reviews].sort((a, b) => b.number_of_star - a.number_of_star);
      case 'lowRating':
        return [...reviews].sort((a, b) => a.number_of_star - b.number_of_star);
      default:
        return reviews;
    }
  };

  const sortedReviews = sortReviews(reviews);

  return (
    <div className="justify-center bg-Neutral-grayscale-90 min-h-screen flex flex-col items-center relative">
      <img className="flex w-full h-[410px] mt-[60px] mb-[80px] bg-Neutral-grayscale-75" />
      <header className="relative flex flex-col items-center justify-center w-full text-center w-[258px] h-[66px]">
        <p className="h-[26px] mb-[8px] text-Primary-100 text-[18px] font-medium">강좌 후기</p>
        <p className="h-[32px] text-Neutral-grayscale-0 text-[24px] font-bold">실제 수강생들의 솔직한 후기</p>
      </header>
      <button className="absolute top-[calc(30% - 30px)] left-[20px] h-[42px] w-[42px] sm:h-[52px] sm:w-[52px]" onClick={handleBackClick}>
        <BackBtn />
      </button>
      <div className="flex justify-end w-full p-4">
        <select
          onChange={(e) => setSortType(e.target.value as 'latest' | 'highRating' | 'lowRating')}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="latest">최신순</option>
          <option value="highRating">별점 높은순</option>
          <option value="lowRating">별점 낮은순</option>
        </select>
      </div>
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
  );
}

export default ReviewPage;