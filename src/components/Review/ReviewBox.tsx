import React from 'react';
import { Star } from '../../assets/svg';

interface ReviewProps {
  review: {
    id: number;
    number_of_star: number;
    program_name: string;
    review_date: string;
    user_name: string;
    contents: string;
  };
}

const ReviewBox: React.FC<ReviewProps> = ({ review }) => {
  return (
    <article
      key={review.id}
      className="
        w-[289px] h-[328px] p-[20px]
        sm:w-[360px] sm:h-[328px] sm:px-[40px] sm:-py[28px]
        border border-gray-300 rounded-lg m-4 bg-white
      "
    >
      <div className="flex items-center gap-[4px]">
        {[...Array(review.number_of_star)].map((_, index) => (
          <Star key={index} className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]" />
        ))}
      </div>
      <div className="text-[16px] sm:text-[18px] font-semibold mb-2">{review.program_name}</div>
      <div className="text-sm text-gray-500 mb-4">{review.review_date}</div>
      <div className="text-sm font-medium mb-[16px]">{review.user_name}</div>
      <div className="text-sm text-gray-700">{review.contents}</div>
    </article>
  );
};

export default ReviewBox;
