import React from 'react';

interface SortOptionsProps {
  onSortChange: (sortType: 'latest' | 'highRating' | 'lowRating') => void;
}

const SortReview: React.FC<SortOptionsProps> = ({ onSortChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        onChange={(e) => onSortChange(e.target.value as 'latest' | 'highRating' | 'lowRating')}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option value="latest">최신순</option>
        <option value="highRating">별점 높은순</option>
        <option value="lowRating">별점 낮은순</option>
      </select>
    </div>
  );
};

export default SortReview;
