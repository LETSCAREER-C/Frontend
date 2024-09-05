import React from 'react';
import ReviewBox from '../../components/Review/ReviewBox';

const ReviewPage: React.FC = () => {
  return (
    <div>
      <ReviewBox
        review={{
          id: 0,
          number_of_star: 0,
          program_name: '',
          review_date: '',
          user_name: '',
          contents: '',
        }}
      />
    </div>
  );
};

export default ReviewPage;
