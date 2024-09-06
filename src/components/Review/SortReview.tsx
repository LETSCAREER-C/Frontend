import React from 'react';

interface SortOptionsProps {
  onSortChange: (sortType: 'latest' | 'highRating' | 'lowRating') => void;
}

const SortReview: React.FC<SortOptionsProps> = ({ onSortChange }) => {
  return (
    <div className="w-full flex justify-end mb-4">
      <select
        onChange={(e) => onSortChange(e.target.value as 'latest' | 'highRating' | 'lowRating')}
        className=" focus:outline-none bg-Neutral-grayscale-90 rounded-lg p-2 mt-[71px] text-[16px]
        w-[110px] px-[8px] py-[8px] mr-[15px] sm:mr-[40px] text-Neutral-grayscale-30">
        <option value="latest" className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80">최신순</option>
        <option value="highRating" className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80">별점 높은순</option>
        <option value="lowRating" className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80">별점 낮은순</option>
      </select>
    </div>
  );
};

export default SortReview;
