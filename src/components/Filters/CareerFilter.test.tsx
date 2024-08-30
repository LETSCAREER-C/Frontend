// // __tests__/CareerFilter.test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import CareerFilter from './CareerFilter';

// describe('CareerFilter', () => {
//   test('renders filter items', () => {
//     render(<CareerFilter />);
//     const items = ['All', '커리어 탐색', '서류 준비', '면접 준비'];

//     items.forEach(item => {
//       expect(screen.getByText(item)).toBeInTheDocument();
//     });
//   });

//   test('clicking on a filter item sets it as active', () => {
//     render(<CareerFilter />);

//     const careerExploreItem = screen.getByText('커리어 탐색');
//     fireEvent.click(careerExploreItem);

//     expect(careerExploreItem).toHaveClass('active'); // Tailwind CSS class for active state
//   });

//   // 테스트 성공 코드 예시
//   // it("clicking on a filter item sets it as active", () => {
//   //   const { getByText } = render(<CareerFilter />);
//   //   const careerExploreItem = getByText('커리어 탐색');

//   //   fireEvent.click(careerExploreItem);

//   //   // 'bg-blue-500 text-white'가 올바른 활성 상태 클래스이므로 이를 체크합니다.
//   //   expect(careerExploreItem).toHaveClass('bg-blue-500');
//   //   expect(careerExploreItem).toHaveClass('text-white');
//   // });

// });
