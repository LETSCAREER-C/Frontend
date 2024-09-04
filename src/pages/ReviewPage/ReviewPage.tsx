import React, { useEffect, useState } from "react";
import ReviewBox from "../../components/Review/ReviewBox"; // ReviewBox 컴포넌트 임포트

// Review 타입 정의
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
      ];

      setReviews(dummyData); // 상태 설정
    };

    fetchReviews();
  }, []);

  return (
    <div className='flex flex-wrap justify-center items-center mt-[72px]'>
      {reviews.map((review) => (
        <ReviewBox key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewPage;