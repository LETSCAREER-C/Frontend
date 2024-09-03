import React from "react"
import { Star } from "../../assets/svg";
import { useState, useEffect } from 'react';

const dummyData = [
  {
    id: 1,
    number_of_star: 5,
    program_name: '가나다라마바사',
    review_date: '24.01.01',
    user_name: '홍길동',
    contents: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
  },

];

interface Review {
  id: number;
  number_of_star: number;
  program_name: string;
  review_date: string;
  user_name: string;
  contents: string;
}

// 리뷰 컴포넌트 하나
const ReviewBox: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(dummyData);
  }, []);

  return (
    <div className='
  w-[289px] h-[328px] 
  pt-[20px] pb-[0px] pl-[0px] pr-[0px] 
  gap-[8px] 
  rounded-t-md rounded-r-none rounded-b-none rounded-l-none 
  border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] 
  opacity-0
'>
    </div>
  )
}

export default ReviewBox;